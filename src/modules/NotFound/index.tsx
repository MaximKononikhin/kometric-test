import { css } from '@emotion/react';
import React from 'react';

import * as styles from './styles';


const NotFound: React.FC = () => {
    return (
        <section css={css(styles.wrapper)}>
            <h2>Ошибка 404</h2>
            <p>Мы любим мир, где люди видят вещи, которых на самом деле нет.</p>
            <p>Но этой страницы действительно не существует.</p>
        </section>
    )
}

export default NotFound
