import React from "react";

import styles from './Wrapper.module.scss';

const Wrapper = ( {children} ) =>
{
    return (
        <div className={styles.root}>
            <div className={styles.flexbox}>
                {children}
            </div>
        </div>
    )
}

Wrapper.defaultProps = {};

export default Wrapper;