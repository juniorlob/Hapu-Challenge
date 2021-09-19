import styled from 'styled-components'
import { theme } from 'styled-tools'

export const ContainerWrapper = styled.div`
    padding: 0 ${theme('spacing.lg')};
    margin: 0 auto;
    display: flex;
    position: relative;
    justify-content: center;
    @media screen and (${theme('breakpoint.lg.min')}) {
        max-width: 80rem;
    }
`
