import type { FC } from 'react';

import * as Styled from './game-over.styles';

const GameOver: FC<{ finalScore: number }> = ({ finalScore }) => {
  return (
    <Styled.GameOver>
      <Styled.Title>Game Over</Styled.Title>

      <Styled.HighScoreTitle>High Score</Styled.HighScoreTitle>

      <Styled.HighScore>
        {localStorage.getItem('score') ?? finalScore}
      </Styled.HighScore>

      <Styled.FinalScoreTitle>Your Final Score</Styled.FinalScoreTitle>

      <Styled.FinalScore>{finalScore}</Styled.FinalScore>

      <Styled.RestartPrompt>
        Press any Stratagem Input to Start Again!
      </Styled.RestartPrompt>
    </Styled.GameOver>
  );
};

export default GameOver;
