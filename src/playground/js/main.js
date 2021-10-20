const doc = document.firstElementChild;
const colorSchemeForm = document.querySelector('#color-scheme-form');

function setColorScheme(scheme) {
  doc.setAttribute('color-scheme', scheme);
  window.localStorage.setItem('color-scheme', scheme);  
}

function main() {
  // init
  const savedColorScheme = window.localStorage.getItem('color-scheme') ?? 'light';
  colorSchemeForm.querySelector(`[value="${savedColorScheme}"`).setAttribute('checked', true);
  setColorScheme(savedColorScheme);

  // events
  colorSchemeForm?.addEventListener('change', (evt) =>
    setColorScheme(evt.target.value)
  );
}

window.addEventListener('DOMContentLoaded', main);
