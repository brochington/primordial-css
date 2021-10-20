const doc = document.firstElementChild;
const colorSchemeForm = document.querySelector('#color-scheme-form');

function setColorScheme(scheme) {
  doc.setAttribute('color-scheme', scheme);
  window.localStorage.setItem('color-scheme', scheme);  
}

function main() {
  // init color scheme
  const defaultScheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const savedColorScheme = window.localStorage.getItem('color-scheme') ?? defaultScheme;
  colorSchemeForm.querySelector(`[value="${savedColorScheme}"`).setAttribute('checked', true);
  setColorScheme(savedColorScheme);

  // events
  colorSchemeForm?.addEventListener('change', (evt) =>
    setColorScheme(evt.target.value)
  );
}

window.addEventListener('DOMContentLoaded', main);
