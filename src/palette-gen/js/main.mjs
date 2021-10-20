// chroma docs: https://gka.github.io/chroma.js/

let colors = [];
let colorMatrixHandles = [];
let selectedColors = []

function createColorMatrix() {
  let colorMatrix = document.getElementById("color-matrix");

  for (let i of [...Array(27).keys()]) {
    const el = document.createElement("div");
    el.id = `color-matrix-tile-${i}`;
    el.setAttribute('color-matrix', i);
    el.addEventListener('click', handleTileClick);
    colorMatrix.appendChild(el);
    colorMatrixHandles.push(el);
  }
}

function handleTileClick(evt) {
  const i = evt.target.getAttribute('color-matrix');

  const selectedColorsEl = document.getElementById("selected-colors");

  const el = document.createElement('div');
  const v = colors[i];
  el.style.backgroundColor = `hsl(${v[0]}, ${v[1] * 100}%, ${v[2] * 100}%)`;
  el.style.width = '5rem';
  el.style.height = '5rem';

  el.addEventListener('click', handleSelectedTileClick);

  selectedColorsEl.appendChild(el);
}

function handleSelectedTileClick(evt) {
  evt.target.remove();
}

function clearSelectedColors() {
  const selectedColorsEl = document.getElementById('selected-colors');
  selectedColorsEl.textContent = '';

  selectedColors = [];
}

// TODO: Try to replace direction with negative numbers.
function getH(start, modify, direction) {
  if (direction === 'up') {
    return start + modify > 360
      ? (360 - start) + modify
      : start + modify;
  }

  if (direction === 'down') {
    return start - 20 < 0
      ? (start + 360) - modify
      : start - modify;
  }
}

function generateColors(baseColor) {
  // base colors
  let baseColors = [];

  // setup
  const base = chroma(baseColor);
  let [h, s, l] = base.hsl();
  baseColors.push([h, s, l]);

  let prevDark = [h, s, l];
  let prevLight = [h, s, l];

  for (let c of [...Array(4)]) {
    prevLight = [
      getH(prevLight[0], 20, "up"),
      prevLight[1],
      prevLight[2] + .08,
    ];

    prevDark = [
      getH(prevDark[0], 25, "down"),
      // prevDark[1] + (1 - prevDark[1]) / 2,
      prevDark[1] + 0.08,
      prevDark[2] - 0.07,
      // prevDark[2] - prevDark[2] / 5,
    ];


    baseColors.unshift(prevLight);
    baseColors.push(prevDark);
  }

  const lighterColors = baseColors.map(([h, s, l]) => [getH(h, 8, 'up'), s - 0.3, l + 0.1])
  const darkerColors = baseColors.map(([h, s, l]) => [getH(h, 8, 'down'), s + 0.2, l - 0.15])

  colors = [
    ...lighterColors,
    ...baseColors,
    ...darkerColors,
  ];
}

function renderColorGrid(nextColorHex) {
  generateColors(nextColorHex);

  colors.forEach((v, i) => {
    const el = colorMatrixHandles[i];
    el.style.backgroundColor = `hsl(${v[0]}, ${v[1] * 100}%, ${v[2] * 100}%)`;
  })
}

window.addEventListener('load', () => {
  const baseColorPicker = document.getElementById('base-color-picker');
  const clearSelectedBtn = document.getElementById('clear-selected');

  createColorMatrix();

  baseColorPicker.addEventListener('change', (evt) => {
    renderColorGrid(evt.target.value);
  })

  clearSelectedBtn.addEventListener('click', clearSelectedColors)
})