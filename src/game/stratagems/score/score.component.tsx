import type { FC } from 'react';

import * as Styled from './score.styles';

const Score: FC<{
  score: number;
}> = ({ score }) => {
  return (
    <Styled.Score>
      <Styled.Amount>{score}</Styled.Amount>

      <Styled.Title>Score</Styled.Title>
    </Styled.Score>
  );
};

export default Score;
