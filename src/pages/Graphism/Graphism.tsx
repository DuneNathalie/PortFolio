/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Graphism.module.scss';

const Graphism: React.FC = () => {

    return (
        <div className={Styles.container}>
            <h1>Graphism</h1>
            <Footer type='graphism' />
        </div>
    );
};

export default Graphism;
