import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { setConfig } from 'react-hot-loader';

import Navigation from '../Navigation';
import Footer from '../Footer';
import StyledLayout from './StyledLayout';
import { themes, breakPoints, maxWidth, themeTransition, colors, GlobalStyle } from './Theme';

// gatsby react hooks alpha fix
setConfig({ pureSFC: true });

const Layout = ({ children, location }) => {
  const [themeMode, setThemeMode] = useState(`dark`);

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

export default Layout;
