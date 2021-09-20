import Hero from '../../components/Hero'
import Notices from '../../components/Notices'
import { HomeProps } from './Home.interface'

const Home = ({ currentExample }: HomeProps): JSX.Element => (
    <>
        <Hero />
        <Notices />
    </>
)

export default Home
