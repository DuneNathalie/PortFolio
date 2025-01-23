import React from 'react';
import Styles from './CategoryList.module.scss';

import Data_illustrator from '../../../data/Illustrator';

import 'react-medium-image-zoom/dist/styles.css';
import Category from '../category/Category';
import CardsNoel from '../cardsNoel/CardsNoel';


const CategoryList: React.FC = () => {
    // Récupérer les données
    const familyData = Data_illustrator.slice(0, 3);
    const characterData = Data_illustrator.slice(3, 6);
    const elementData = Data_illustrator.slice(6, 10);

    return (
        <div className={Styles.container}>
            {/* Section La Famille */}
            <div className={Styles.category}>
                <Category theme="Personnages familiaux" data={familyData} />
            </div>
            <div className={Styles.separator}/>
            {/* Section Les Personnages */}
            <div className={Styles.category}>
                <Category theme="Personnages existants" data={characterData} />
            </div>
            <div className={Styles.separator}/>
               
            {/* Section Les Éléments de Noël */}
            <div className={Styles.category}>
                <Category theme="Décorations de Noël" data={elementData} />
            </div>
            <div className={Styles.separator}/>
            {/* Section Les Éléments  carte de Noël */}
            <div className={Styles.categoryNoel}>
                <CardsNoel />
            </div>
        </div>
    );
};

export default CategoryList;
