import React, { FC, useCallback, useEffect } from 'react';
import chroma from 'chroma-js';

type Props = {
  property: string;
};

const ColorSelect: FC<Props> = (props: Props) => {
  const { property } = props;
  const [color, setColor] = React.useState('');

  const rootEl = useCallback(() => {
    return document.querySelector(`:root`);
  }, []);

  useEffect(() => {
    let rootEl = document.documentElement;

    const computedStyle = getComputedStyle(rootEl);
    const initialH = computedStyle.getPropertyValue('--p-brand-hue');
    const initialS = computedStyle.getPropertyValue('--p-brand-saturation');
    const initialL = computedStyle.getPropertyValue('--p-brand-lightness');

    let c = chroma(`hsl(${initialH}, ${initialS}, ${initialL})`);

    setColor(c.hex());

    console.log('initialH', initialH);
    
    let obs = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log("mut");
        if (mutation.attributeName === 'style') {
          let { style } = mutation.target;
          let h = style.getPropertyValue(`--p-${property}-hue`);
          let s = style.getPropertyValue(`--p-${property}-saturation`);
          let l = style.getPropertyValue(`--p-${property}-lightness`);

          console.log(`hsl(${h}, ${s}, ${l})`);

          // c = chroma(`hsl(${h}, ${s}, ${l})`);
          // setColor(c.hex());
        }
      });
    });

    let obsConfig = {
      attributes: true,
      attributeFilter: ['style'],
    };

    let target = document.querySelector(':root');

    if (target) {
      obs.observe(target, obsConfig);
    }      
  }, []);

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const color = chroma(event.target.value);
    let [h, s, l] = color.hsl();

    rootEl().style.setProperty(`--p-${property}-hue`, `${h}`);
    rootEl().style.setProperty(`--p-${property}-saturation`, `${s * 100}%`);
    rootEl().style.setProperty(`--p-${property}-lightness`, `${l * 100}%`);

    setColor(color.hex());

  }

  return <input type="color" onChange={handleColorChange} value={color} />;
};

export default ColorSelect;
