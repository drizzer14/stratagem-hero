import { styled } from 'styled-components';

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: -12px;
  margin-left: 64px;
`;

export const Title = styled.h2`
  margin-top: -32px;

  color: #fff;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Amount = styled.span`
  color: var(--brand);
  font-size: 64px;
  font-weight: 700;
`;
