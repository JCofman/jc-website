import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { useMedia } from '../../hooks/useMedia';
import Navigation from '../Navigation';
import Footer from '../Footer';
import StyledLayout from './StyledLayout';
import { themes, breakPoints, maxWidth, themeTransition, colors, GlobalStyle } from './Theme';

// gatsby react hooks alpha fix

const getInitialTheme = preferedTheme => {
  const savedTheme = localStorage.getItem(`theme`);
  return savedTheme ? savedTheme : preferedTheme;
};

const Layout = ({ children, location }) => {
  const prefersDarkMode = usePrefersDarkMode();
  let defaultThemeMode;
  if (typeof window !== `undefined`) {
    defaultThemeMode = getInitialTheme(prefersDarkMode ? `dark` : `light`);
  }

  const [themeMode, setThemeMode] = useState(`${defaultThemeMode}`);

  const changeTheme = () => {
    setThemeMode(prevState => (prevState === `light` ? `dark` : `light`));
  };

  React.useEffect(() => {
    localStorage.setItem(`theme`, themeMode);
  }, [themeMode]);

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
  return useMedia([`(prefers-color-scheme: dark)`], [true], true);
}

export default Layout;
