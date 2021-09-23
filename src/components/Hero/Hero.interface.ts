import { ExperimentProps } from '@marvelapp/react-ab-test';
import React from 'react';

type heroInnerText = {
    title: string;
    text: string;
    testName: string;
    variantName: string;
};
type imgHero = {
    img: string;
    alt: string;
};

export type BgHeroImg = {
    xs?: string;
    md?: string;
};

export type BgHero = BgHeroImg & {
    bgImg?: BgHeroImg;
};

export interface HeroProps {
    bgHero?: BgHero;
    imgHero?: imgHero;
    content: Array<heroInnerText>;
    ABConfig: Omit<ExperimentProps, 'children'>;
    emitterWin?: (e: React.MouseEvent) => void;
}
