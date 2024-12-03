/* eslint-disable */
import React from 'react';

import NavigatePage from '../../components/Footer/Footer';
import Styles from './Realisation.module.scss'

const Realisation: React.FC = () => {
    return (
        <div className={Styles.container}>
            <h1>Realisations</h1>
            <NavigatePage type='realisation' />
        </div>

    );
};

export default Realisation;
