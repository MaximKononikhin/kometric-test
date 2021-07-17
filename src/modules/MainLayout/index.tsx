import React from 'react'
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

import * as styles from './styles'
import animatedGif from '../../assets/images/animatedOrb.gif';
import logo from '../../assets/images/logo.svg';
import tor from '../../assets/images/tor.jpg';

const MainLayout: React.FC = ({ children }) => {
    return (
        <main css={css(styles.mainStyles)}>
            <img src={animatedGif} width="763" height="763" css={css(styles.animatedOrb)} />
            <Link to="/" css={css(styles.logoStyle)}>
                <img src={logo} width="365" height="155" />
            </Link>
            
            {children}
            <img src={tor} width="421" height="421" alt="" css={css(styles.torStyles)}/>
        </main>
    )
}

export default MainLayout
