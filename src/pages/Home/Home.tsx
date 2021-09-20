import { HomeProps } from './Home.interface'
import Hero from '../../components/Hero'
import Notices from '../../components/Notices'
import ShareHome from '../../components/ShareHome'
import SharedPayments from '../../components/SharedPayments'
import HapuPrinciples from '../../components/HapuPrinciples'

const Home = ({ currentExample }: HomeProps): JSX.Element => (
    <>
        <Hero />
        <Notices />
        <ShareHome />
        <SharedPayments />
        <HapuPrinciples />
    </>
)

export default Home
