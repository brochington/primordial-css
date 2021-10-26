import React, { FC } from 'react';

type ColorTileProps = {
  name: string;
};

const ColorTile: FC<ColorTileProps> = (props: ColorTileProps) => {
  const { name } = props;

  return (
    <div
      className="flex justify-start items-start py1 px2"
      style={{
        backgroundColor: `var(--p-${name})`,
      }}
    >
      {name}
    </div>
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
          <ColorTile name="text-1" />
          <ColorTile name="text-2" />
        </ColorGrid>

        <h3>Surface</h3>
        <ColorGrid>
          <ColorTile name="surface-1" />
          <ColorTile name="surface-2" />
          <ColorTile name="surface-3" />
          <ColorTile name="surface-4" />
        </ColorGrid>

        <h3>Jewel</h3>
        <ColorGrid>
          <ColorTile name="jewel-1" />
          <ColorTile name="jewel-2" />
          <ColorTile name="jewel-3" />
          <ColorTile name="jewel-4" />
          <ColorTile name="jewel-5" />
          <ColorTile name="jewel-6" />
          <ColorTile name="jewel-7" />
          <ColorTile name="jewel-8" />
          <ColorTile name="jewel-9" />
        </ColorGrid>

        <h3>Pastel</h3>
        <ColorGrid>
          <ColorTile name="pastel-1" />
          <ColorTile name="pastel-2" />
          <ColorTile name="pastel-3" />
          <ColorTile name="pastel-4" />
          <ColorTile name="pastel-5" />
          <ColorTile name="pastel-6" />
          <ColorTile name="pastel-7" />
          <ColorTile name="pastel-8" />
          <ColorTile name="pastel-9" />
        </ColorGrid>

        <h3>Earth</h3>
        <ColorGrid>
          <ColorTile name="earth-1" />
          <ColorTile name="earth-2" />
          <ColorTile name="earth-3" />
          <ColorTile name="earth-4" />
          <ColorTile name="earth-5" />
          <ColorTile name="earth-6" />
          <ColorTile name="earth-7" />
          <ColorTile name="earth-8" />
          <ColorTile name="earth-9" />
        </ColorGrid>

        <h3>Neutral</h3>
        <ColorGrid>
          <ColorTile name="neutral-1" />
          <ColorTile name="neutral-2" />
          <ColorTile name="neutral-3" />
          <ColorTile name="neutral-4" />
          <ColorTile name="neutral-5" />
          <ColorTile name="neutral-6" />
          <ColorTile name="neutral-7" />
          <ColorTile name="neutral-8" />
          <ColorTile name="neutral-9" />
        </ColorGrid>

        <h3>Neon</h3>
        <ColorGrid>
          <ColorTile name="neon-1" />
          <ColorTile name="neon-2" />
          <ColorTile name="neon-3" />
          <ColorTile name="neon-4" />
          <ColorTile name="neon-5" />
          <ColorTile name="neon-6" />
          <ColorTile name="neon-7" />
          <ColorTile name="neon-8" />
          <ColorTile name="neon-9" />
        </ColorGrid>
      </div>
    </div>
  );
};

export default ColorsPage;
