import FeatureSection from '../FeatureSection';
import { SharedPaymentsWrapper } from './SharedPayments.style';

const ShareHome = (): JSX.Element => {
    const shareHomeData = {
        title: 'Shared payments made simple',
        paragraph:
            'Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.',
        cta: {
            text: 'Read how Bridget’s share (without Hapu) ended over $15',
            link: '#',
        },
        img: {
            url: '/shared-payments.png',
            alt: 'Dashboard payment step',
        },
    };

    return (
        <SharedPaymentsWrapper>
            <FeatureSection
                imgOrder={1}
                columns={2}
                title={shareHomeData.title}
                paragraph={shareHomeData.paragraph}
                cta={shareHomeData.cta}
                img={shareHomeData.img}
            />
        </SharedPaymentsWrapper>
    );
};

export default ShareHome;
