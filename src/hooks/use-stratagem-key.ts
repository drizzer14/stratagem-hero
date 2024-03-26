import {
  DependencyList,
  KeyboardEventHandler,
  useCallback,
  useEffect,
} from 'react';

import { Key, matchKey } from 'entity';

export const useStratagemKey = (
  callback: (key: (typeof Key)[number]) => void,
  dependencies: DependencyList,
): void => {
  const onKeyDown = useCallback<KeyboardEventHandler<Window>>(
    matchKey(callback),
    dependencies,
  );

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('keydown', onKeyDown);

    // @ts-ignore
    return () => window.removeEventListener('keydown', onKeyDown);
  }, dependencies);
};
