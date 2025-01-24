import React from 'react';

import Download from './../download/Download';

import Styles from './Message.module.scss';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from "react-icons/fa6";

const Message: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerMessage}>
                <div className={Styles.message}>
                    <h2>Merci d'avoir parcouru mon portfolio!</h2>
                    <p>Je suis disponible pour discuter de nouvelles opportunités et collaborations. <br/>
                    <br/>N'hésitez pas à me contacter pour toute question ou pour en savoir plus sur mon travail. <br /></p>
                </div>
                <div className={Styles.button}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 43, height: 30 }} >
                        <FaArrowDownLong  style={{ width: '30px', height: '30px'}} />
                        </motion.div>
                    <Download />
                </div>
            </div>
        </div>
    );
};
export default Message;