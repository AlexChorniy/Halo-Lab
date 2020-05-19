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

const Header = () => {
    return (
        <Navigation>
            <PageTitleText>Your first project</PageTitleText>
            <NavLinkContainer>
                <NavLink>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>1</NavLinkValue>
                    </Link>
                </NavLink>
                <DecorationLine />
                <NavLink>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>2</NavLinkValue>
                    </Link>
                </NavLink>
                <DecorationLine />
                <NavLink>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <NavLinkValue>3</NavLinkValue>
                    </Link>
                </NavLink>
            </NavLinkContainer>
        </Navigation>
    );
};

export default Header;
