import styled from 'styled-components'
import { theme } from 'styled-tools'

export const SharedPaymentsWrapper = styled.section`
    &:after {
        ${theme('components.Divider')}
    }
    > div {
        padding: 120px 0;
        line-height: 28px;
    }
`
