/* eslint-disable */
import React from 'react';

import Footer from '../../components/Footer/Footer';
import Styles from './Contact.module.scss';

const Contact: React.FC = () => {

    return (
        <div className={Styles.container}>
            <h1>Contact</h1>
           <Footer type='contact'/>
        </div>
    );
};

export default Contact;
