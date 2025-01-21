import React from 'react';

import Styles from './Site.module.scss';
import Data_web from '../../Data/DataSite';

const Site: React.FC = () => {
    return (
        <div className={Styles.container}>
        {Data_web.map((intem, index) => (
            <div key={index} className={Styles.item}>
                <h2>{intem.title}</h2>
                <div className={Styles.techno}>
                    <h3>Langage:</h3>
                    <p>{intem.langage}</p>
                </div>
                <div>
                    <p>{intem.description}</p>
                </div>
                <div >
                    <img src={intem.icon} />
                    <a href={intem.url}>{intem.url}</a>
                    <img src={intem.img} />
                    <img src={intem.imgWeb} />
                </div>
            </div>
        ))}
    </div>
    );
};
export default Site;