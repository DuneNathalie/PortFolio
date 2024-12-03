import React from 'react';

import User from '../../../assets/profil.png';
import Styles from './Profil.module.scss';

const Profil: React.FC = () => {
    return (
        <div className={Styles.container}>
            <img src={User} alt="profil"/>
        </div>
    );
}

export default Profil;
