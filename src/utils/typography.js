import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Raleway', 'serif'],
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '400i', '600', '600i'],
    },
  ],
});

export default typography;
