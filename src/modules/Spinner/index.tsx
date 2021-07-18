import { css } from '@emotion/react'
import React from 'react'

import * as styles from './styles';

const Spinner: React.FC = () => {
    return (
        <div css={css(styles.spinner)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
