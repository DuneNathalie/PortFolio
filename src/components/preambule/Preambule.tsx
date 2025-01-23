import React from 'react';

import Styles from './Preambule.module.scss';

interface PreambuleProps {
    text:string;
}

const Preambule: React.FC<PreambuleProps> = ({text}) => {
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
           <p>{formatText(text)}</p>
        </div>
    )
}
export default Preambule;