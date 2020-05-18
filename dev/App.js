import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from '@comp/Home/Home';
import About from '@comp/About/About';
import Dashboard from '@comp/Dashboard/Dashboard';
import Header from '@comp/Header/Header';

import styled from "styled-components";

const App = () => {
    return (
        <Router>
            <Main>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Main>
        </Router>
    );
};

const Main = styled.div`
    background: linear-gradient(233.1deg, #216190 19.65%, #0834D0 81.25%);
    height: 100%;
`;

export default App;
