import React from 'react';
import styles from './CVitt.module.scss';

import Data_Cv from '../../../Data/DataCv.js';

const CVitt = () => {
    const experienceData = Data_Cv.filter(item => item.id === 1);
    const competenceData = Data_Cv.filter(item => item.id === 2);
    const formationData = Data_Cv.filter(item => item.id === 3);
    const centreData = Data_Cv.filter(item => item.id === 4);
    console.log("experience data = ", experienceData);
    console.log("competence data = ", competenceData);
    return (
        <div className={styles.container}>
            {experienceData.map((experienceCategory) => (
                <div key={experienceCategory.id} >
                    <h2>{experienceCategory.title}</h2>
                    <div >
                        {experienceCategory.experiences.map((experience) => (
                            <div key={experience.id} className={styles.item}>
                                <h3>{experience.emploi}</h3>
                                <div className={styles.description}>
                                    <div className={styles.employeur}>
                                        <p><strong>{experience.employeur}</strong> {experience.date}</p>
                                    </div>
                                    <div className={styles.list}>
                                        <ul>
                                            <li>{experience.description.tache1}</li>
                                            <li>{experience.description.tache2}</li>
                                            <li>{experience.description.tache3}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
            <div>
                {competenceData.map((competenceCategory) => (
                    <div key={competenceCategory.id}>
                        <h2>{competenceCategory.title}</h2>
                        <div>
                            <div className={styles.item}>
                                {competenceCategory.details.map((detail, index) => (
                                    <div key={index}>
                                        {detail.techno && <p>Techno : {detail.techno}</p>}
                                        {detail.logiciels && <p>Logiciels : {detail.logiciels}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {formationData.map((formationCategory) => (
                    <div key={formationCategory.id} >
                        <h2>{formationCategory.title}</h2>
                        <div >
                            {formationCategory.details.map((detail) => (
                                <div key={detail.id}>
                                    <div className={styles.formation}>
                                        <p>{detail.date} <strong>{detail.formation}</strong></p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

            <div>
                {centreData.map((centreCategory) => (
                    <div key={centreCategory.id}>
                        <h2>{centreCategory.title}</h2>
                        <div>
                            {centreCategory.details.map((detail, index) => (
                                <div key={index}>
                                    <div className={styles.list}>
                                        <ul>
                                            <li>{detail.interet1}</li>
                                            <li>{detail.interet2}</li>
                                            <li>{detail.interet3}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default CVitt;
