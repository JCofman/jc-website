import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { setConfig } from 'react-hot-loader';

import { useMedia } from '../../hooks/useMedia';
import Navigation from '../Navigation';
import Footer from '../Footer';
import StyledLayout from './StyledLayout';
import { themes, breakPoints, maxWidth, themeTransition, colors, GlobalStyle } from './Theme';

// gatsby react hooks alpha fix
setConfig({ pureSFC: true });

const Layout = ({ children, location }) => {
  const prefersDarkMode = usePrefersDarkMode();

  const defaultThemeMode = prefersDarkMode ? `dark` : `light`;

  const [themeMode, setThemeMode] = useState(`${defaultThemeMode}`);

  const changeTheme = () => {
    setThemeMode(prevState => (prevState === `light` ? `dark` : `light`));
  };

  return (
    <ThemeProvider
      theme={{
        mode: themes[themeMode],
        ...breakPoints,
        maxWidth,
        themeTransition,
        colors: { ...colors },
      }}
    >
      <StyledLayout>
        <GlobalStyle />

        <Navigation location={location} changeTheme={changeTheme} />
        {children}
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

function usePrefersDarkMode() {
  return useMedia([`(prefers-color-scheme: dark)`], [true], false);
}

export default Layout;
