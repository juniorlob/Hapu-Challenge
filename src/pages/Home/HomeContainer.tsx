import { useEffect } from 'react'
import LayoutWrapper from '../../hocs/LayoutWrapper/LayoutWrapper'
/* NOTE
	This component is responsable for the logic on the component
*/

// Redux store connection
import withConnect from '../../stores/withConnect'

// Page jsx component
import Home from './Home'
import { HomeContainerProps } from './Home.interface'

const HomeContainer = ({
    storeExample,
    exampleRequest,
}: HomeContainerProps): JSX.Element => {
    // ComponentDidMount alike
    useEffect(() => {
        exampleRequest({})
    }, [])
    const { currentExample } = storeExample

    return (
        <LayoutWrapper>
            <Home currentExample={currentExample} />
        </LayoutWrapper>
    )
}

// com seleção de store
// export default withConnect(HomeContainer, ['storeExample']);
// com todos os stores
export default withConnect(HomeContainer)
