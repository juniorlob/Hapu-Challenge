import styled from 'styled-components'
import { palette, theme } from 'styled-tools'
import Container from '../Container'

export const FormWraper = styled.section`
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 16px;
    padding: 64px 0;

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
        }
    }
    h3 {
        font-size: ${theme('fontSize.title.h3')};
        font-weight: 500;
    }
`
export const FormContainer = styled(Container)`
    &:after {
        ${theme('components.Divider')}
    }
`
