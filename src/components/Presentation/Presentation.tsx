import React from 'react';

import Styles from './Presentation.module.scss';

interface PresentationProps {
    text:string;
}

const Presentation: React.FC<PresentationProps> = ({text}) => {
    return (
        <div className={Styles.container}>
           <p>{text}</p>
        </div>
    )
}
export default Presentation;