import React from 'react';

import Styles from './Profil.module.scss';
import Title from '../../title/Title';

const Profil: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.username}>
        <p>Dune nathalie</p>
      </div>
      <Title title="Développeuse d'application Web et Mobile" />
    </div>
  );
}

export default Profil;
