import LayoutWrapper from '../../hocs/LayoutWrapper/LayoutWrapper';

// Redux store connection
import withConnect from '../../stores/withConnect';

// Page jsx component
import Home from './Home';

const HomeContainer = ({ storeNews, createNewsRequest }: any): JSX.Element => {
    const handleCreateNews = (data: unknown) => {
        createNewsRequest(data);
    };

    return (
        <LayoutWrapper>
            <Home handleCreateNews={handleCreateNews} storeNews={storeNews} />
        </LayoutWrapper>
    );
};
export default withConnect(HomeContainer);
