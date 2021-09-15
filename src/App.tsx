import { Provider } from 'react-redux'

// Global Style
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global.style'

import stores from './stores'
import Home from './pages/Home'
import lightTheme from './styles/theme'

const DEFAULT_THEME = lightTheme

const App = (): JSX.Element => {
    // For  dark theme
    const theme = DEFAULT_THEME

    return (
        <Provider store={stores}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Home />
            </ThemeProvider>
        </Provider>
    )
}

export default App
