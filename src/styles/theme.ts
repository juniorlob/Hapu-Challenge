const theme = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: {},
    fontSize: {
        xxs: '12px',
    },
    spacing: {
        xxs: '4px',
    },
    shadow: {
        xs: '0px 1px 1px rgba(0, 0, 0, 0.2)',
    },
    borderRadius: {
        sm: '4px',
    },
    transition: 'all 0.3s ease',
}

const colors = {
    primary: '#00A870',
    secondary: '#5E20A4',
    grey: {
        '0': '#000000',
        '24': '#3D3D3D',
        '88': '#DFDFDF',
    },
    white: '#FFFFFF',
    warmWhite: '#F2F2F2',
}

const lightTheme = {
    ...theme,
    palette: {
        ...colors,
        bgColor: colors.warmWhite,
        iconColor: colors.grey['88'],
        iconSecondaryColor: colors.secondary,
    },
}

export default lightTheme
