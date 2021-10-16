import React from 'react';
import Transition from './src/components/Transition';
import { colors } from './src/components/Layout/Theme';
import Terser from 'terser';

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

// const MagicScriptTag = () => {
//   let codeToRunOnClient = `
// (function() {
//   function getInitialColorMode() {
//     const persistedColorPreference = JSON.parse(window.localStorage.getItem('theme'));
//     const hasPersistedPreference = typeof persistedColorPreference === 'string';
//   // If the user has explicitly chosen light or dark,
//   // let's use it. Otherwise, this value will be null.
//   if (hasPersistedPreference) {
//     return persistedColorPreference;
//   }
//   // If they haven't been explicit, let's check the media
//   // query
//   const mql = window.matchMedia('(prefers-color-scheme: dark)');
//   const hasMediaQueryPreference = typeof mql.matches === 'boolean';
//   if (hasMediaQueryPreference) {
//     return mql.matches ? 'dark' : 'light';
//   }
//   // If they are using a browser/OS that doesn't support
//   // color themes, let's default to 'light'.
//   return 'light';
//   }
//   const colorMode = getInitialColorMode();
//   const root = document.documentElement;
//   root.style.setProperty(
//     '--color-text',
//     colorMode === 'light'
//       ? '${colors.black}'
//       : '${colors.white}'
//   );
//   root.style.setProperty(
//     '--color-background',
//     colorMode === 'light'
//       ? '${colors.white}'
//       : '${colors.black}'
//   );
//   root.style.setProperty(
//     '--color-primary',
//     colorMode === 'light'
//       ? '${colors.primary}'
//       : '${colors.primary}'
//   );
//   root.style.setProperty('--initial-color-mode', colorMode);
// })()`;
//   // eslint-disable-next-line react/no-danger
//   return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
// };

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
 const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};


const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(colors))
    .replace('🔑', "theme")
    .replace('⚡️', "dark");

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};
