import Hero from './Hero';

const HeroContainer = (): JSX.Element => {
    const heroContent = {
        bgHero: { xs: '/bg-header-xs.png', md: '/bg-header.png' },
        imgHeader: {
            img: '/img-header.png',
            alt: 'Card with jane and Kane connected by Nanny share',
        },
        content: [
            {
                title: 'Easily create or join a local nanny share with Hapu',
                text: 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
            },
            {
                title: 'Create the childcare you need at a price you can afford',
                text: 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
            },
        ],
    };

    const randomContent = Math.floor(
        Math.random() * heroContent.content.length
    );

    return (
        <Hero
            content={heroContent.content[randomContent]}
            bgHero={heroContent.bgHero}
            imgHero={heroContent.imgHeader}
        />
    );
};
export default HeroContainer;
