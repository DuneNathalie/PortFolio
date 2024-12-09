import React from 'react';

import Button from '../../Button/Button';
import Styles from './DownloadCv.module.scss';

const DownloadCv: React.FC = () => {
    return (
        <div className={Styles.container}>
            <a href="/Cv/cv.pdf" download="Mon_CV.pdf"><Button text="TELECHARGER CV"/></a>
        </div>
    )
};
export default DownloadCv;