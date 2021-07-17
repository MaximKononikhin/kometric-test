import React from 'react'
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';

import Button from '../../modules/Button'
import Search from '../../modules/Search'
import * as styles from './styles';
import { useEffect } from 'react';
import { fetchStarships } from '../../store/actions/starships';

const Main: React.FC = () => {
    useEffect(() => {
        const fetch = async () => {
            await fetchStarships()();
        }
        fetch();
    }, [])

    return (
        <section css={css(styles.wrapper)}>
            <div css={css('display: flex; justify-content: space-between;')}>
                <Search onChange={console.log}/>
                <Link to="/compare">Перейти к сравнению</Link>
            </div>
        </section>
    )
}

export default Main
