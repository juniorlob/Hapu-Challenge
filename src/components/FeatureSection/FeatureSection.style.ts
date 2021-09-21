import styled, { css } from 'styled-components';
import { ifProp, theme } from 'styled-tools';
import Button from '../Button';

import { FeaturesStyleProps } from './FeatureSection.interface';

export const FeatureSectionWrapper = styled.div<FeaturesStyleProps>`
    display: grid;
    gap: ${theme('spacing.xxl')};

    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    @media (${theme('breakpoint.md.max')}) {
        grid-template-columns: 1fr;
        gap: ${theme('spacing.2lg')};
        text-align: center;
    }
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
    @media (${theme('breakpoint.md.max')}) {
        div {
            order: 2;
        }

        img {
            order: 1;
            max-width: 100%;
        }
    }

    div {
        display: grid;
        gap: ${theme('spacing.xxl')};
        line-height: inherit;
        font-size: ${theme('fontSize.md')};
    }
    @media (${theme('breakpoint.md.max')}) {
        div {
            gap: ${theme('spacing.md')};
        }
    }
    h2 {
        font-size: ${theme('fontSize.title.h2')};
        font-weight: 500;
        white-space: pre-wrap;
    }
    @media (${theme('breakpoint.md.max')}) {
        h2 {
            font-size: ${theme('fontSize.xl')};
        }
    }
`;

export const FeatureSectionBtn = styled(Button)<FeaturesStyleProps>`
    display: block;

    ${({ columns }) =>
        columns !== 2
            ? css`
                  margin: 0 auto;
              `
            : null}
`;
