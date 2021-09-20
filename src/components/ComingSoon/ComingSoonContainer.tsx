import FeatureSection from '../FeatureSection'
import { ComingSoonWrapper } from './ComingSoon.style'

const ComingSoonContainer = (): JSX.Element => {
    const shareHomeData = {
        title: 'Coming soon: Nanny Share Daily Diary!',
        paragraph:
            'With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!',
        cta: { text: 'Ready to get started?', link: '#' },
        img: { url: '/coming-soon.png', alt: '' },
    }

    return (
        <ComingSoonWrapper>
            <FeatureSection
                imgOrder={1}
                title={shareHomeData.title}
                paragraph={shareHomeData.paragraph}
                cta={shareHomeData.cta}
                img={shareHomeData.img}
            />
        </ComingSoonWrapper>
    )
}

export default ComingSoonContainer
