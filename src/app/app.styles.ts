import { styled } from 'styled-components';

const backgroundImageURL = new URL(
  '../../public/images/super_earth.svg',
  import.meta.url,
) as unknown as string;

export const App = styled.main`
  height: 100%;

  padding: 7.5% 0;

  background-image: url(${backgroundImageURL});
  background-position: center center;
  background-size: 25%;
  background-repeat: no-repeat;
  background-color: #000;
`;
