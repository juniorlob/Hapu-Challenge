import Container from '../Container'
import { HeroProps } from './Hero.interface'
import { HeroGrid, HeroWrapper } from './Hero.style'

const Hero = ({ bgHero, imgHero, content }: HeroProps): JSX.Element => (
    <HeroWrapper bgImg={bgHero}>
        <Container>
            <HeroGrid>
                <div>
                    {content && (
                        <>
                            <h1>{content.title}</h1>
                            <p>{content.text}</p>
                        </>
                    )}
                </div>
                {imgHero && <img src={imgHero.img} alt={imgHero.alt} />}
            </HeroGrid>
        </Container>
    </HeroWrapper>
)
export default Hero
