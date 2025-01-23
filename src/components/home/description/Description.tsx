import React from 'react';

import Styles from './Description.module.scss';
import Img from '../img/Img';
import ByTheWay from '../bytheway/ByTheWay';

const Description: React.FC = () => {
    return (
        <div className={Styles.container}>
            <Img/>
            <ByTheWay/>
        </div>
    );
};
export default Description;