import React from 'react';

import { FaCloudArrowDown } from "react-icons/fa6";

import Styles from './Message.module.scss';
import DownloadCv from '../DownloadCv/DownloadCv';
import { motion } from 'framer-motion';

const Message: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.test}>

                <div className={Styles.message}>
                    <h2>Merci d'avoir parcouru mon portfolio!</h2>
                    <p>Je suis disponible pour discuter de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour toute question ou pour en savoir plus sur mon travail. <br /> <br />Vous avez la possibilté de télécharger mon CV en un clic !</p>
                </div>
                <div className={Styles.button}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40 }} >
                        <FaCloudArrowDown style={{ width: '100%', height: '100%' }} /> </motion.div>
                    <DownloadCv />
                </div>
            </div>
        </div>
    );
};
export default Message;