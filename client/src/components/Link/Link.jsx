import React from "react";
import {Text} from '../';
import { Link as RouterLink } from 'react-router-dom';


const Link = ( {to, children} ) =>
{

    return ( <RouterLink to={to}><Text type='bodyLg'>{children}</Text></RouterLink>);
}

Link.defaultProps = {};

export default Link;