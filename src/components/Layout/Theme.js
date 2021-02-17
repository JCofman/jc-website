export const sizes = {
  smallPhone: 380,
  phone: 576,
  tablet: 768,
  desktop: 1024,
  giant: 1200,
};

export const maxWidth = `1024px`;

export const breakPoints = {
  xsmall: `@media (min-width: ${sizes.smallPhone}px)`,
  small: `@media (min-width: ${sizes.phone}px)`,
  medium: `@media (min-width: ${sizes.tablet}px)`,
  large: `@media (min-width: ${sizes.desktop}px)`,
  xlarge: `@media (min-width: ${sizes.giant}px)`,
};

export const themeTransition = `1s ease-in-out`;

export const colors = {
  white: `#F4F4F4`,
  black: `#010101`,
  primary: `#50E3C2`,
  secondary: `#4A90E2`,
  darkGrey: `#201c29`,
  lightGrey: `#535B68`,
};

export const textShadows = {
  light: `2px 2px 0 rgba(0,0, 0,0.3)`,
  dark: `2px 2px 0 rgba(255,255, 255,0.3)`,
};

export const linearGradients = {
  dark: `linear-gradient(rgba(1, 1, 1, 0.95), rgba(1, 1, 1, 0.95))`,
  light: `linear-gradient(rgba(244, 244, 244, 0.95), rgba(244, 244, 244, 0.95))`,
};

export const themes = {
  dark: `dark`,
  light: `light`,
};

const Theme = {
  mode: themes[`light`],
  ...breakPoints,
  maxWidth,
  themeTransition,
  colors: { ...colors },
};

export default Theme;
