import React from "react";
import {Link} from "../";

import styles from './Header.module.scss';

const Header = () =>
{
    return (
        <nav>
            <ul className={styles.root}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}

Header.defaultProps = {};

export default Header;