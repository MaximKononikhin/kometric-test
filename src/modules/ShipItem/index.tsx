import { css } from '@emotion/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IStarship } from '../../common/types';
import { IState } from '../../store'
import { getStarship, getStarshipStatus } from '../../store/selectors/starships';
import * as styles from './styles';
import thing from '../../assets/images/thing.png';
import credit from '../../assets/images/credit.svg';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { addToCompare, deleteFromCompare } from '../../store/actions/starships';

type IProps = {
    itemId: string;
}

const btnStyles = `
    background: linear-gradient(250.88deg, #FF057C -6.54%, #4CC3FF 118.43%);

    box-shadow: 2px 7px 18px 1px rgba(76, 195, 255, 0.7);
`;


const ShipItem: React.FC<IProps> = ({ itemId }) => {
    const starship = useSelector<IState, IStarship>(state => getStarship(state, { itemId }));
    const shipStatus = useSelector<IState, boolean>(state => getStarshipStatus(state, { itemId }));
    const dispatch = useDispatch();

    const handleBtnClick = () => {
        dispatch(shipStatus ? deleteFromCompare(itemId) : addToCompare(itemId))
    };


    return (
        <p css={css(styles.listItem)}>
            <Link to={`/starship/${itemId}`}>
                <img src={thing} width={57} height={51}  css={css('margin-right: 67px;')}/>
                <span css={css('width: 253px; margin-right: 100px; cursor: pointer;')}>
                    {starship.name}
                </span>
                <span css={css('width: 500px; text-transform: capitalize; margin-right: 100px;')}>
                    {starship.starship_class}
                </span>
                <span css={css('display: flex; align-items: center;')}>
                    {starship.cost_in_credits}
                    <img src={credit} width={18} height={30} css={css('margin-left: 7px;')}/>
                </span>
            </Link>
            <Button ownStyles={shipStatus ? btnStyles : ''} onClick={handleBtnClick}>{shipStatus? 'Удалить' : 'Сравнить'}</Button>
        </p>
    )
}

export default ShipItem
