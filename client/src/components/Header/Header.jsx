import React from "react";
import {Link} from "../";

import styles from './Header.module.scss';

const Header = () =>
{
    return (
        <nav>
            <ul className={styles.root}>
                <li>
                <Link to="/" isNav>Home</Link>
                </li>
                <li>
                <Link to="/about" isNav>About</Link>
                </li>
                <li>
                <Link to="/gallery" isNav>Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}

Header.defaultProps = {};

export default Header;