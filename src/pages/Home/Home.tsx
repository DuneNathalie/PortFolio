/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';

import Styles from './Home.module.scss';
import ByTheWay from '../../components/Home/ByTheWay/ByTheWay';
import Profil from '../../components/Home/Profil/Profil';



const Home: React.FC = () => {

    return (
        <div className={Styles.container}>
            <Profil />
            <ByTheWay />
            <Footer type='home' />
        </div>
    );
};

export default Home;
