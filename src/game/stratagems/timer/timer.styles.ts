import { styled } from 'styled-components';

export const Timer = styled.div`
  position: relative;

  width: 100%;
  height: 24px;

  margin-top: 10%;
`;

const Track = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  box-shadow: 0 0 10px currentColor;
  background-color: currentColor;
`;

export const BackgroundTrack = styled(Track)`
  width: 100%;

  color: #bfbfbf;
`;

export const ProgressTrack = styled(Track)`
  color: var(--brand);

  transition: width 16.6ms;
`;
