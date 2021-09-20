import FeatureSection from '../FeatureSection'
import { ShareHomeWrapper } from './ShareHome.style'

const ShareHome = (): JSX.Element => {
    const shareHomeData = {
        title: 'Share your home, \n nanny and costs',
        paragraph:
            'You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. [Hapu means tribe](#) and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.',
        cta: { text: 'Ready to get started?', link: '#' },
        img: {
            url: '/nanny-share-hapu.png',
            alt: 'Nanny share dashboard on laptop',
        },
    }

    return (
        <ShareHomeWrapper>
            <FeatureSection
                columns={2}
                title={shareHomeData.title}
                paragraph={shareHomeData.paragraph}
                cta={shareHomeData.cta}
                img={shareHomeData.img}
            />
        </ShareHomeWrapper>
    )
}

export default ShareHome
