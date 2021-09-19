import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Global Style
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global.style'

import stores from './stores'
import lightTheme from './styles/theme'
import Routes from './routes'

const DEFAULT_THEME = lightTheme

const App = (): JSX.Element => {
    // For  dark theme
    const theme = DEFAULT_THEME

    return (
        <Provider store={stores}>
            <Router>
                <ThemeProvider theme={theme}>
                    <Routes />
                    <GlobalStyle />
                </ThemeProvider>
            </Router>
        </Provider>
    )
}

export default App
