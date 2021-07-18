import { css } from '@emotion/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IStarship } from '../../common/types';

import { IState } from '../../store';
import { addToCompare, deleteFromCompare, fetchStarship } from '../../store/actions/starships';
import { getStarship, getStarshipStatus } from '../../store/selectors/starships';
import * as styles from './styles'
import thing from '../../assets/images/thing2.png';
import Button from '../../modules/Button';
import { getNotFoundError } from '../../store/selectors/errors';
import NotFound from '../../modules/NotFound';
import Spinner from '../../modules/Spinner';

const btnStyles = `
    background: linear-gradient(250.88deg, #FF057C -6.54%, #4CC3FF 118.43%);

    box-shadow: 2px 7px 18px 1px rgba(76, 195, 255, 0.7);
`;

const Starship: React.FC = () => {
    const { id } = useParams<{id: string}>();

    const starship = useSelector<IState, IStarship>(state => getStarship(state, { itemId: id }));
    const shipStatus = useSelector<IState, boolean>(state => getStarshipStatus(state, { itemId: id }));
    const error = useSelector((state: any) => getNotFoundError(state, {itemId: id}));
    const dispatch = useDispatch();

    const handleBtnClick = () => {
        dispatch(shipStatus ? deleteFromCompare(id) : addToCompare(id))
    };

    useEffect(() => {
       if (!starship) {
            fetchStarship(id)(dispatch);
       }
    }, [starship]);

    if (!starship && error !== 404) return <Spinner />

    if (error) return <NotFound />;

    return (
        <section css={css(styles.wrapper)}>
            <img src={thing} width="514" height="474" />
            <div>
                <h2>{starship.name}</h2>
                <div css={css(styles.subWrapper)}>
                    <p>
                        <span>Модель: </span>
                        <span>{starship.model}</span>
                    </p>
                    <p>
                        <span>Класс: </span>
                        <span>{starship.starship_class}</span>
                    </p>
                    <p>
                        <span>Производитель: </span>
                        <span>{starship.manufacturer}</span>
                    </p>
                    <p>
                        <span>Длина: </span>
                        <span>{starship.length} м</span>
                    </p>
                    <p>
                        <span>Команда: </span>
                        <span>{starship.crew}</span>
                    </p>
                    <p>
                        <span>Пассажири: </span>
                        <span>{starship.passengers}</span>
                    </p>
                    <p>
                        <span>Макс. скорость: </span>
                        <span>{starship.max_atmosphering_speed} км/с</span>
                    </p>
                    <p>
                        <span>Грузоподъемность: </span>
                        <span>{starship.cargo_capacity} т</span>
                    </p>
                </div>
                <div css={css('display: flex; align-items: center;')}>
                    <Button ownStyles={shipStatus ? btnStyles : ''} onClick={handleBtnClick}>{shipStatus? 'Удалить' : 'Сравнить'}</Button>
                    <Link to="/compare" css={css('font-size: 14px; margin-left: 40px; &:hover { font-weight: 600;}')}>Перейти к сравнению</Link>
                </div>
            </div>
        </section>
    )
}

export default Starship
