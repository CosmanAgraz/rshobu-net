import React from "react";
import {Text} from "../";

import styles from './Image.module.scss';

const Image = ( {noText, source, children, ...props} ) =>
{

    
    let image;
    if ( !!noText )
    {
        image = (
            <img class={styles.root} src={source} {...props} ></img>
        );
    } 
    else 
    {
        image = (<>
            <img class={styles.root} src={source} {...props} ></img>
            <Text align="center" type="bodySm">{children}</Text>
        </>);
    }

    return image;
}

Image.defaultProps = {};

export default Image;