/* eslint-disable */
import React from 'react';

import styles from './Cv.module.scss';

const Cv: React.FC = () => {
    const handleNavigate=()=>{
        console.log('naviger vers Acceuil');
        }
        
    return (
        <div className={styles.container}>
         <h1>CV</h1>
        </div>
    );
};

export default Cv;
