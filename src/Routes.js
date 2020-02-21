import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';

class Routes extends React.Componenet {
    render() {
        <Router>
            <Switch>
                <Route exact path="/" componenet={Login} />
                <Route exact path="/main" omponenet={Main} />
            </Switch>
        </Router>
    }
}

export default Routes;