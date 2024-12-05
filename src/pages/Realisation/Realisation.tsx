/* eslint-disable */
import React from 'react';

import NavigatePage from '../../components/Footer/Footer';
import Styles from './Realisation.module.scss'
import Title from '../../components/Title/Title';

const Realisation: React.FC = () => {
    return (
        <div className={Styles.container}>
            <Title title='réalisation sites web' />
            <NavigatePage type='realisation' />
        </div>

    );
};

export default Realisation;
