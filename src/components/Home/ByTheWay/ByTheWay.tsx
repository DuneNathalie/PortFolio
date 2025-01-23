import React from 'react';
import Styles from './ByTheWay.module.scss';
import Data_Presentation from '../../../data/DataPresentation';
import Preambule from '../../preambule/Preambule';

const ByTheWay: React.FC = () => {
        const presentationData = Data_Presentation.find(item => item.id === 1);
    
    return (
        <div className={Styles.container}>
            <h2>Bienvenue sur mon portfolio</h2>
            <Preambule text={presentationData?.description || 'Aucune donnée disponible'}/>
        </div>

    );
}
export default ByTheWay;