import React from 'react';

import UserImg from '../../../assets/profil.png';
import Styles from './User.module.scss';

const User: React.FC = () => {
    return (
        <div className={Styles.container}>
            {/*<img src={UserImg} alt="profil"/>*/}
        </div>
    );
}

export default User;
