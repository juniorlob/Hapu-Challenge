import { InstagramIcon } from '../../components/Icons/Instagram'
import { HomeProps } from './Home.interface'

const Home = ({ currentExample }: HomeProps): JSX.Element => (
    <div>
        {currentExample}

        <InstagramIcon height="40" width="40" />
    </div>
)

export default Home
