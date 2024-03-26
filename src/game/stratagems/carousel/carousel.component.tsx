import type { FC } from 'react';

import { Stratagem, StratagemID, stratagems } from 'entity';

import * as images from '../../../../public/images/stratagems/*.svg';

import * as Styled from './carousel.styles';

const getStratagemImageURL = (id: string): string => {
  return new URL(
    // @ts-ignore
    images[id],
    import.meta.url,
  ) as unknown as string;
};

const Carousel: FC<{
  currentRound: StratagemID[];
  currentStratagem: Stratagem;
  currentStratagemIndex: number;
}> = ({ currentRound, currentStratagem, currentStratagemIndex }) => {
  return (
    <Styled.Carousel>
      <Styled.List>
        <Styled.CurrentItem>
          <img
            src={getStratagemImageURL(currentStratagem.id)}
            alt={currentStratagem.title}
          />
        </Styled.CurrentItem>

        {currentRound
          .slice(currentStratagemIndex + 1, currentStratagemIndex + 9)
          .map((id, index, restOfRound) => (
            <Styled.Item key={id}>
              <img
                src={getStratagemImageURL(restOfRound[index]!)}
                alt={stratagems[id].title}
              />
            </Styled.Item>
          ))}
      </Styled.List>

      <Styled.CurrentStratagemTitle>
        {currentStratagem.title}
      </Styled.CurrentStratagemTitle>
    </Styled.Carousel>
  );
};

export default Carousel;
