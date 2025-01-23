import React from 'react';


import Styles from './Home.module.scss';
import Profil from '../../components/Home/Profil/Profil';
import Description from '../../components/Home/Description/Description';
import Footer from '../../components/Footer/Footer';



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
