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
      const formatText = (inputText: string) => {
        return inputText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < inputText.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.containerCard}>
                <div className={Styles.item}>
                    <div className={Styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={Styles.cardSite}>
                        <div className={Styles.img}>
                            <img src={img}/>
                        </div>
                        <div className={Styles.description}>
                            <div className={Styles.line}>
                            <p><strong>Langages, frameworks, outil:</strong><br/>{formatText(langage)}</p>
                            <p>{formatText(description)}</p>
                            </div>
                            <div className={Styles.link}>
                                <img src={icon} />
                                <a href={url}>{formatText(url)}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Site;