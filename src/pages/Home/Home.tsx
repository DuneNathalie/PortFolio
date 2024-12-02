/* eslint-disable */
import React from 'react';

import styles from './Home.module.scss';
import Button from "../../components/Button/Button";

const Home: React.FC = () => {
    const handleNavigate=()=>{
        alert('naviger vers Acceuil');
        }
        
    return (
        <div className={styles.container}>
         <h1>Home</h1>
           <Button text="Click me" onClick={handleNavigate}/>
        </div>
    );
};

export default Home;
