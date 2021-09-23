import { Experiment, Variant } from '@marvelapp/react-ab-test';
import Container from '../Container';
import { PlayIcon } from '../Icons/PlayIcon';
import { HeroProps } from './Hero.interface';

import { HeroGrid, HeroWrapper } from './Hero.style';

const Hero = ({
    bgHero,
    imgHero,
    content,
    ABConfig,
    emitterWin,
}: HeroProps): JSX.Element => (
    <HeroWrapper bgImg={bgHero}>
        <Container maxW={{ xs: 18, sm: 23, md: 40, lg: 50, xl: 65 }}>
            <HeroGrid>
                <Experiment name={ABConfig.name}>
                    {content.map((c, k) => (
                        <Variant key={k} name={c.variantName}>
                            <h1>{c.title}</h1>
                            <h5>{c.text}</h5>
                            <a href="#" onClick={emitterWin}>
                                <PlayIcon h={48} w="auto" color="primary" />
                                See hapu in action (27 seconds)
                            </a>
                        </Variant>
                    ))}
                </Experiment>
                {imgHero && (
                    <img
                        width="316"
                        height="290"
                        src={imgHero.img}
                        alt={imgHero.alt}
                    />
                )}
            </HeroGrid>
        </Container>
    </HeroWrapper>
);
export default Hero;
