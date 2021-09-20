import Button from '../Button'
import Container from '../Container'
import { PlayIcon } from '../Icons/PlayIcon'
import { HeroProps } from './Hero.interface'
import { HeroGrid, HeroWrapper } from './Hero.style'

const Hero = ({ bgHero, imgHero, content }: HeroProps): JSX.Element => (
    <HeroWrapper bgImg={bgHero}>
        <Container maxW={{ xs: 18, sm: 23, md: 40, lg: 48, xl: 70 }}>
            <HeroGrid>
                <div>
                    {content && (
                        <>
                            <h1>{content.title}</h1>
                            <h5>{content.text}</h5>
                        </>
                    )}
                    <Button link to="#">
                        <PlayIcon h={48} w="auto" color="primary" />
                        See hapu in action (27 seconds)
                    </Button>
                </div>
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
)
export default Hero
