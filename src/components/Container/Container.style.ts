import styled, { css } from 'styled-components'
import { switchProp, theme } from 'styled-tools'

export const ContainerWrapper = styled.div`
    padding: 0 ${theme('spacing.lg')};
    margin: 0 auto;
    box-sizing: border-box;
    ${switchProp('position', {
        relative: css`
            position: relative;
        `,
    })}
    @media screen and (${theme('breakpoint.sm.min')}) {
        max-width: 80rem;
    }
    &:brefore,
    &:after {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }
`
