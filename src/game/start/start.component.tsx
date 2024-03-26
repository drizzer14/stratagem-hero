import type { FC } from 'react';

import * as Styled from './start.styles';

const Start: FC = () => {
  return (
    <Styled.Start>
      <Styled.Title>Stratagem Hero</Styled.Title>

      <Styled.Prompt>Press any Stratagem Input to Start!</Styled.Prompt>
    </Styled.Start>
  );
};

export default Start;
