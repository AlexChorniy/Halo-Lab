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
                <NavLink onClick={() => sendBox({ box: 'one' })} background={getBox?.box === 'one'}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>1</NavLinkValue>
                    </Link>
                </NavLink>
                <DecorationLine />
                <NavLink onClick={() => sendBox({ box: 'two' })} background={getBox?.box === 'two'}>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>2</NavLinkValue>
                    </Link>
                </NavLink>
                <DecorationLine />
                <NavLink onClick={() => sendBox({ box: 'three' })} background={getBox?.box === 'three'}>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>3</NavLinkValue>
                    </Link>
                </NavLink>
            </NavLinkContainer>
        </Navigation>
    );
};

export default Header;
