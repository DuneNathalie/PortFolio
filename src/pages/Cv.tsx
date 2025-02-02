import React, { useEffect } from 'react';

import Footer from '../components/footer/Footer';
import Styles from './Style.module.scss';
import Title from '../components/title/Title';
import Presentation from '../components/curriculum/presentation/Presentation';

const Cv: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className={Styles.container}>
            <Title title='curriculum vitae' />
            <Presentation />
            <Footer type='cv' />
        </div>
    );
};

export default Cv;
