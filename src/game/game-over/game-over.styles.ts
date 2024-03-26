import { styled } from 'styled-components';

export const GameOver = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 96px;
  font-weight: 600;
`;

const Score = styled.span`
  color: var(--brand);
`;

export const HighScoreTitle = styled.h2`
  font-size: 32px;
`;

export const HighScore = styled(Score)`
  margin-top: -24px;

  font-size: 64px;
`;

export const FinalScoreTitle = styled.h2`
  font-size: 24px;
`;

export const FinalScore = styled(Score)`
  margin-top: -16px;

  font-size: 48px;
`;

export const RestartPrompt = styled.span`
  margin-top: 72px;

  color: var(--brand);
  font-size: 32px;
  font-weight: 600;
  text-transform: none;
`;
