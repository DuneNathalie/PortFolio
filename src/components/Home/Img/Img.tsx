import React from 'react';

import Styles from './Img.module.scss';
import Nath from '../../../assets/Nath.png';

const Img: React.FC = () => {
    return (
        <div className={Styles.container}>
          <img src={Nath} alt="photo de profil" /> 
        </div>
    );
};
export default Img;