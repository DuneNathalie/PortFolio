/* eslint-disable */
import React from 'react';

import styles from './Contact.module.scss';

const Contact: React.FC = () => {
    const handleNavigate=()=>{
        console.log('naviger vers Acceuil');
        }
        
    return (
        <div className={styles.container}>
         <h1>Contact</h1>
        </div>
    );
};

export default Contact;
