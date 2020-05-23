import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
    PageTitleText,
    Navigation,
    NavLink,
    DecorationLine,
    NavLinkValue,
    NavLinkContainer
} from './styles';

// 

const Header = () => {
    const [getCheckBox, sendCheckBox] = useState({ box: 'one' });
    return (
        <Navigation>
            <PageTitleText>Your first project</PageTitleText>
            <NavLinkContainer>
                <NavLink onClick={() => sendCheckBox({ box: 'one' })} background={getCheckBox?.box === 'one'}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>1</NavLinkValue>
                    </Link>
                </NavLink>
                <DecorationLine />
                <NavLink onClick={() => sendCheckBox({ box: 'two' })} background={getCheckBox?.box === 'two'}>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>2</NavLinkValue>
                    </Link>
                </NavLink>
                <DecorationLine />
                <NavLink onClick={() => sendCheckBox({ box: 'three' })} background={getCheckBox?.box === 'three'}>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>3</NavLinkValue>
                    </Link>
                </NavLink>
            </NavLinkContainer>
        </Navigation>
    );
};

export default Header;
