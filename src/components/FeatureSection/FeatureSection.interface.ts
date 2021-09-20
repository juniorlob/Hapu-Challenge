type ctaProps = {
    link: string
    text: string
}

type sectionImgProps = {
    url: string
    alt: string
}

export interface FeatureContainerProps {
    title: string
    paragraph: string
    cta: ctaProps
    img?: sectionImgProps
}

export interface FeaturesSectionProps {
    featureContent: FeatureContainerProps
}
