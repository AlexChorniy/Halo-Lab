import React from 'react';
import { Link } from "react-router-dom/";

const Header = () => {
    return (
        <>
            <h1>Your first project</h1>
            <ul>
                <li>
                    <Link to="/">1</Link>
                </li>
                <li>
                    <Link to="/about">2</Link>
                </li>
                <li>
                    <Link to="/dashboard">3</Link>
                </li>
            </ul>
        </>
    );
};

export default Header;
