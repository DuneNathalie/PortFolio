/* eslint-disable */
import React from 'react';

import NavigatePage from '../../components/Footer/Footer';
import UserName from '../../components/Presenattion/UserName/UserName';


import Styles from './Home.module.scss';
import ByTheWay from '../../components/Presenattion/ByTheWay/ByTheWay';
import Profil from '../../components/Presenattion/Profil/Profil';



const Home: React.FC = () => {

    return (
        <div className={Styles.container}>
            <Profil />
            <ByTheWay />
            <NavigatePage type='home' />
        </div>
    );
};

export default Home;
