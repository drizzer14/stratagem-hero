import { styled } from 'styled-components';

export const Code = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-top: 24px;
`;

export const Input = styled.li`
  color: #eee;

  &[data-valid] {
    color: var(--brand);
  }

  &[data-invalid] {
    color: #f00;
  }

  &[data-input='d'] {
    transform: rotate(90deg);
  }

  &[data-input='s'] {
    transform: rotate(180deg);
  }

  &[data-input='a'] {
    transform: rotate(270deg);
  }
`;
