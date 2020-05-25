import React from 'react';
import { Link } from "react-router-dom";

import {
    PageTitleText,
    Navigation,
    NavLink,
    DecorationLine,
    NavLinkValue,
    NavLinkContainer
} from './styles';

const Header = ({ sendBox, getBox }) => {
    return (
        <Navigation>
            <PageTitleText>Your first project</PageTitleText>
            <NavLinkContainer>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <NavLink onClick={() => sendBox({ box: 'one' })} background={getBox?.box === 'one'}>
                        <NavLinkValue>1</NavLinkValue>
                    </NavLink>
                </Link>
                <DecorationLine />
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <NavLink onClick={() => sendBox({ box: 'two' })} background={getBox?.box === 'two'}>
                        <NavLinkValue>2</NavLinkValue>
                    </NavLink>
                </Link>
                <DecorationLine />
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <NavLink onClick={() => sendBox({ box: 'three' })} background={getBox?.box === 'three'}>
                        <NavLinkValue>3</NavLinkValue>
                    </NavLink>
                </Link>
            </NavLinkContainer>
        </Navigation >
    );
};

export default Header;
