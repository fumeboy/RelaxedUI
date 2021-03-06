import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Home } from './components';
import '$u/themes/reset.less'

class App extends Component {
    render() {
        return (
            <div className={`app-comp`}>
                <Router>
                    <Route exact path="/" component={Home}/>
                </Router>
            </div>
        )
    }
}

export default App