/* eslint-disable */
import React from 'react';

import NavigatePage from '../../components/Footer/Footer';
import Trade from '../../components/Presenattion/Trade/Trade';
import UserName from '../../components/Presenattion/UserName/UserName';
import Profil from '../../components/Presenattion/Profil/Profil';

import Styles from './Home.module.scss';
import ByTheWay from '../../components/Presenattion/ByTheWay/ByTheWay';



const Home: React.FC = () => {

    return (
        <div className={Styles.container}>
            <UserName />
            <Profil/>
            <Trade />
            <ByTheWay />
            <NavigatePage type='home' />
        </div>
    );
};

export default Home;
