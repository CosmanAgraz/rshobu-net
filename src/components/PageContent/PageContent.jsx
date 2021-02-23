import React from "react";

import styles from "./PageContent.module.scss";

const PageContent = ( { children } ) =>
{
    return (
        <section className={styles.root}>{children}</section>
    )
}

PageContent.defaultProps = {};

export default PageContent;