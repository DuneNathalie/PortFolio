import React from 'react';

import Button from '../../button/Button';
import Styles from './Downloadcv.module.scss';

const DownloadCv: React.FC = () => {

    const handleDownload = () => {
        const link = document.createElement('a'); 
        link.href = '/Cv/cv.pdf'; 
        link.download = 'CV_Dune_Nathalie.pdf'; 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
    }
        return (
            <div className={Styles.container}>
                <Button type='download' text="TELECHARGER CV" onClick={handleDownload} />
            </div>
        )
    };
    export default DownloadCv;