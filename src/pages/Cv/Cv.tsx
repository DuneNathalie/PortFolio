import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Cv.module.scss';
import Title from '../../components/Title/Title';
import Presentation from '../../components/Curriculum/Presentation/Presentation';

const Cv: React.FC = () => {

    return (
        <div className={Styles.container}>
            <Title title='curriculum vitae' />
            <Presentation />
            <Footer type='cv' />
        </div>
    );
};

export default Cv;
