import styled from 'styled-components'
import { palette, theme } from 'styled-tools'
import Container from '../Container'
import { HeroStyleProps } from './Hero.interface'

export const HeroWrapper = styled.div`
    position: relative;
    z-index: 0;

    height: 616px;
    display: flex;

    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(
            314.72deg,
            #c86dd7 -1.5%,
            #7e49c3 39.43%,
            #5912ac 86.02%
        ),
        ${({ bgImg }: HeroStyleProps) => `url(${bgImg})`};

    color: ${palette('heroTextColor')};
`
export const HeroContainer = styled(Container)``

export const HeroGrid = styled.div`
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    margin-top: auto;
    & > div {
        display: grid;
        grid-row-gap: 20px;
        h1 {
            font-size: ${theme('fontSize.title.h1')};
            line-height: 48px;
            font-weight: 500;
        }
        h5 {
            font-size: ${theme('fontSize.title.lg')};
            line-height: 24px;
            font-weight: 400;
        }
    }

    & > img {
        width: auto;
        height: fit-content;
    }
`
