import { useState, FC, useRef, useMemo, useCallback, useEffect } from 'react';

import { StratagemID, stratagems } from 'entity';

import Code from './code';
import Round from './round';
import Score from './score';
import Carousel from './carousel';
import Progress, { timer } from './timer';
import * as Styled from './stratagems.styles';

const makeRounds = (): Array<StratagemID[]> => {
  const stratagemsIDs = Object.keys(stratagems);

  let index = stratagemsIDs.length;
  let randomIndex = 0;

  while (index > 0) {
    randomIndex = Math.floor(Math.random() * index);
    index -= 1;

    [stratagemsIDs[index], stratagemsIDs[randomIndex]] = [
      stratagemsIDs[randomIndex]!,
      stratagemsIDs[index]!,
    ];
  }

  const chunks: Array<StratagemID[]> = [];

  for (index = 0; index < stratagemsIDs.length; index += 8) {
    chunks.push(stratagemsIDs.slice(index, index + 8) as StratagemID[]);
  }

  return chunks;
};

const Stratagems: FC<{
  onComplete: (score: number) => void;
}> = ({ onComplete }) => {
  const [score, setScore] = useState(0);

  const rounds = useRef<Array<StratagemID[]>>(makeRounds());

  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const currentRound = useMemo(
    () => rounds.current[currentRoundIndex]!,
    [currentRoundIndex],
  );

  const [currentStratagemIndex, setCurrentStratagemIndex] = useState(0);

  const currentStratagem = useMemo(
    () => stratagems[currentRound[currentStratagemIndex]!]!,
    [currentRound, currentStratagemIndex],
  );

  const onGameComplete = useCallback((): void => {
    const prevScore = +(localStorage.getItem('score') || 0);

    if (score > prevScore) {
      localStorage.setItem('score', `${score}`);
    }

    onComplete(score);
  }, [score]);

  const [stratagemStartTime, setStratagemStartTime] = useState(Date.now());

  useEffect(() => {
    setStratagemStartTime(Date.now());
  }, [currentStratagem.id]);

  const [errorsCount, setErrorsCount] = useState(0);

  const onStratagemComplete = useCallback(() => {
    const isLastStratagemOfRound =
      currentStratagemIndex === currentRound.length - 1;
    const isLastRound = currentRoundIndex === rounds.current.length - 1;

    if (isLastRound) {
      if (isLastStratagemOfRound) {
        onGameComplete();
      }
    } else {
      if (isLastStratagemOfRound) {
        setCurrentStratagemIndex(0);
        setCurrentRoundIndex(currentRoundIndex + 1);
      } else {
        setCurrentStratagemIndex(currentStratagemIndex + 1);
      }

      timer.emit('increase', 20.664);

      const codeLength = currentStratagem.code.length;
      const codeWeight = new Set(currentStratagem.code).size;
      const stratagemEndTime = Date.now();
      const timeDiffS = (stratagemEndTime - stratagemStartTime) / 1000;

      setScore(
        (prevScore) =>
          prevScore +
          Math.round((codeWeight / timeDiffS) * codeLength) -
          (errorsCount || -1),
      );
      setErrorsCount(0);
    }
  }, [currentStratagemIndex, currentRoundIndex, stratagemStartTime, setScore]);

  return (
    <Styled.Container>
      <Round currentRoundIndex={currentRoundIndex} />

      <Styled.Stratagems>
        <Carousel
          currentRound={currentRound}
          currentStratagem={currentStratagem}
          currentStratagemIndex={currentStratagemIndex}
        />

        <Code
          code={currentStratagem.code}
          onError={() => setErrorsCount(errorsCount + 1)}
          onComplete={onStratagemComplete}
        />

        <Progress onDeplete={onGameComplete} />
      </Styled.Stratagems>

      <Score score={score} />
    </Styled.Container>
  );
};

export default Stratagems;
