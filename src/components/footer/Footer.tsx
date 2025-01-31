import { useNavigate } from 'react-router-dom';

import styles from './Footer.module.scss';
import Button from '../button/Button';
import React from 'react';
import Reseau from '../reseau/Reseau';

interface FooterProps {
    type?: 'home' | 'cv' | 'realisation' | 'contact' | 'illustrator';
}

const Footer: React.FC<FooterProps> = ({ type }) => {
    const navigate = useNavigate();

    const getClassName = () => {
        if (type === 'home') return styles.containerButtonHome;
        if (type === 'cv') return styles.containerButtonCv;
        return styles.containerButton;
    };

    if (type === 'home') {
        return (
            <div className={getClassName()}>
                <div className={styles.element}>
                    <Reseau />
                </div>
                <div className={styles.element}>
                    <Button
                        type='nav'
                        text="Suivant"
                        onClick={() => {
                            navigate('/illustrator');
                        }}
                    />
                </div>
            </div>
        );
    }
    if (type === 'illustrator') {
        return (
            <div className={getClassName()}>
                <Button type='nav' text="Retour" onClick={() => { navigate('/'); }} />
                <Reseau />
                <Button type='nav' text="Suivant" onClick={() => { navigate('/realisation'); }} />
            </div>
        )
    }
    if (type === 'realisation') {
        return (
            <div className={getClassName()}>
                <Button type='nav' text="Retour" onClick={() => { navigate('/illustrator'); }} />
                <Reseau />
                <Button type='nav' text="Suivant" onClick={() => { navigate('/cv'); }} />
            </div>
        );
    }
    if (type === 'cv') {
        return (
            <div className={getClassName()}>
                <div className={styles.element}>
                    <Button type='nav' text="Retour" onClick={() => { navigate('/realisation'); }} />
                </div>
                <div className={styles.element}>
                    <Reseau />
                </div>
            </div>
        );
    }

    return (

        <div className={getClassName()}>
            <Button
                type="nav"
                text="Retour"
                onClick={() => {
                    navigate('/');
                }}
            />
            <Reseau />
        </div >
    );
};
export default Footer;