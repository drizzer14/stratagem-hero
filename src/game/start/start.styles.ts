import { styled } from 'styled-components';

export const Start = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 1em;

  font-size: 108px;
  font-weight: 700;
  letter-spacing: -3px;
  text-transform: uppercase;
  color: #fff;
`;

export const Prompt = styled.span`
  font-size: 54px;
  font-weight: 700;
  color: var(--brand);
`;
