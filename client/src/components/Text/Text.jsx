import React from 'react';
import styles from './Text.module.scss';
import cx from 'classnames';

const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const bodyTypes = ['body', 'bodySm', 'bodyLg'];
const other = ['span', 'strong', 'em'];

const Text = ({ type, as, children }) => 
{
    let Tag;

    if (!!as) {
        Tag = as;   
    } else if (headers.includes(type) || other.includes(type)) {
        Tag = type;
    } else if (bodyTypes.includes(type)) {
        Tag = 'p';
    }

    return <Tag className={cx(styles[type], { [styles.header]: headers.includes(type), [styles.blue_paragraph]: bodyTypes.includes(type) })}>{children}</Tag>;
};

Text.defaultProps = {
    type: 'body'
};

export default Text;