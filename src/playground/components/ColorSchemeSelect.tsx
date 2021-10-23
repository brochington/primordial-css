import React, { FC, useEffect } from 'react';

type ColorSchemes = 'light' | 'dark' | 'dim';

const ColorSchemeSelect: FC = () => {
  const [colorScheme, setColorScheme] = React.useState<ColorSchemes>('light');

  useEffect(() => {
    const defaultScheme = window.matchMedia('(prefers-color-scheme: dark)')
      ? 'dark'
      : 'light';
    const savedColorScheme =
      window.localStorage.getItem('color-scheme') ?? defaultScheme;
    setColorScheme(savedColorScheme as ColorSchemes);
  }, []);

  useEffect(() => {
    document.firstElementChild?.setAttribute('color-scheme', colorScheme);
    window.localStorage.setItem('color-scheme', colorScheme);
  }, [colorScheme]);

  function handleColorSchemeChange(event: React.ChangeEvent<HTMLFormElement>) {
    setColorScheme(event.target.value);
  }

  return (
    <form className="row items-center" onChange={handleColorSchemeChange}>
      <fieldset id="color-scheme-group">
        <label htmlFor="light">light</label>
        <input
          type="radio"
          value="light"
          name="color-scheme-group"
          checked={colorScheme === 'light'}
        />
        <label htmlFor="dark">dark</label>
        <input
          type="radio"
          value="dark"
          name="color-scheme-group"
          checked={colorScheme === 'dark'}
        />
        <label htmlFor="dim">dim</label>
        <input
          type="radio"
          value="dim"
          name="color-scheme-group"
          checked={colorScheme === 'dim'}
        />
      </fieldset>
    </form>
  );
};

export default ColorSchemeSelect;
