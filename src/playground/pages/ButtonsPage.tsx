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

type Props = {};

const ButtonsPage: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h1>Buttons</h1>

      <h3>Solid</h3>
      <ButtonRow variant="solid" color="brand" />

      <h3>Outline</h3>
      <ButtonRow variant="outline" color="brand" />

      <h3>Ghost</h3>
      <ButtonRow variant="outline" color="brand" />

      <h3>Link</h3>
      <ButtonRow variant="link" color="brand" />

      <h3>Neu</h3>
      <ButtonRow variant="neu" color="brand" />
    </div>
  );
};

export default ButtonsPage;
