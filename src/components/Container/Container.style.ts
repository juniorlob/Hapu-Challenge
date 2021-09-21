import styled, { css } from 'styled-components'
import { switchProp, theme } from 'styled-tools'
import { ContainerProps, ContainerPropTypes } from './Container.interface'

export const ContainerWrapper = styled.div<ContainerProps>`
    padding: 0 ${theme('spacing.lg')};
    margin: 0 auto;
    box-sizing: border-box;
    ${switchProp('position', {
        relative: css`
            position: relative;
        `,
    })};

    ${({ maxW }: ContainerPropTypes) =>
        maxW
            ? css`
                  @media (${theme('breakpoint.xl.min')}) {
                      max-width: ${maxW.xl}rem;
                  }
                  @media (${theme('breakpoint.lg.min')}) and (${theme(
                          'breakpoint.xl.max'
                      )}) {
                      max-width: ${maxW.xl}rem;
                  }
                  @media (${theme('breakpoint.md.min')}) and (${theme(
                          'breakpoint.lg.max'
                      )}) {
                      max-width: ${maxW.lg}rem;
                  }
                  @media (${theme('breakpoint.sm.min')}) and (${theme(
                          'breakpoint.md.max'
                      )}) {
                      max-width: ${maxW.md}rem;
                  }
                  @media (${theme('breakpoint.xs.min')}) and (${theme(
                          'breakpoint.sm.max'
                      )}) {
                      max-width: ${maxW.sm}rem;
                  }
                  @media (${theme('breakpoint.xs.max')}) {
                      max-width: ${maxW.xs}rem;
                  }
              `
            : css`
                  @media (${theme('breakpoint.xs.max')}) {
                      max-width: ${theme('size.xs')};
                  }
                  @media (${theme('breakpoint.xs.min')}) and (${theme(
                          'breakpoint.sm.max'
                      )}) {
                      max-width: ${theme('size.sm')};
                  }
                  @media (${theme('breakpoint.sm.min')}) and (${theme(
                          'breakpoint.md.max'
                      )}) {
                      max-width: ${theme('size.md')};
                  }
                  @media (${theme('breakpoint.md.min')}) and (${theme(
                          'breakpoint.lg.max'
                      )}) {
                      max-width: ${theme('size.lg')};
                  }
                  @media (${theme('breakpoint.lg.min')}) and (${theme(
                          'breakpoint.xl.max'
                      )}) {
                      max-width: ${theme('size.xl')};
                  }
                  @media (${theme('breakpoint.xl.min')}) {
                      max-width: ${theme('size.xl')};
                  }
              `};

    &:brefore,
    &:after {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }
`
