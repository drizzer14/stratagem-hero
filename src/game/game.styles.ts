import { styled } from 'styled-components';

export const Game = styled.section`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding-top: 5%;

  &::before,
  &::after {
    position: absolute;

    display: block;

    content: '';

    width: 100%;
    height: 10px;

    background-color: #fff;
    box-shadow: 0 0 30px 0 white;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
`;
