import { match } from 'ts-pattern';
import { useState, FC, useEffect } from 'react';

import { Key } from 'entity';
import { useStratagemKey } from 'hooks';

import Arrow from './arrow';
import * as Styled from './code.styles';

const normalizeKey = (key: (typeof Key)[number]): (typeof Key)[number] => {
  return match(key)
    .returnType<(typeof Key)[number]>()
    .with('arrowup', () => 'w')
    .with('arrowright', () => 'd')
    .with('arrowdown', () => 's')
    .with('arrowleft', () => 'a')
    .otherwise(() => key);
};

const Code: FC<{ code: string; onComplete: () => void }> = ({
  code,
  onComplete,
}) => {
  const [userInput, setUserInput] = useState<string[]>([]);

  const [invalid, setInvalid] = useState(false);

  useStratagemKey(
    (key) => {
      const normalizedKey = normalizeKey(key);

      if (code[userInput.length] === normalizedKey) {
        setUserInput(userInput.concat(normalizedKey));
        setInvalid(false);
      } else {
        setUserInput([]);
        setInvalid(true);
        setTimeout(() => setInvalid(false), 500);
      }
    },
    [userInput],
  );

  useEffect(() => {
    if (userInput.join('') === code) {
      setTimeout(() => {
        onComplete();
        setUserInput([]);
      }, 66.4);
    }
  }, [userInput, code]);

  return (
    <Styled.Code>
      {code.split('').map((input, index) => (
        <Styled.Input
          key={`${input}-${index}`}
          data-input={input}
          data-valid={input === userInput[index] || undefined}
          data-invalid={invalid || undefined}
        >
          <Arrow />
        </Styled.Input>
      ))}
    </Styled.Code>
  );
};

export default Code;
