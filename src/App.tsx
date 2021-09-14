import { Provider } from 'react-redux'

// Global Style
import GlobalStyle from './styles/global.style'

import stores from './stores'
import Home from './pages/Home'

const App = (): JSX.Element => (
    <Provider store={stores}>
        <GlobalStyle />
        <Home />
    </Provider>
)

export default App
