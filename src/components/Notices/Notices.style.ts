import styled from 'styled-components'
import { palette, theme } from 'styled-tools'

export const NoticesWrapper = styled.div`
    background-color: white;
    padding: ${theme('spacing.lg')} 0;
    border-bottom: 1px solid ${palette('colorGrey88')};
    @media (${theme('breakpoint.sm.max')}) {
        padding: ${theme('spacing.xl')} 0;
    }
`

export const Notice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme('spacing.lg')};
    font-size: ${theme('fontSize.md')};
    span {
        margin-left: ${theme('spacing.xs')};
    }
    @media (${theme('breakpoint.md.max')}) {
        span {
            display: block;
            margin-left: 0;
        }
    }
    @media (${theme('breakpoint.sm.max')}) {
        flex-direction: column;
        text-align: center;
        gap: ${theme('spacing.sm')};
        div {
            display: grid;
            gap: ${theme('spacing.sm')};
            a {
                max-width: ${theme('size.2sm')};
                margin: 0 auto;
            }
        }
        span {
            font-size: ${theme('fontSize.sm')};
        }
    }
`
