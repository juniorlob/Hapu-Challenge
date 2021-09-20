export interface HeroStyleProps {
    bgImg?: string
}

type heroInnerText = {
    title: string
    text: string
}
type imgHero = {
    img: string
    alt: string
}

export interface HeroProps {
    bgHero?: string
    imgHero?: imgHero
    content: heroInnerText
}
