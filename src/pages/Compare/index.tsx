import { css } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { IStarship } from '../../common/types';
import CompareCard from '../../modules/CompareCard';
import { IState } from '../../store';
import { getAllComparedShips } from '../../store/selectors/starships';

import * as styles from './styles';


const Compare: React.FC = () => {
    const comparedShips = useSelector((state: IState) => getAllComparedShips(state, {}));

    const noItems = <h2 css={css('font-size: 36px; line-height: 46px;')}>Выберите звездолеты</h2>

    const cardsContent = comparedShips.map((item: IStarship) => <CompareCard starship={item} key={item.id}/>);


    return (
        <div css={css(styles.wrapper)}>
            <div css={css(styles.filtersStyles)}>
                <div css={css('margin-bottom: 61px;')}>
                    <p>Название</p>
                    <p>Модель</p>
                    <p>Класс</p>
                    <p>Производитель</p>
                </div>


                <p>Длина</p>
                <p>Команда</p>
                <p>Пассажири</p>
                <p>Макс. скорость</p>
                <p>Грузоподъемность</p>
                <p>Цена</p>
            </div>
            <div css={css(styles.listContainer)}>
                {comparedShips.length? cardsContent : noItems}
            </div>
        </div>
    )
}

export default Compare
