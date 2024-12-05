import React from 'react';

import Styles from './Title.module.scss';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className={Styles.container}>
            <h1>{title}</h1>
        </div>
    );
}

export default Title;