import React from 'react';

import Styles from './Site.module.scss';

interface SiteProps {
    title: string;
    img: string;
    langage: string;
    description: string;
    url: string;
    icon: string;
}

const Site: React.FC<SiteProps> = ({ title, img, langage, description, url, icon }) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.cards}>
                <div className={Styles.item}>
                    <div className={Styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.img}>
                            <img src={img}/>
                        </div>
                        <div className={Styles.description}>
                            <p>{langage}</p>
                            <p>{description}</p>
                            <div className={Styles.link}>
                                <img src={icon} />
                                <a href={url}>{url}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Site;