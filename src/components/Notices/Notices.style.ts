import styled from 'styled-components'
import { palette, theme } from 'styled-tools'

export const NoticesWrapper = styled.div`
    background-color: white;
    padding: ${theme('spacing.lg')} 0;
    border-bottom: 1px solid ${palette('colorGrey88')};
`

export const Notice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme('spacing.lg')};
    span {
        margin-left: ${theme('spacing.sm')};
    }
`
