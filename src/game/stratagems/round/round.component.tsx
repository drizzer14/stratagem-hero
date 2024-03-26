import type { FC } from 'react';

import * as Styled from './round.styles';

const Round: FC<{
  currentRoundIndex: number;
}> = ({ currentRoundIndex }) => {
  return (
    <Styled.Round>
      <Styled.Title>Round</Styled.Title>

      <Styled.Index>{currentRoundIndex + 1}</Styled.Index>
    </Styled.Round>
  );
};

export default Round;
