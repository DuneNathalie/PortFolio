import React from 'react';

import Styles from './Realisation.module.scss';

import Footer from '../../components/footer/Footer';
import SiteList from '../../components/realisation/sitelist/SiteList';
import Title from '../../components/title/Title';
import Preambule from '../../components/preambule/Preambule';

import Data_Presentation from '../../data/Presentation';

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
