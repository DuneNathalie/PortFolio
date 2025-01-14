import React from 'react';

import Button from '../../Button/Button';
import Styles from './DownloadCv.module.scss';

const DownloadCv: React.FC = () => {
    return (
        <div className={Styles.container}>
            <a href="/Cv/cv.pdf" download="CV_Dune_Nathalie.pdf"><Button type='download' text="TELECHARGER CV" /></a>
        </div>
    )
};
export default DownloadCv;