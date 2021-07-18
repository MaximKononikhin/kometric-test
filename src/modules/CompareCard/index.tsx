import { css } from '@emotion/react';
import React from 'react';

import { IStarship } from '../../common/types';
import * as styles from './styles';
import credit from '../../assets/images/credit.svg';
import cross from '../../assets/images/cross.svg';
import { useDispatch } from 'react-redux';
import { deleteFromCompare } from '../../store/actions/starships';


type IProps = {
    starship: IStarship;
}

const CompareCard: React.FC<IProps> = ({ starship }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteFromCompare(starship.id))
    }

    return (
        <div css={css(styles.cardStyles)}>
            <button css={css(styles.crossStyles)} onClick={handleDelete}>
                <img src={cross} width="29" height="29" />
            </button>
            
            <div css={css(styles.mainInfo)}>
                <h3>{starship.name}</h3>
                <p>{starship.model}</p>
                <p>{starship.starship_class}</p>
                <p>{starship.manufacturer}</p>
            </div>


            <div css={css(styles.additionInfo)}>
                <p>{starship.length} м</p>
                <p>{starship.crew}</p>
                <p>{starship.passengers}</p>
                <p>{starship.max_atmosphering_speed} км/с</p>
                <p>{starship.cargo_capacity} т</p>
                <p css={css('display: flex; align-items: center; justify-content: flex-start;')}>
                    {starship.cost_in_credits}
                    <img src={credit} width="14" height="20" />
                </p>
            </div>
        </div>
    )
}

export default CompareCard
