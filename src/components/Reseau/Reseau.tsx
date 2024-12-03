import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Styles from './Reseau.module.scss';

const Reseau: React.FC = () => {
    return (
        <div className={Styles.container}>
            <a href="https://github.com/DuneNathalie" rel="noopener noreferrer" aria-label="github">
                <FaGithub color="black" size="30px"/>
            </a>
            <a href="https://www.linkedin.com/in/nathalie-dune-1b4a09245" rel="noopener noreferrer" aria-label="Facebook">
                <FaLinkedin color="black" size="30px"/>
            </a>
        </div>
    );

}
export default Reseau;