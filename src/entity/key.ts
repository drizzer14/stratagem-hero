import { P, match } from 'ts-pattern';
import type { KeyboardEvent } from 'react';

export const Key = [
  'w',
  'arrowup',
  'd',
  'arrowright',
  's',
  'arrowdown',
  'a',
  'arrowleft',
] as const;

export const matchKey =
  (callback: (key: (typeof Key)[number]) => void) =>
  <Event extends KeyboardEvent<Window>>(event: Event) => {
    return match(event.key.toLowerCase()).with(P.union(...Key), callback);
  };
