import React from 'react';

import Styles from './Preambule.module.scss';

interface PreambuleProps {
    text:string;
}

const Preambule: React.FC<PreambuleProps> = ({text}) => {
    return (
        <div className={Styles.container}>
           <p>{text}</p>
        </div>
    )
}
export default Preambule;