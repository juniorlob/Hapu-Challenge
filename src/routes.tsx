import { Switch, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';

// 404 routes
import NotFound from './pages/NotFound';

const Routes = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
