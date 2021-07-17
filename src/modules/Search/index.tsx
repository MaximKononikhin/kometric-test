import { css } from '@emotion/react';
import React, { useState } from 'react';

import * as styles from './styles';
import searchIcon from '../../assets/images/searchIcon.svg';

type ISearch = {
    onChange: (value: string) => void;
}

const Search: React.FC<ISearch> = ({ onChange }) => {
    return (
        <label css={css(styles.inputStyles)}>
            <img src={searchIcon} width="21" height="21" />
            <input type="text" onChange={(evt) => onChange(evt.target.value)}/>
        </label>
    )
}

export default Search
