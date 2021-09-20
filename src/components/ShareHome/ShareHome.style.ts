import styled from 'styled-components'
import { theme } from 'styled-tools'

export const ShareHomeWrapper = styled.section`
    &:after {
        ${theme('components.Divider')}
    }
    > div {
        padding: 120px 0;
        line-height: 24px;
    }
`
