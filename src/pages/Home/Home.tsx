/* eslint-disable */
import React from 'react';

import styles from './Home.module.scss';

const Home: React.FC = () => {
    const handleNavigate=()=>{
        console.log('naviger vers Acceuil');
        }
        
    return (
        <div className={styles.container}>
         <h1>Home</h1>
           <button onClick={handleNavigate}>Aller vers Galerie</button> 
        </div>
    );
};

export default Home;
