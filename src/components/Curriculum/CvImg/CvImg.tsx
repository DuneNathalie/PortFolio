import React from 'react';
import CV from '../../../assets/Cv/cv.png';
import Styles from "./CvImg.module.scss";

const CvImg: React.FC = () => {
    return (
        <div className={Styles.container}>
            <img src={CV} alt="cv" />      
        </div>
    )
};

export default CvImg;