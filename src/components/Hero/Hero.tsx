import { PlayIcon } from '../Icons/PlayIcon'
import { HeroProps } from './Hero.interface'
import { HeroContainer, HeroGrid, HeroWrapper } from './Hero.style'

const Hero = ({ bgHero, imgHero, content }: HeroProps): JSX.Element => (
    <HeroWrapper bgImg={bgHero}>
        <HeroContainer>
            <HeroGrid>
                <div>
                    {content && (
                        <>
                            <h1>{content.title}</h1>
                            <h5>{content.text}</h5>
                        </>
                    )}
                    <a href="#">
                        <PlayIcon h={48} w="auto" color="primary" />
                        See hapu in action (27 seconds)
                    </a>
                </div>
                {imgHero && <img src={imgHero.img} alt={imgHero.alt} />}
            </HeroGrid>
        </HeroContainer>
    </HeroWrapper>
)
export default Hero
