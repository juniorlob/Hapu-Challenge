import Button from '../Button'
import Container from '../Container'
import { CalendarIcon } from '../Icons/CalendarIcon'
import { FacebookIcon } from '../Icons/FacebookIcon'
import { HapuLogo } from '../Icons/HapuLogo'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { TwitterIcon } from '../Icons/TwitterIcon'
import { FooterProps } from './Footer.interface'
import {
    Copy,
    FooterButton,
    FooterCta,
    FooterLinks,
    FooterNetworks,
    FooterWrapper,
} from './Footer.style'

const Footer = ({ since }: FooterProps): JSX.Element => (
    <FooterWrapper>
        <Container>
            <FooterCta>
                <h2>Become a nanny share host</h2>
                <p>Takes less than 5 minutes to get started</p>
                <FooterButton secondary>
                    <CalendarIcon h="30" w="auto" color="white" />
                    <span>Create Your Nanny Share</span>
                    <span> Takes less than 5 minutes</span>
                </FooterButton>
                <Button to="#" link>
                    Or browse local nanny-shares
                </Button>
            </FooterCta>
            <FooterLinks>
                <Button link to="/">
                    <HapuLogo color="colorGrey24" h={24} w={64} />
                </Button>
                <ul>
                    <li>
                        <Button link to="#" btnColor="colorGrey24">
                            Share Your Nanny
                        </Button>
                    </li>
                    <li>
                        <Button link to="#" btnColor="colorGrey24">
                            Our Story
                        </Button>
                    </li>
                    <li>
                        <Button link to="#" btnColor="colorGrey24">
                            Blog
                        </Button>
                    </li>
                    <li>
                        <Button link to="#" btnColor="colorGrey24">
                            Terms {'&'} Privacy
                        </Button>
                    </li>
                </ul>
                <FooterNetworks>
                    <Button link to="#">
                        <FacebookIcon h={16.88} w={8.44} />
                    </Button>
                    <Button link to="#">
                        <TwitterIcon h={12.66} w={18.28} />
                    </Button>
                    <Button link to="#">
                        <InstagramIcon h={16.88} w={8.44} />
                    </Button>
                </FooterNetworks>
            </FooterLinks>
            <Copy>
                Copyright &copy; {since} Hapu PTY Limited All rights reserved
            </Copy>
        </Container>
    </FooterWrapper>
)

export default Footer
