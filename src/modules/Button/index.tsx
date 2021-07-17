import React from 'react';
import { jsx, css } from '@emotion/react';

import * as styles from './styles';

type IButton = {
    onClick?: VoidFunction | null;
    children?: React.ReactNode | React.ReactNode[];
    ownStyles?: string;
}

const Button: React.FC<IButton> = ({children, onClick, ownStyles}) => {
    return (
        <button css={css(ownStyles? ownStyles : styles.btnStyles)} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
