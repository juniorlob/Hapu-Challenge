import styled from 'styled-components'
import { theme } from 'styled-tools'

export const HapuPrinciplesWrapper = styled.section`
    &:after {
        ${theme('components.Divider')}
    }
    > div {
        padding: 120px 0;
        text-align: center;
        line-height: 28px;
    }
`
