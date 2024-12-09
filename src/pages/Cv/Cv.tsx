/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Cv.module.scss';
import Title from '../../components/Title/Title';
import DownloadCv from '../../components/Curriculum/DownloadCv/DownloadCv';
import CVitt from '../../components/Curriculum/CVitt/CVitt';

const Cv: React.FC = () => {

    return (
        <div className={Styles.container}>
            <Title title='curriculum vitae' />
            <CVitt/>
            <DownloadCv />
            <Footer type='cv' />
        </div>
    );
};

export default Cv;
