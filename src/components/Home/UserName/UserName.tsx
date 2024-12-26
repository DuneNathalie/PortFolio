import React from 'react';

import Styles from './UserName.module.scss';


const UserName: React.FC = () => {

    return (
        <div className={Styles.container}>
            <p>Nathalie Dune</p>
        </div>
    );
};
export default UserName;