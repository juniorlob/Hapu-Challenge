import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { switchProp, theme, ifProp, palette } from 'styled-tools'
import { LinksProps } from './Button.interface'

export const ButtonEl = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: none;
    cursor: pointer;
    font-weight: 400;
    color: ${ifProp(
        'secondary',
        palette('colorButtonSecondary'),
        palette('colorButtonPrimary')
    )};
    background-color: ${ifProp(
        'secondary',
        palette('bgButtonSecondary'),
        palette('bgButtonPrimary')
    )};
    transition: ${theme('transition')};

    ${switchProp('size', {
        sm: css`
            height: ${ifProp('link', 'auto', '32px')};
            padding: 0 ${ifProp('link', '0', theme('spacing.md'))};
            font-size: ${theme('fontSize.xs')};
            ${theme('components.Button.sizes.sm')}
        `,
        md: css`
            height: ${ifProp('link', 'auto', '44px')};
            padding: 0 ${ifProp('link', '0', theme('spacing.lg'))};
            font-size: ${theme('fontSize.sm')};
            ${theme('components.Button.sizes.md')}
        `,
        lg: css`
            height: ${ifProp('link', 'auto', '48px')};
            padding: 0 ${ifProp('link', '0', theme('spacing.lg'))};
            font-size: ${theme('fontSize.sm')};
            ${theme('components.Button.sizes.lg')}
        `,
    })}

    &:hover {
        background-color: ${ifProp(
            'secondary',
            palette('bgButtonSecondaryHover'),
            palette('bgButtonPrimaryHover')
        )};
    }

    &:active {
        background-color: ${ifProp(
            'secondary',
            palette('bgButtonSecondaryActive'),
            palette('bgButtonPrimaryActive')
        )};
    }

    &:disabled {
        background-color: ${ifProp(
            'secondary',
            palette('bgButtonSecondaryDisabled'),
            palette('bgButtonPrimaryDisabled')
        )} !important;
        color: ${ifProp(
            'secondary',
            palette('colorButtonSecondaryDisabled'),
            palette('colorButtonPrimaryDisabled')
        )} !important;
        cursor: not-allowed;
    }

    ${theme('components.Button.default')}
`

export const BtnLink = styled(Link)<LinksProps>`
    transition: ${theme('transition')};
    cursor: pointer;
    text-decoration: underline;
    line-height: ${theme('spacing.2md')};
    ${ifProp(
        'btnColor',
        css`
            color: ${({ btnColor }: LinksProps) =>
                btnColor ? palette(btnColor) : 'secondary'};
        `
    )}
    &:hover {
        opacity: 0.9;
    }

    ${theme('components.Button.link')}
`
