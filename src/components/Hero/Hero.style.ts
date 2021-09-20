import styled from 'styled-components'
import { palette, theme } from 'styled-tools'
import { HeroStyleProps } from './Hero.interface'

export const HeroWrapper = styled.div`
    position: relative;
    z-index: 0;

    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(
            314.72deg,
            #c86dd7 -1.5%,
            #7e49c3 39.43%,
            #5912ac 86.02%
        ),
        ${({ bgImg }: HeroStyleProps) => `url(${bgImg})` || ''};

    color: ${palette('heroTextColor')};

    height: 616px;
    display: flex;

    @media (${theme('breakpoint.md.max')}) {
        height: 540px;
    }
`

export const HeroGrid = styled.div`
    height: 100%;
    padding-top: ${theme('spacing.lg')};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    margin-top: auto;

    @media (${theme('breakpoint.md.max')}) {
        grid-template-columns: 1fr;
        text-align: center;
    }

    & > div {
        display: grid;
        grid-row-gap: ${theme('spacing.lg')};
        @media (${theme('breakpoint.md.max')}) {
            margin-top: auto;
            margin-bottom: ${theme('spacing.2xxl')};
        }

        h1 {
            font-size: ${theme('fontSize.title.h1')};
            line-height: ${theme('lineHeight.2lg')};
            font-weight: 500;
            @media (${theme('breakpoint.md.max')}) {
                font-size: ${theme('fontSize.title.h2')};
                line-height: ${theme('lineHeight.md')};
            }
        }
        h5 {
            font-size: ${theme('fontSize.title.lg')};
            line-height: 24px;
            font-weight: 400;
            @media (${theme('breakpoint.md.max')}) {
                line-height: ${theme('lineHeight.xl')};
            }
        }
    }

    & > img {
        width: auto;
        height: fit-content;
        @media (${theme('breakpoint.md.max')}) {
            display: none;
        }
    }
    a {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        color: ${palette('linkColorLight')};
        transition: ${theme('transition')};
        &:hover {
            opacity: 0.8;
        }
        @media (${theme('breakpoint.md.max')}) {
            margin-top: ${theme('spacing.xl')};
        }
    }
`
