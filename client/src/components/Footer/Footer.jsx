import React from "react";

import styles from "./Footer.module.scss"

const Footer = ( {children} ) =>
{
    return (
        <footer className={styles.root}>{children}</footer>
    )
}

Footer.defaultProps = {};

export default Footer;