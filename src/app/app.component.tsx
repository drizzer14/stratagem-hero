import type { FC } from 'react';

import Game from 'game';
import Theme from 'theme';

import * as Styled from './app.styles';

const App: FC = () => {
  return (
    <Styled.App>
      <Game />

      <Theme />
    </Styled.App>
  );
};

export default App;
