import React from 'react';

import Styles from './Presentation.module.scss';
import CvImg from '../CvImg/CvImg';
import Message from '../Message/Message';

const Presentation: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.presentation}>
            <CvImg />
            <Message/>
            </div>
        </div>
    );
};
export default Presentation;