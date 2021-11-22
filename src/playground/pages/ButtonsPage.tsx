import React, { FC } from 'react';

type ButtonVariants = 'solid' | 'outline' | 'ghost' | 'link' | 'neu';

type ButtonSizeRowProps = {
  variant: ButtonVariants;
  color: string;
};

const ButtonSizeRow: FC<ButtonSizeRowProps> = (props: ButtonSizeRowProps) => {
  const { variant, color } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 8rem)',
        gridAutoRows: '4rem',
        gap: '1rem',
        alignItems: 'end',
      }}
    >
      <div>{variant}</div>
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

type ButtonVariantRowProps = {
  color: string;
};

const ButtonVariantRow: FC<ButtonVariantRowProps> = (props: ButtonVariantRowProps) => {
  const { color } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 8rem)',
        gridAutoRows: '4rem',
        gap: '1rem',
        alignItems: 'end',
      }}
    >
      <div>{color}</div>
      <div>
        <button p-variant="solid" p-size="md" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant="outline" p-size="md" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant="link" p-size="md" p-color={color}>
          Button
        </button>
      </div>
      <div>
        <button p-variant="ghost" p-size="md" p-color={color}>
          Button
        </button>
      </div>
      {/* <div>
        <button p-variant={variant} p-size="md" p-color={color}>
          Button
        </button>
      </div> */}
    </div>
  );
};

type ButtonColorGridProps = {};

const colorNames = [
  'base',
  'brand',
  'accent',
  'aux-1',
  'aux-2',
  'aux-3',
  'success',
  'warning',
  'danger',
  'info',
];

type Props = {};

const ButtonsPage: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div>
      <h1>Buttons</h1>

      <div>
        <h2>Variants</h2>
        <ButtonSizeRow variant="solid" color="brand" />
        <ButtonSizeRow variant="outline" color="brand" />
        <ButtonSizeRow variant="ghost" color="brand" />
        <ButtonSizeRow variant="link" color="brand" />
        <ButtonSizeRow variant="neu" color="brand" />
      </div>

      <div>
        <h2>Colors</h2>
        <ButtonVariantRow color="brand" />
        <ButtonVariantRow color="accent" />
        <ButtonVariantRow color="aux-1" />
        <ButtonVariantRow color="aux-2" />
        <ButtonVariantRow color="aux-3" />
        <ButtonVariantRow color="success" />
        <ButtonVariantRow color="danger" />
        <ButtonVariantRow color="warning" />
        <ButtonVariantRow color="info" />
      </div>
    </div>
  );
};

export default ButtonsPage;
