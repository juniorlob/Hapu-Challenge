import FeatureSection from '../FeatureSection'
import { HapuPrinciplesWrapper } from './HapuPrinciples.style'

const HapuPrinciples = (): JSX.Element => {
    const shareHomeData = {
        title: 'A framework built for the long term',
        paragraph:
            'Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.',
        cta: { text: 'Ready to get started?', link: '#' },
        img: { url: '/billing-history.png', alt: '' },
    }

    return (
        <HapuPrinciplesWrapper>
            <FeatureSection
                title={shareHomeData.title}
                paragraph={shareHomeData.paragraph}
                cta={shareHomeData.cta}
                img={shareHomeData.img}
            />
        </HapuPrinciplesWrapper>
    )
}

export default HapuPrinciples
