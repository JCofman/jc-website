import React from 'react';
import Transition from '../src/components/Transition';
import { colors } from '../src/components/Layout/Theme';
import Terser from 'terser';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './react-query-client';

const setColorsByTheme = () => {
  const colors = '🌈';
  const colorModeKey = 'theme';
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

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    // @ts-expect-error ts-migrate(7015) FIXME: Element implicitly has an 'any' type because index... Remove this comment to see the full error message
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
};

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

  const cssVariableString = Object.entries(colors).reduce((acc, [name, colorByTheme]) => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'light' does not exist on type 'string'.
    return `${acc}\n--color-${name}: ${colorByTheme.light};`;
  }, '');

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(colors))
    .replace('🔑', 'theme')
    .replace('⚡️', 'dark');

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }: any) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element, props }: { element: React.ReactNode; props: any }) => {
  return (
    <Transition {...props}>
      <QueryClientProvider client={queryClient}>{element} </QueryClientProvider>
    </Transition>
  );
};
