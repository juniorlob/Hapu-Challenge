import { HomeProps } from './Home.interface'
import Hero from '../../components/Hero'
import Notices from '../../components/Notices'
import ShareHome from '../../components/ShareHome'
import SharedPayments from '../../components/SharedPayments'
import HapuPrinciples from '../../components/HapuPrinciples'
import ComingSoon from '../../components/ComingSoon'
import Form from '../../components/Form/Form'

const Home = ({ currentExample }: HomeProps): JSX.Element => (
    <>
        <Hero />
        <Notices />
        <ShareHome />
        <SharedPayments />
        <Form />
        <HapuPrinciples />
        <ComingSoon />
    </>
)

export default Home
