import React from 'react';

import Styles from './Description.module.scss';
import Img from '../Img/Img';
import ByTheWay from '../ByTheWay/ByTheWay';

const Description: React.FC = () => {
    return (
        <div className={Styles.container}>
            <Img/>
            <ByTheWay/>
        </div>
    );
};
export default Description;