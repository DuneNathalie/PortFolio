import React from 'react';

import Footer from '../../components/footer/Footer';
import Styles from './Illustrator.module.scss';
import Title from '../../components/title/Title';
import CategoryList from '../../components/illustrator/categoryList/CategoryList';
import Preambule from '../../components/preambule/Preambule';

import Data_Presentation from '../../data/DataPresentation';


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
