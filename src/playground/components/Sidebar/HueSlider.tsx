import React, { FC } from 'react';

type Props = {
  name: string;
};

const HueSlider: FC<Props> = (props: Props) => {
  const {  } = props;

  function handleHueChange (event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <input type="range" min="0" max="360" value="0" onChange={handleHueChange}/>
  );
};

export default HueSlider;
