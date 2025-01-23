import React from 'react';

import Data_site from '../../../data/DataSite';

import Styles from './SiteList.module.scss';
import Site from '../site/Site';

const SiteList: React.FC = () => {
    const Data_fag = Data_site.find(item => item.id === 1);
    const Data_bdf = Data_site.find(item => item.id === 2);
    const Data_Astro = Data_site.find(item => item.id === 3);
    const Data_Spa = Data_site.find(item => item.id === 4);

    return (
        <div className={Styles.container}>
            <Site title={Data_fag.title} img={Data_fag.img} langage={Data_fag.langage} description={Data_fag.description} url={Data_fag.url}
                icon={Data_fag.icon} />
            <Site title={Data_bdf.title} img={Data_bdf.img} langage={Data_bdf.langage} description={Data_bdf.description} url={Data_bdf.url}
                icon={Data_bdf.icon} />
            <Site title={Data_Astro.title} img={Data_Astro.img} langage={Data_Astro.langage} description={Data_Astro.description} url={Data_Astro.url}
                icon={Data_Astro.icon} />
            <Site title={Data_Spa.title} img={Data_Spa.img} langage={Data_Spa.langage} description={Data_Spa.description} url={Data_Spa.url}
                icon={Data_Spa.icon} />
        </div>
    );
};
export default SiteList;