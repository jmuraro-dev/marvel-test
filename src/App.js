import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import NoScreen from "./screens/NoScreen";
import InformationScreen from "./screens/InformationScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" render={() => (
                        <HomeScreen />
                    )} />

                    <Route path="/comics/:comic" render={() => (
                        <InformationScreen />
                    )} />

                    <Route path="/404">
                        <NoScreen />
                    </Route>

                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
