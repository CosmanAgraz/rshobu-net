import React from "react";
import { motion } from "framer-motion"

import styles from "./PageContent.module.scss";

const PageContent = ( { children } ) =>
{
    return (
        <motion.div className={styles.root} exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}

PageContent.defaultProps = {};

export default PageContent;