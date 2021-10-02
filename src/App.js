import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import NoScreen from "./screens/NoScreen";
import InformationScreen from "./screens/InformationScreen";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <HomeScreen />
                    )} />

                    <Route path="/:comic" render={() => (
                        <InformationScreen />
                    )} />

                    <Route path="*">
                        <NoScreen />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
