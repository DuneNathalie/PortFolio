/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Graphism.module.scss';
import Title from '../../components/Title/Title';
import Illustrator from '../../components/Graphism/Illustrator/Illustrator';
import Presentation from '../../components/Graphism/Presentation/Presentation';

const Graphism: React.FC = () => {

    return (
        <div className={Styles.container}>
            <Title title='réalisation avec adobe illustrator' />
            <Presentation/>
            <Illustrator/>
            <Footer type='graphism' />
        </div>
    );
};

export default Graphism;
