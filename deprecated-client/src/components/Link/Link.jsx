import React from "react";
import {Text} from '../';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';


const Link = ( {to, isNav, children} ) =>
{

    let link;
    if ( !!isNav )
    {
        link = (<RouterLink to={to}><Text type='bodyLg'>{children}</Text></RouterLink>);
    } 
    else 
    {
        link = (<a className={styles.root} href={to} target="_blank">{children}</a>);
    }

    return link;
}

Link.defaultProps = {};

export default Link;