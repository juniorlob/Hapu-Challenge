import { useEffect } from 'react'

/* NOTE
	This component is responsable for the logic on the component
*/

// Redux store connection
import withConnect from '../../stores/withConnect'

// Page jsx component
import Home from './Home'

const HomeContainer = ({ storeExample, exampleRequest }: any): JSX.Element => {
    // ComponentDidMount alike
    useEffect(() => {
        exampleRequest({})
    }, [])
    const { currentExample } = storeExample

    return <Home currentExample={currentExample} />
}

// com seleção de store
// export default withConnect(HomeContainer, ['storeExample']);
// com todos os stores
export default withConnect(HomeContainer)
