import React from 'react';

import Styles from './Profil.module.scss';
import UserName from '../UserName/UserName';
import Business from '../Business/Business';

const Profil: React.FC = () => {
    return (
        <div className={Styles.container}>
        <UserName />
        <Business />
        <div className={Styles.circle}></div>
      </div>
    );
}

export default Profil;
