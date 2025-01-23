import React from 'react';


import Styles from './Home.module.scss';
import Profil from '../../components/home/profil/Profil';
import Description from '../../components/home/description/Description';
import Footer from '../../components/footer/Footer';



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
