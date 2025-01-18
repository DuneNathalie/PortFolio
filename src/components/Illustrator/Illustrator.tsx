import React from 'react';
import Styles from './Illustrator.module.scss';
import Data_illustrator from '../../Data/DataIllustrator';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import cardfils from '../../assets/AI/card_fils.png';
import cardfille from '../../assets/AI/card_fille.png';

const Illustrator: React.FC = () => {
    // Récupérer les données
    const familyData = Data_illustrator.slice(0, 3);
    const characterData = Data_illustrator.slice(3, 6);
    const elementData = Data_illustrator.slice(6, 10);

    return (
        <div className={Styles.container}>
            {/* Section La Famille */}
            <div className={Styles.category}>
                <div className={Styles.title}>
                    <h1>La famille:</h1>
                </div>
                <div className={Styles.cards}>
                    {familyData.map((item, index) => (
                        <div key={index} className={Styles.item}>
                            <Zoom
                                ZoomContent={({ img, style }) => {
                                    const customStyle = {
                                        ...style,
                                        backgroundColor: 'rgba(196, 139, 122, 0.5)',
                                        width: '100%',
                                        height: '100%',
                                    };
                                    return <div style={customStyle}>{img}</div>;
                                }}
                            >
                                <div className={Styles.img}>
                                    <img src={item.img} alt={item.title} />
                                </div>
                            </Zoom>
                            <div className={Styles.text}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Section Les Personnages */}
            <div className={Styles.category}>
                <div className={Styles.title}>
                    <h1>Les personnages:</h1>
                </div>
                <div className={Styles.cards}>
                    {characterData.map((item, index) => (
                        <div key={index} className={Styles.item}>
                            <Zoom
                                ZoomContent={({ img, style }) => {
                                    const customStyle = {
                                        ...style,
                                        backgroundColor: 'rgba(196, 139, 122, 0.5)',
                                        width: '100%',
                                        height: '100%',
                                    };
                                    return <div style={customStyle}>{img}</div>;
                                }}
                            >
                                <div className={Styles.img}>
                                    <img src={item.img} alt={item.title} />
                                </div>
                            </Zoom>
                            <div className={Styles.text}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Les Éléments de Noël */}
            <div className={Styles.category}>
                <div className={Styles.title}>
                    <h1>Les éléments de Noël:</h1>
                </div>
                <div className={Styles.cards}>
                    {elementData.map((item, index) => (
                        <div key={index} className={Styles.item}>
                            <Zoom
                                ZoomContent={({ img, style }) => {
                                    const customStyle = {
                                        ...style,
                                        backgroundColor: 'rgba(196, 139, 122, 0.5)',
                                        width: '100%',
                                        height: '100%',
                                    };
                                    return <div style={customStyle}>{img}</div>;
                                }}
                            >
                                <div className={Styles.img}>
                                    <img src={item.img} alt={item.title} />
                                </div>
                            </Zoom>
                            <div className={Styles.text}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Les Éléments  carte de Noël */}
            <div className={Styles.categoryNoel}>
                <div className={Styles.title}>
                    <h1>Les éléments pour carte de Noël:</h1>
                </div>
                <div className={Styles.test}>
                    <div className={Styles.cardsNoel}>
                        <div className={Styles.imgNoel}>
                            <img src={cardfils} alt="card noel fils" />
                        </div>
                        <div className={Styles.text}>
                            <p>Résultat carte noel fils</p>
                        </div>
                    </div>

                    <div className={Styles.cardsNoel}>
                        <div className={Styles.imgNoel}>
                            <img src={cardfille} alt="card noel fille" />
                        </div>
                        <div className={Styles.text}>
                            <p>Résultat carte noel fille</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Illustrator;
