import type { FC } from 'react';

import * as Styled from './arrow.styles';

const Arrow: FC = () => {
  return (
    <Styled.Arrow
      width="62"
      height="66"
      viewBox="0 0 62 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.715027 31.8015L31.6459 0.694458L61.707 31.8015V40.515H46.3713V65.9583H16.9198V40.515H0.71283V31.8015H0.715027Z"
        fill="currentColor"
      />
    </Styled.Arrow>
  );
};

export default Arrow;
