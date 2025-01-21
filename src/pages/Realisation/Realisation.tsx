/* eslint-disable */
import React from 'react';

import Styles from './Realisation.module.scss';

import Footer from '../../components/Footer/Footer';
import Site from '../../components/Site/Site';
import Title from '../../components/Title/Title';
import Presentation from '../../components/Preambule/Preambule';

import Data_Presentation from '../../Data/DataPresentation';

const Realisation: React.FC = () => {
    const presentationData = Data_Presentation.find(item => item.id === 3);
    return (
        <div className={Styles.container}>
            <Title title='réalisation sites web' />
            <Presentation text={presentationData?.description || 'Aucune donnée disponible'} />
            <Site/>
            <Footer type='realisation' />
        </div>

    );
};

export default Realisation;
