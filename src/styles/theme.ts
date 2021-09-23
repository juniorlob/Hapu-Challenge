import { darken, transparentize } from 'polished';

const theme = {
    fontFamily: "'Inter', sans-serif",

    fontSize: {
        body: { xs: '16px', md: '18px' },
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
        xl: '1.375rem',
    },
    spacing: {
        xs: '.222rem',
        sm: '.444rem',
        md: '.889rem',
        lg: '1.333rem',
        xl: '1.778rem',
        xxl: '2.222rem',

        '2lg': '2.5rem',
        '2md': '1.5rem',
        '2xl': '4rem',
        '2xxl': '4.875rem',
        '3xxl': '6.667rem',
    },
    lineHeight: { md: '2rem', '2lg': '2.666rem' },
    shadow: {
        sm: '0px 1px 1px rgba(0, 0, 0, 0.2)',
    },
    borderRadius: {
        sm: '.222rem',
    },
    transition: 'all 0.2s ease',
};

const colors = {
    primary: '#00A870',
    brandBg: '#00C88C',
    secondary: '#5E20A4',
    grey: {
        0: '#000000',
        24: '#3D3D3D',
        88: '#DFDFDF',
    },
    white: '#FFFFFF',
    warmWhite: '#FAF9F7',
    error: '#D40B2F',
};

const size = {
    '2xxs': '8rem',
    xxs: '14rem',
    '2xs': '10rem',
    '2sm': '12rem',
    xs: '20rem',
    sm: '30rem',
    md: '48rem',
    lg: '62rem',
    xl: '80rem',
};

const breakpoint = {
    xs: { min: `min-width: ${size.xs}`, max: `max-width: ${size.xs}` },
    sm: { min: `min-width: ${size.sm}`, max: `max-width: ${size.sm}` },
    md: { min: `min-width: ${size.md}`, max: `max-width: ${size.md}` },
    lg: { min: `min-width: ${size.lg}`, max: `max-width: ${size.lg}` },
    xl: { min: `min-width: ${size.xl}`, max: `max-width: ${size.xl}` },
};

const components = {
    globalStyle: {
        body: {
            fontFamily: theme.fontFamily,
            color: colors.grey['24'],
        },
    },
    Button: {
        default: {
            borderRadius: theme.borderRadius.sm,
            fontWeight: 500,
            color: colors.white,
        },
        link: { fontWeight: 500, fontSize: theme.fontSize.md },
        sizes: {
            sm: {
                fontSize: theme.fontSize.xs,
                paddingLeft: theme.spacing.sm,
                paddingRight: theme.spacing.sm,
            },
            md: {
                fontSize: theme.fontSize.md,
                paddingLeft: theme.spacing.lg,
                paddingRight: theme.spacing.lg,
            },
            lg: {
                fontSize: theme.fontSize.lg,
                paddingLeft: theme.spacing.sm,
                paddingRight: theme.spacing.sm,
            },
        },
    },
    Divider: {
        content: `' '`,
        display: 'block',
        backgroundColor: colors.grey['88'],
        height: '2px',
        width: '100%',
        margin: '0 auto',
    },
    Input: {
        height: '44px',
    },
};

const lightTheme = {
    ...theme,
    palette: {
        ...colors,
        bgBody: colors.warmWhite,
        iconColor: colors.grey['88'],
        iconSecondaryColor: colors.secondary,
        bgButtonPrimary: colors.primary,
        bgButtonPrimaryHover: colors.brandBg,
        bgButtonPrimaryDisabled: darken(0.01, colors.primary),
        heroTextColor: colors.white,
        navbarTextColor: colors.white,
        linkColorLight: colors.white,
        colorGrey88: colors.grey['88'],
        colorGrey24: colors.grey['24'],
        inputBorderColor: colors.grey['88'],
        socialIconsColor: transparentize(0.3, colors.grey['24']),
        borderIconsColor: colors.grey['88'],
        bgButtonSecondary: colors.secondary,
        copyrightColor: transparentize(0.4, colors.grey['24']),
        inputError: colors.error,
        inputSuccess: colors.primary,
        spinnerColor: colors.white,
    },
    breakpoint,
    size,
    components,
};

export default lightTheme;
