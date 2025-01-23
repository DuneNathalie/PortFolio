/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Illustrator.module.scss';
import Title from '../../components/Title/Title';
import CategoryList from '../../components/Illustrator/CategoryList/CategoryList';
import Preambule from '../../components/Preambule/Preambule';

import Data_Presentation from '../../Data/DataPresentation';


const Illustrator: React.FC = () => {
    const presentationData = Data_Presentation.find(item => item.id === 2);
    return (
        <div className={Styles.container}>
            <Title title='réalisation avec adobe illustrator' />
            <Preambule text={presentationData?.description || 'Aucune donnée disponible'} />
            <CategoryList />
            <Footer type='illustrator' />
        </div>
    );
};

export default Illustrator;
