import React, { FC, PropsWithChildren } from 'react';
import isNumber from 'lodash/isNumber';

type ColorTileProps = {
  name: string;
  num?: number;
};

const ColorTile: FC<ColorTileProps> = (props: ColorTileProps) => {
  const { name, num } = props;

  console.log('a');

  const numStr = isNumber(num) ? `-${num}` : '';

  return (
    <>
    <div
      className="flex justify-start items-start py1 px2"
      style={{
        color: `var(--p-${name}${numStr}-text)`,
        backgroundColor: `var(--p-${name}${numStr})`,
      }}
    >
      {`${name} ${num ?? ''}`}
    </div>
    </>
  );
};

type ColorGridProps = PropsWithChildren<{}>;

const ColorGrid: FC<ColorGridProps> = (props: ColorGridProps) => {
  const { children } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 8rem)',
        gridAutoRows: '8rem',
        gap: '1rem',
      }}
    >
      {children}
    </div>
  );
};

type Props = {};

const ColorsPage: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h1>Colors</h1>
      <div>
        <h3>Brand</h3>
        <ColorGrid>
          <ColorTile name="brand" />
          <ColorTile name="accent" />
        </ColorGrid>

        <h3>Text</h3>
        <ColorGrid>
          <ColorTile name="text" num={1} />
          <ColorTile name="text" num={2} />
        </ColorGrid>

        <h3>Surface</h3>
        <ColorGrid>
          <ColorTile name="surface" num={1}/>
          <ColorTile name="surface" num={2}/>
          <ColorTile name="surface" num={3}/>
          <ColorTile name="surface" num={4}/>
        </ColorGrid>

        <h3>Grays</h3>
        <ColorGrid>
          <ColorTile name="gray" num={0} />
          <ColorTile name="gray" num={1} />
          <ColorTile name="gray" num={2} />
          <ColorTile name="gray" num={3} />
          <ColorTile name="gray" num={4} />
          <ColorTile name="gray" num={5} />
          <ColorTile name="gray" num={6} />
          <ColorTile name="gray" num={7} />
          <ColorTile name="gray" num={8} />
          <ColorTile name="gray" num={9} />
        </ColorGrid>

        <h3>Jewel</h3>
        <ColorGrid>
          <ColorTile name="jewel" num={1} />
          <ColorTile name="jewel" num={2} />
          <ColorTile name="jewel" num={3} />
          <ColorTile name="jewel" num={4} />
          <ColorTile name="jewel" num={5} />
          <ColorTile name="jewel" num={6} />
          <ColorTile name="jewel" num={7} />
          <ColorTile name="jewel" num={8} />
          <ColorTile name="jewel" num={9} />
        </ColorGrid>

        <h3>Pastel</h3>
        <ColorGrid>
          <ColorTile name="pastel" num={1} />
          <ColorTile name="pastel" num={2} />
          <ColorTile name="pastel" num={3} />
          <ColorTile name="pastel" num={4} />
          <ColorTile name="pastel" num={5} />
          <ColorTile name="pastel" num={6} />
          <ColorTile name="pastel" num={7} />
          <ColorTile name="pastel" num={8} />
          <ColorTile name="pastel" num={9} />
        </ColorGrid>

        <h3>Earth</h3>
        <ColorGrid>
          <ColorTile name="earth" num={1} />
          <ColorTile name="earth" num={2} />
          <ColorTile name="earth" num={3} />
          <ColorTile name="earth" num={4} />
          <ColorTile name="earth" num={5} />
          <ColorTile name="earth" num={6} />
          <ColorTile name="earth" num={7} />
          <ColorTile name="earth" num={8} />
          <ColorTile name="earth" num={9} />
        </ColorGrid>

        <h3>Neutral</h3>
        <ColorGrid>
          <ColorTile name="neutral" num={1} />
          <ColorTile name="neutral" num={2} />
          <ColorTile name="neutral" num={3} />
          <ColorTile name="neutral" num={4} />
          <ColorTile name="neutral" num={5} />
          <ColorTile name="neutral" num={6} />
          <ColorTile name="neutral" num={7} />
          <ColorTile name="neutral" num={8} />
          <ColorTile name="neutral" num={9} />
        </ColorGrid>

        <h3>Neon</h3>
        <ColorGrid>
          <ColorTile name="neon" num={1} />
          <ColorTile name="neon" num={2} />
          <ColorTile name="neon" num={3} />
          <ColorTile name="neon" num={4} />
          <ColorTile name="neon" num={5} />
          <ColorTile name="neon" num={6} />
          <ColorTile name="neon" num={7} />
          <ColorTile name="neon" num={8} />
          <ColorTile name="neon" num={9} />
        </ColorGrid>
      </div>
    </div>
  );
};

export default ColorsPage;
