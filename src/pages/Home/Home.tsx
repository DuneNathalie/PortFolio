/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';

import Styles from './Home.module.scss';
import Profil from '../../components/Home/Profil/Profil';
import Description from '../../components/Home/Description/Description';



const Home: React.FC = () => {

    return (
        <div className={Styles.container}>
            <Profil />
            <Description />
            <Footer type='home' />
        </div>
    );
};

export default Home;
