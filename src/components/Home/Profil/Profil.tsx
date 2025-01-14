import React from 'react';

import Styles from './Profil.module.scss';
import UserName from '../UserName/UserName';
import Title from '../../Title/Title';

const Profil: React.FC = () => {
    return (
        <div className={Styles.container}>
        <UserName />
        <Title title="Développeuse d'application Web et Mobile" />
      </div>
    );
}

export default Profil;
