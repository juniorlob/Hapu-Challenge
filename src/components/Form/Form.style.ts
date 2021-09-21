import styled from 'styled-components'
import { palette, theme } from 'styled-tools'

export const FormWraper = styled.section`
    text-align: center;

    form {
        justify-content: center;
        display: flex;
        gap: ${theme('spacing.md')};
        margin-top: ${theme('spacing.lg')};
        input {
            padding: 0 ${theme('spacing.lg')};
            border: 1px solid;
            border-color: ${palette('inputBorderColor')};
            border-radius: ${theme('borderRadius.sm')};
            ${theme('components.Input')};
        }
        @media (${theme('breakpoint.md.max')}) {
            flex-direction: column;
        }
    }
    h3 {
        font-size: ${theme('fontSize.title.h3')};
        font-weight: 500;
    }
    > div {
        padding: ${theme('spacing.2xl')} 0;
    }
    &:after {
        ${theme('components.Divider')}
        @media (${theme('breakpoint.lg.min')}) {
            max-width: ${theme('size.md')};
        }
        @media (${theme('breakpoint.lg.max')}) {
            max-width: ${theme('size.sm')};
        }

        @media (${theme('breakpoint.md.max')}) {
            max-width: ${theme('size.sm')};
        }
        @media (${theme('breakpoint.sm.max')}) {
            max-width: ${theme('size.xs')};
        }
        @media (${theme('breakpoint.xs.max')}) {
            max-width: ${theme('size.2xs')};
        }
    }
`

export const FormGrid = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 16px;
`
