/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Graphism.module.scss';
import Title from '../../components/Title/Title';
import Illustrator from '../../components/Illustrator/Illustrator';
import Presentation from '../../components/Preambule/Preambule';

import Data_Presentation from '../../Data/DataPresentation';

const Graphism: React.FC = () => {
    const presentationData = Data_Presentation.find(item => item.id === 2);
    return (
        <div className={Styles.container}>
            <Title title='réalisation avec adobe illustrator' />
            <Presentation text={presentationData?.description || 'Aucune donnée disponible'} />
            <Illustrator/>
            <Footer type='graphism' />
        </div>
    );
};

export default Graphism;
