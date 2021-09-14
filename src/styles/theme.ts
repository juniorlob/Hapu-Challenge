const theme = {
  fontFamily: "'Roboto', sans-serif",
  fontWeight: {},
  fontSize: {
    xxs: '12px',
  },
  spacing: {
    xxs: '4px',
  },
  shadow: {
    xs: '0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
  },
  borderRadius: {
    sm: '4px',
  },
  transition: 'all 0.3s ease',
};

const colors = {};

const lightTheme = {
  ...theme,
  palette: {
    ...colors,
  },
};

export default lightTheme;
