import React from 'react';

import Styles from './Realisation.module.scss';

import Footer from '../../components/Footer/Footer';
import SiteList from '../../components/Realisation/SiteList/SiteList';
import Title from '../../components/Title/Title';
import Preambule from '../../components/Preambule/Preambule';

import Data_Presentation from '../../Data/DataPresentation';

const Realisation: React.FC = () => {
    const presentationData = Data_Presentation.find(item => item.id === 3);
    return (
        <div className={Styles.container}>
            <Title title='réalisation sites web' />
            <Preambule text={presentationData?.description || 'Aucune donnée disponible'} />
            <SiteList/>
            <Footer type='realisation' />
        </div>

    );
};

export default Realisation;
