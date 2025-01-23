import React from 'react';

import Footer from '../../components/footer/Footer';
import Styles from './Cv.module.scss';
import Title from '../../components/title/Title';
import Presentation from '../../components/curriculum/presentation/Presentation';

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
