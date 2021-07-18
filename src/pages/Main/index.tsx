import React, { useState } from 'react'
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Search from '../../modules/Search'
import * as styles from './styles';
import { useEffect } from 'react';
import { fetchStarships, searchStarships } from '../../store/actions/starships';
import ShipList from '../../modules/ShipsList';


const Main: React.FC = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchStarships(page)(dispatch);
    }, [page]);

    const handleNextPage = () => {
        setPage((prev) => prev + 1);
    }

    const searchHandler = (value: string) => {
        searchStarships(value)(dispatch);
    }

    return (
        <section css={css(styles.wrapper)}>
            <div css={css('display: flex; justify-content: space-between;')}>
                <Search onChange={searchHandler}/>
                <Link to="/compare" css={css('font-size: 14px; margin-right: 39px; &:hover { font-weight: 600;}')}>Перейти к сравнению</Link>
            </div>
            <ShipList handleNextPage={handleNextPage} />
        </section>
    )
}

export default Main
