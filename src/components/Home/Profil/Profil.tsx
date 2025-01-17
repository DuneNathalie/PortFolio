import React from 'react';

import Styles from './Profil.module.scss';
import Title from '../../Title/Title';

const Profil: React.FC = () => {
    return (
        <div className={Styles.container}>
          <div className={Styles.username}>
            <p>Nathalie Dune</p>
        </div>
        <Title title="Développeuse d'application Web et Mobile" />
      </div>
    );
}

export default Profil;
