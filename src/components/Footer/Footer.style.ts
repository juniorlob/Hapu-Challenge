import styled from 'styled-components'
import { palette, theme } from 'styled-tools'
import Button from '../Button'

export const FooterWrapper = styled.footer`
    background-color: ${palette('white')};
    padding: ${theme('spacing.xxl')} 0 ${theme('spacing.lg')} 0;
`

export const FooterCta = styled.div`
    text-align: center;
    padding: ${theme('spacing.xxl')} 0;
    h2 {
        margin-bottom: ${theme('spacing.md')};
        font-weight: 400;
    }
    & > p {
        margin-bottom: ${theme('spacing.xl')};
    }
    & > button {
        margin-bottom: ${theme('spacing.lg')};
    }
`
export const FooterButton = styled(Button)`
    display: grid;
    width: fit-content;
    margin: auto;
    grid-template: repeat(2, auto) / repeat(2, auto);
    grid-column-gap: 21px;
    grid-row-gap: ${theme('spacing.xs')};
    padding: ${theme('spacing.md')} ${theme('spacing.lg')};
    svg {
        grid-row: span 2;
    }
    span {
        text-align: left;
        font-weight: 400;
        font-size: ${theme('fontSize.lg')};
        &:last-child {
            font-size: ${theme('fontSize.sm')};
        }
    }
`
export const FooterLinks = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme('spacing.xxl')} 0;
    ul {
        font-size: ${theme('fontSize.sm')};
        display: flex;
        list-style: none;
        gap: ${theme('spacing.xl')};
        a {
            text-decoration: none;
            &:hover {
                opacity: 0.8;
            }
        }
    }
`

export const FooterNetworks = styled.div`
    display: flex;
    gap: ${theme('spacing.md')};
    a {
        border-radius: 50%;
        border: 1px solid ${palette('borderIconsColor')};
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        &:hover {
            background-color: ${palette('borderIconsColor')};
        }
    }
    svg {
        color: ${palette('socialIconsColor')};
    }
`

export const Copy = styled.div`
    margin-top: ${theme('spacing.lg')};
    font-size: ${theme('fontSize.xs')};
    text-align: center;
    color: ${palette('copyrightColor')};
`
