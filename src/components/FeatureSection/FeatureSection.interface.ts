type ctaProps = {
    link: string;
    text: string;
};

type sectionImgProps = {
    url: string;
    alt: string;
    hideOn?: Array<string>;
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
    imgVisibility?: Array<string>;
    hasImg?: boolean;
    imgOrder?: number;
    columns?: number;
};
