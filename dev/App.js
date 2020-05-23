import React, { useState } from 'react';

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
import GlobalStyles from './assets/global.styles';

import styled from "styled-components";

const App = () => {
    const [getCheckBox, sendCheckBox] = useState({ box: 'one' });
    return (
        <>
            <Router>
                <Main>
                    <Header sendBox={sendCheckBox} getBox={getCheckBox} />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Main>
            </Router>
            <GlobalStyles />
        </>
    );
};

const Main = styled.div`
    background-color: transparent;
    width: 70%;
    min-height: 100vh;
    margin: 0 auto;
    padding-bottom: 20px;
`;

export default App;
