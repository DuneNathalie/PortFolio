import React from 'react';

import Styles from './CardsNoel.module.scss';
import cardfils from '../../../assets/AI/card_fils.png';
import cardfille from '../../../assets/AI/card_fille.png';

const cardsNoel = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                <h2>Cartes finalisées</h2>
            </div>
            <div className={Styles.containerCards}>
                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src={cardfils} alt="card noel fils" />
                    </div>
                    <div className={Styles.text}>
                        <p>Résultat carte noël pour mon fils</p>
                    </div>
                </div>

                <div className={Styles.cards}>
                    <div className={Styles.img}>
                        <img src={cardfille} alt="card noel fille" />
                    </div>
                    <div className={Styles.text}>
                        <p>Résultat carte noël pour ma fille</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default cardsNoel;