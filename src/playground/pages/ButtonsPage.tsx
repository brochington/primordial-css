import React, { FC } from 'react';

type ButtonVariants = 'solid' | 'outline' | 'ghost' | 'link' | 'neu';

type ButtonRowProps = {
  variant: ButtonVariants;
  color: string;
};

const ButtonRow: FC<ButtonRowProps> = (props: ButtonRowProps) => {
  const { variant, color } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 8rem)',
        gridAutoRows: '4rem',
        gap: '1rem',
        alignItems: 'end'
      }}
    >
      <div>
        <button p-variant={variant} p-size="xs" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant={variant} p-size="sm" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant={variant} p-size="md" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant={variant} p-size="lg" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant={variant} p-size="xl" p-color={color}>
          Button
        </button>
      </div>
    </div>
  );
};

type ButtonColorGridProps = {
  
};

const colorNames = ['base', 'brand', 'accent', 'aux-1', 'aux-2','aux-3', 'success', 'warning', 'danger', 'info'];

const ButtonColorGrid: FC<ButtonColorGridProps> = (props: ButtonColorGridProps) => {
  const {  } = props;

  return (
    <div
    style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 8rem)',
      gridAutoRows: '8rem',
      gap: '1rem',
    }}
    >
        {colorNames.map((colorName) => (
          <div>
            <button p-variant="solid" p-color={colorName} className="capitalize">{colorName}</button>
          </div>
        ))}
    </div>
  );
};


type Props = {};

const ButtonsPage: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h1>Buttons</h1>

      <div>
        <h2>Variants</h2>

        <h3>Solid</h3>
        <ButtonRow variant="solid" color="brand" />

        <h3>Outline</h3>
        <ButtonRow variant="outline" color="brand" />

        <h3>Ghost</h3>
        <ButtonRow variant="ghost" color="brand" />

        <h3>Link</h3>
        <ButtonRow variant="link" color="brand" />

        <h3>Neu</h3>
        <ButtonRow variant="neu" color="brand" />
      </div>

      <div>
        <h2>Colors</h2>
        <ButtonColorGrid />
      </div>
    </div>
  );
};

export default ButtonsPage;
