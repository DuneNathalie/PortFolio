/* eslint-disable */
import React from 'react';

import styles from './Graphism.module.scss';

const Graphism: React.FC = () => {
    const handleNavigate=()=>{
        console.log('naviger vers Acceuil');
        }
        
    return (
        <div className={styles.container}>
         <h1>Graphism</h1>
        </div>
    );
};

export default Graphism;
