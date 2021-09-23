import { HomeProps } from './Home.interface';
import Hero from '../../components/Hero';
import Notices from '../../components/Notices';
import ShareHome from '../../components/ShareHome';
import SharedPayments from '../../components/SharedPayments';
import HapuPrinciples from '../../components/HapuPrinciples';
import ComingSoon from '../../components/ComingSoon';
import Form from '../../components/Form';

const Home = ({ storeNews, handleCreateNews }: HomeProps): JSX.Element => (
    <>
        <Hero />
        <Notices />
        <ShareHome />
        <Form storeNews={storeNews} handleCreateNews={handleCreateNews} />
        <SharedPayments />
        <HapuPrinciples />
        <ComingSoon />
    </>
);

export default Home;
