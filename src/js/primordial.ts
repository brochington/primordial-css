import chroma from 'chroma-js';
import isNaN from 'lodash/isNaN';

const body = document.body;

let obsConfig = {
  attributes: true,
  attributeFilter: ['style', 'color-scheme'],
};

function parseHSLString(hslString: string) {
  return hslString.match(/[+-]?([0-9]*[.])?[0-9]+/g)?.map(parseFloat) ?? [];
}

function hslPartsToString(hslParts: number[]) {
  const [h, s, l] = hslParts;

  return `hsl(${isNaN(h) ? 0 : h}, ${s * 100}%, ${l * 100}%)`;
}

function prepareHSL(hslString: string) {
  const [h, s, l] = parseHSLString(hslString);

  return `hsl(${isNaN(h) ? 0 : h}, ${s}%, ${l}%)`;
}

function toHSL(color: chroma.Color) {
  return hslPartsToString(color.hsl());
}

// function getComputedHSL(customProp: string) {
//   const tempEl = document.createElement('div');

//   tempEl.style.backgroundColor = `var(${customProp})`;
//   tempEl.style.display = 'none';

//   body?.appendChild(tempEl);

//   const brandRGB =
//     getComputedStyle(tempEl).getPropertyValue(`background-color`);

//   body?.removeChild(tempEl);

//   return hslPartsToString(chroma(brandRGB).hsl());
// }

function getHighContrastColor(customProp: string) {
  const computedStyle = getComputedStyle(document.documentElement);
  const customPropVal = computedStyle.getPropertyValue(customProp);
  const colorStr = customPropVal.includes('hsl')
    ? prepareHSL(customPropVal)
    : customPropVal;
  const color = chroma(colorStr);
  const hue = color.hsl()[0];
  const lightVersion = chroma.hsl(hue, 0.6, 0.9);
  const darkVersion = chroma.hsl(hue, 0.1, 0.1);
  const lightContrast = chroma.contrast(color, lightVersion);
  const darkContrast = chroma.contrast(color, darkVersion);

  return lightContrast > darkContrast ? lightVersion : darkVersion;
}

function updateBrandContrast() {
  const highContrastColor = getHighContrastColor('--p-brand');

  document.documentElement.style.setProperty(
    '--p-brand-contrast',
    toHSL(highContrastColor)
  );
}

function setShades(colorName: string, count = 10) {
  const computedStyle = getComputedStyle(document.documentElement);
  const scaleStart = computedStyle.getPropertyValue(`--p-${colorName}-shades-start`);
  const scaleEnd = computedStyle.getPropertyValue(`--p-${colorName}-shades-end`);

  if (scaleStart && scaleEnd) {
    const chromaStart = chroma(prepareHSL(scaleStart));
    const chromaEnd = chroma(prepareHSL(scaleEnd));
  
    // const steps = chroma.scale([chromaStart, chromaEnd]).correctLightness().colors(count);
    const steps = chroma.scale([chromaStart, chromaEnd]).gamma(0.5).colors(count);
  
    steps.map((s) => chroma(s)).forEach((s, i) => {
      document.documentElement.style.setProperty(`--p-${colorName}-${i + 1}`, toHSL(s));
      document.documentElement.style.setProperty(`--p-${colorName}-${i + 1}-text`, `hsl(0, 0%, calc((${s.hsl()[2] * 100}% - var(--contrastThreshold)) * -100))`);
    });
  }

}

window.addEventListener('DOMContentLoaded', () => {
  // setShades('base');
  // updateBrandContrast();

  let obs = new MutationObserver((mutations, obs) => {
    obs.disconnect();
    console.time('updateBrandContrast');
    // updateBrandContrast();
    // setShades('base');
    console.timeEnd('updateBrandContrast');

    obs.observe(document.documentElement, obsConfig);
  });

  obs.observe(document.documentElement, obsConfig);

  window.addEventListener('beforeunload', () => {
    obs.disconnect();
  });
});
