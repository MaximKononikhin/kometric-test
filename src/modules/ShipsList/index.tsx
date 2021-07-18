import { css } from '@emotion/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { IState } from '../../store';
import { getAllStarshipsIds, getStarshipTotalCount } from '../../store/selectors/starships';
import ShipItem from '../ShipItem';
import * as styles from './styles'
import Spinner from '../Spinner';

type IProps = {
    handleNextPage: () => void
}

const ShipList: React.FC<IProps> = ({ handleNextPage }) => {
    const [hasMore, setHasMore] = useState(true);
    const starshipsIds = useSelector<IState, unknown[]>(state => getAllStarshipsIds(state, {}));
    const starshipsCount = useSelector((state: IState) => getStarshipTotalCount(state));

    const starshipsContent = starshipsIds.map((id: string) => <ShipItem itemId={id} key={id}/>);

    const nextPageHandler = () => {
        if (starshipsIds.length >= starshipsCount) {
            setHasMore(false);
            return;
        }
        handleNextPage();
    }

    return (
        <div>
            <div css={css(styles.subwrapper)}>
                <h3 css={css('padding-left: 210px;')}>Название</h3>
                <h3 css={css('padding-left: 280px;')}>Класс</h3>
                <h3 css={css('padding-left: 555px;')}>Цена</h3>
            </div>
            
                <InfiniteScroll
                    height={420}
                    style={{position: 'relative', zIndex: 1}}
                    hasMore={hasMore}
                    dataLength={starshipsIds.length}
                    loader={<Spinner />}
                    next={nextPageHandler}
                >
                    {starshipsContent}
                </InfiniteScroll>
        </div>
    )
}

export default ShipList
