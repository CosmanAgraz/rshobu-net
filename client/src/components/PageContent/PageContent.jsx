import React from "react";

import styles from "./PageContent.module.scss";

const PageContent = ( { children } ) =>
{
    return (
        <div className={styles.root}>{children}</div>
    )
}

PageContent.defaultProps = {};

export default PageContent;