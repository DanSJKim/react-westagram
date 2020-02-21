import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

class App extends Component {
    render() {
        return(
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/main' exact component={Main} />
                    <Route path='/' render={() => <div>404</div>} />
                </Switch>
        );
    }
}

export default App;