export interface HeroStyleProps {
    bgImg?: string
}

type heroInnerText = {
    title: string
    text: string
}
type heroImgHero = {
    img: string
    alt: string
}

export interface HeroProps {
    bgHero?: string
    imgHero?: heroImgHero
    content: heroInnerText
}
