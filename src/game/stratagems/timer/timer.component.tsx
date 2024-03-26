import { EventEmitter } from 'events';
import { FC, useEffect, useState } from 'react';

import * as Styled from './timer.styles';

export const timer = new EventEmitter();

const Timer: FC<{ onDeplete: () => void }> = ({ onDeplete }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    timer.on('decrease', () => {
      setProgress((previousProgress) => Math.max(0, previousProgress - 0.2));
    });

    timer.on('increase', (amount: number) => {
      setProgress((previousProgress) =>
        Math.min(previousProgress + amount, 100),
      );
    });
  }, [setProgress]);

  useEffect(() => {
    return () => {
      timer.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => timer.emit('decrease'), 16.6);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    if (progress === 0) {
      onDeplete();
    }
  }, [progress]);

  return (
    <Styled.Timer>
      <Styled.BackgroundTrack />

      <Styled.ProgressTrack style={{ width: `${progress}%` }} />
    </Styled.Timer>
  );
};

export default Timer;
