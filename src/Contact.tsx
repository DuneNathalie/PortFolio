import React from 'react';

import styles from './Contact.module.scss';

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>CONTACT</p>
            </div>
            <div className={styles.contact}>
                <div className={styles.mail}><p>BazArtDeFred@gmail.com</p></div>
                <div className={styles.text}>
                    <p>Au plaisir de se rencontrer , Frédérique</p>
                </div>
            </div>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/profile.php?id=61562185179978" rel="noopener noreferrer" className={styles.link_facebook} aria-label="Facebook">
                    <FaFacebook color={"#252712"} size={30} />
                </a>
                <a href="https://www.instagram.com/bazartdefred/" rel="noopener noreferrer" className={styles.link_inst} aria-label="Instagram">
                    <FaSquareInstagram color={"#252712"} size={30} />
                </a>
            </div>
        </div>
    );
};

export default Contact;