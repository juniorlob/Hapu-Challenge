import styled, { css } from 'styled-components'
import { ifProp, theme } from 'styled-tools'
import Button from '../Button'
import Container from '../Container'
import { FeaturesStyleProps } from './FeatureSection.interface'

export const FeatureContainer = styled(Container)``
export const FeatureSectionWrapper = styled.div<FeaturesStyleProps>`
    display: grid;
    gap: 64px;

    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    ${ifProp(
        'hasImg',
        css`
            img {
                margin: auto;
                width: fit-content;
                height: auto;
                max-width: 100%;
            }
        `
    )};

    ${ifProp(
        'imgOrder',
        css`
            div {
                order: ${({ imgOrder }: FeaturesStyleProps) =>
                    imgOrder === 1 ? 2 : 1};
            }
            img {
                order: ${({ imgOrder }: FeaturesStyleProps) => imgOrder};
            }
        `
    )}

    div {
        display: grid;
        gap: 40px;
        line-height: inherit;
        font-size: ${theme('fontSize.md')};
    }
    h2 {
        font-size: ${theme('fontSize.title.h2')};
        font-weight: 500;
    }
`

export const FeatureSectionBtn = styled(Button)<FeaturesStyleProps>`
    display: block;

    max-width: fit-content;
    ${({ columns }) =>
        columns !== 2
            ? css`
                  margin: 0 auto;
              `
            : null}
`
