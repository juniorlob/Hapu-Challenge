type heroInnerText = {
    title: string;
    text: string;
};
type imgHero = {
    img: string;
    alt: string;
};

export type BgHeroImg = {
    xs?: string;
    md?: string;
};

export interface BgHero extends BgHeroImg {
    bgImg?: BgHeroImg;
}

export interface HeroProps {
    bgHero?: BgHero;
    imgHero?: imgHero;
    content: heroInnerText;
}
