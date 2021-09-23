type ctaProps = {
    link: string;
    text: string;
};

type sectionImgProps = {
    url: string;
    alt: string;
};

export interface FeatureContainerProps {
    title: string;
    paragraph: string;
    cta?: ctaProps;
    img?: sectionImgProps;
    imgOrder?: number;
    columns?: number;
}

export type FeaturesSectionProps = FeatureContainerProps;

export type FeaturesStyleProps = {
    hasImg?: boolean;
    imgOrder?: number;
    columns?: number;
};
