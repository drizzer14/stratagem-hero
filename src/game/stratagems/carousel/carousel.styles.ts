import { styled } from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;

  height: 200px;
`;

export const List = styled.ol`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`;

export const CurrentItem = styled.li`
  height: 100%;
  aspect-ratio: 1;

  margin-left: 3px;

  border: 5px solid var(--brand);
  border-bottom: none;
  box-shadow: 0 0 15px 0 var(--brand);
`;

export const Item = styled.li`
  height: 50%;
  aspect-ratio: 1;

  opacity: 0.75;
`;

export const CurrentStratagemTitle = styled.h2`
  width: 100%;

  text-align: center;

  color: #000;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;

  background-color: var(--brand);
  box-shadow: 0 0 30px 0 var(--brand);
`;
