import React from 'react';

import Button from '../../button/Button';
import Styles from './Download.module.scss';

const Downloadcv: React.FC = () => {

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
                <Button type='download' text="TELECHARGER" onClick={handleDownload} />
            </div>
        )
    };
    export default Downloadcv;