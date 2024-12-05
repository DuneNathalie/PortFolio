/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Cv.module.scss';

const Cv: React.FC = () => {

    return (
        <div className={Styles.container}>
            <h1>CV</h1>
          <Footer type='cv'/>
        </div>
    );
};

export default Cv;
