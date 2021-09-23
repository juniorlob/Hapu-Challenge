import { emitter, experimentDebugger } from '@marvelapp/react-ab-test';
import Mixpanel from 'mixpanel';
import { useEffect } from 'react';
// import secrets from '../secrets.json';  <- For store token
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
                testName: 'heroTest',
                variantName: 'join-a-local',
                title: 'Easily create or join a local nanny share with Hapu',
                text: 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
            },
            {
                testName: 'heroTest',
                variantName: 'create-the-childcare-you-need',
                title: 'Create the childcare you need at a price you can afford',
                text: 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
            },
        ],
    };

    // In this moment the variant name is static
    const testName = 'heroTest';

    const { env } = process;

    const mixPanelToken =
        process.env.REACT_APP_MIXPANEL_TOKEN !== undefined
            ? process.env.REACT_APP_MIXPANEL_TOKEN
            : '000000000000000000';

    const mixpanel = Mixpanel.init(mixPanelToken, {
        debug: true,
    });

    const variantsNames = heroContent.content.map((c) => c.variantName);
    const testConfig = { name: testName, variants: variantsNames };
    const variantAvg = heroContent.content.map(
        () => 100 / heroContent.content.length
    );
    useEffect(() => {
        emitter.defineVariants(
            testConfig.name,
            testConfig.variants,
            variantAvg
        );

        if (env.NODE_ENV === 'development') {
            experimentDebugger.enable();
        }

        emitter.addWinListener((experimentName, variantName) => {
            mixpanel.track(`${experimentName} ${variantName}`, {
                name: experimentName,
                variant: variantName,
            });
        });
    }, [emitter]);

    const emitterWin = () => {
        emitter.emitWin(testConfig.name);
    };

    return (
        <Hero
            ABConfig={testConfig}
            content={heroContent.content}
            bgHero={heroContent.bgHero}
            imgHero={heroContent.imgHeader}
            emitterWin={emitterWin}
        />
    );
};
export default HeroContainer;
