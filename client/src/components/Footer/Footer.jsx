import React from "react";

import styles from "./Footer.module.scss"

import {Image, Link} from "../"

const Footer = ( {children} ) =>
{
    return (
        <footer className={styles.root}>
            {children}
            <div className={styles.row}>
                <Link to="https://www.github.com/CosmanAgraz"><Image noText source="https://sharedassets39.blob.core.windows.net/img/iconmonstr-github-5.svg" /> </Link>
                <Link to="https://www.instagram.com/4graz"><Image noText source="https://sharedassets39.blob.core.windows.net/img/iconmonstr-instagram-15.svg" /></Link>
                <Link to="https://www.linkedin.com/in/sergio-c-20084698/"><Image noText source="https://sharedassets39.blob.core.windows.net/img/iconmonstr-linkedin-5.svg" /></Link>
                <Link to="https://steamcommunity.com/id/SLUG_GUNNER/"><Image noText source="https://sharedassets39.blob.core.windows.net/img/iconmonstr-steam-5.svg" /></Link>
                <Link to="https://www.twitch.tv/SLUG_GUNNER"><Image noText source="https://sharedassets39.blob.core.windows.net/img/iconmonstr-twitch-5.svg" /></Link>
            </div>

        </footer>
    )
}

Footer.defaultProps = {};

export default Footer;