import { CalendarIcon } from '../../components/Icons/CalendarIcon'
import { FacebookIcon } from '../../components/Icons/FacebookIcon'
import { InstagramIcon } from '../../components/Icons/InstagramIcon'
import { TwitterIcon } from '../../components/Icons/TwitterIcon'
import { HomeProps } from './Home.interface'

const Home = ({ currentExample }: HomeProps): JSX.Element => (
    <div>
        {currentExample}

        <InstagramIcon hoverColor="iconSecondaryColor" h="40" w="40" />
        <TwitterIcon h="40" w="40" />
        <CalendarIcon h="40" w="40" />
        <FacebookIcon h="40" w="40" />
        <TwitterIcon h="40" w="40" />
    </div>
)

export default Home
