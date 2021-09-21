import Footer from './Footer';

const FooterContainer = (): JSX.Element => {
    const since = new Date('2018').getFullYear();

    return <Footer since={since} />;
};

export default FooterContainer;
