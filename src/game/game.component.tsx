import { match } from 'ts-pattern';
import { useState, FC, lazy, Suspense } from 'react';

import { useStratagemKey } from 'hooks';

import * as Styled from './game.styles';

const Start = lazy(() => import('./start'));
const GameOver = lazy(() => import('./game-over'));
const Stratagems = lazy(() => import('./stratagems'));

enum GameState {
  Start,
  Ongoing,
  Over,
}

const Game: FC = () => {
  const [state, setState] = useState(GameState.Start);

  useStratagemKey(() => setState(GameState.Ongoing), []);

  const [finalScore, setFinalScore] = useState(0);

  return (
    <Styled.Game>
      <Suspense fallback={null}>
        {match(state)
          .with(GameState.Start, () => <Start />)
          .with(GameState.Ongoing, () => (
            <Stratagems
              onComplete={(score) => {
                setFinalScore(score);
                setState(GameState.Over);
              }}
            />
          ))
          .with(GameState.Over, () => <GameOver finalScore={finalScore} />)
          .run()}
      </Suspense>
    </Styled.Game>
  );
};

export default Game;
