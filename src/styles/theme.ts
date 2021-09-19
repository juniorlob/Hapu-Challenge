const theme = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: { regular: 400 },
    fontSize: {
        body: '18px',
        title: {
            h1: '2.222rem',
            h2: '1.556rem',
            h3: '1.222rem',
            h4: '.889rem',
            h5: '.778rem',
        },
        xs: '.667rem',
        sm: '.778rem',
        md: '.889rem',
        lg: '1rem',
    },
    spacing: {
        sm: '.2rem',
        lg: '1.3rem',
    },
    shadow: {
        sm: '0px 1px 1px rgba(0, 0, 0, 0.2)',
    },
    borderRadius: {
        sm: '.2rem',
    },
    transition: 'all 0.3s ease',
}

const colors = {
    primary: '#00A870',
    brandBg: '#00C88C',
    secondary: '#5E20A4',
    grey: {
        '0': '#000000',
        '24': '#3D3D3D',
        '88': '#DFDFDF',
    },
    white: '#FFFFFF',
    warmWhite: '#F2F2F2',
}
const size = {
    xs: '20rem',
    sm: '30rem',
    md: '48rem',
    lg: '62rem',
    xl: '80rem',
}

const breakpoint = {
    xs: { min: `min-width: ${size.xs}`, max: `max-width: ${size.xs}` },
    sm: { min: `min-width: ${size.sm}`, max: `max-width: ${size.sm}` },
    md: { min: `min-width: ${size.md}`, max: `max-width: ${size.md}` },
    lg: { min: `min-width: ${size.lg}`, max: `max-width: ${size.lg}` },
    xl: { min: `min-width: ${size.xl}`, max: `max-width: ${size.xl}` },
}

const components = {
    globalStyle: {
        body: {
            fontSize: theme.fontSize.body,
            fontFamily: theme.fontFamily,
            color: colors.grey['24'],
        },
    },
}

const lightTheme = {
    ...theme,
    palette: {
        ...colors,
        bgBody: colors.warmWhite,
        iconColor: colors.grey['88'],
        iconSecondaryColor: colors.secondary,
        bgButtonPrimary: colors.primary,
        heroTextColor: colors.white,
        navbarTextColor: colors.white,
    },
    breakpoint,
    components,
}

export default lightTheme
