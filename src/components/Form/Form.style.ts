import styled, { css, keyframes } from 'styled-components';
import { ifProp, palette, theme } from 'styled-tools';
import Button from '../Button';
import {
    FormControlTypes,
    InputItemType,
    SpinnerProps,
} from './Form.interface';

export const FormWraper = styled.section`
    text-align: center;

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
`;

export const FormGrid = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    gap: ${theme('spacing.md')};
`;

export const InputItem = styled.div<InputItemType>`
    input {
        padding: 0 ${theme('spacing.lg')};
        border: 1px solid;
        border-color: ${palette('inputBorderColor')};
        border-radius: ${theme('borderRadius.sm')};
        ${theme('components.Input')};
        width: 100%;
        ${({ status }) =>
            status.error
                ? css`
                      border-color: ${palette('inputError')};
                  `
                : css`
                      border-color: ${status.success
                          ? palette('inputSuccess')
                          : palette('inputBorderColor')};
                  `};
    }
    display: block;
    position: relative;
`;

export const FormControl = styled.form<FormControlTypes>`
    justify-content: center;
    display: flex;
    gap: ${theme('spacing.md')};
    margin-top: ${theme('spacing.lg')};
    position: relative;

    @media (${theme('breakpoint.sm.max')}) {
        flex-direction: column;
        gap: ${theme('spacing.lg')};
    }

    small {
        ${({ status }) => (status ? '' : '')}
        bottom: -1rem;
        position: absolute;
        padding-left: ${theme('spacing.sm')};
        display: block;
        text-align: left;
        font-size: ${theme('fontSize.xs')};
        ${({ status }) =>
            status.error
                ? css`
                      color: ${palette('inputError')};
                  `
                : css`
                      color: ${palette('inputSuccess')};
                      font-size: ${theme('fontSize.md')};
                      bottom: -1.4rem;
                  `};
    }
`;

const spinnerAnimation = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Spinner = styled.div<SpinnerProps>`
    display: inline-block;
    border-top: 2px solid ${palette('spinnerColor')};
    border-right: 2px solid ${palette('spinnerColor')};
    border-bottom-style: solid;
    border-left-style: solid;
    border-radius: 999px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-bottom-color: transparent;
    border-left-color: transparent;
    animation: 0.45s linear 0s infinite normal none running ${spinnerAnimation};
    width: 1em;
    height: 1em;
    color: ${palette('spinnerColor')};
    ${ifProp(
        'isButton',
        css`
            margin-right: ${theme('spacing.sm')};
        `
    )}
`;

export const ButtonSubmit = styled(Button)`
    min-width: ${theme('size.2xxs')};
    position: relative;
`;
