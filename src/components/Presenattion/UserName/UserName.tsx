import React from 'react';

import Styles from './UserName.module.scss';

const UserName: React.FC = () => {

    return (
        <div className={Styles.container}>
            <h1>Nathalie Dune</h1>
        </div>
    );
};
export default UserName;