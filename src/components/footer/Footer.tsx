import { useNavigate } from 'react-router-dom';

import styles from './Footer.module.scss';
import Button from '../Button/Button';
import React from 'react';
import Reseau from '../Reseau/Reseau';

interface NavigatePageProps {
    type?: 'home' | 'cv' | 'realisation' | 'contact' | 'graphism';
}

const Footer: React.FC<NavigatePageProps> = ({ type }) => {
    const navigate = useNavigate();

    const getClassName = () => {
        if (type === 'home') return styles.containerButtonHome;
        if (type === 'contact') return styles.containerButtonContact;
        return styles.containerButton;
    };

    if (type === 'home') {
        return (
            <div className={getClassName()}>
                    <Reseau />
                    <Button
                        text="Suivant"
                        onClick={() => {
                            navigate('/graphism');
                        }}
                    />
            </div>
        );
    }
    if (type === 'graphism') {
        return (
            <div className={getClassName()}>
                    <Button text="Retour" onClick={() => { navigate('/'); }} />
                    <Reseau />
                    <Button text="Suivant" onClick={() => { navigate('/realisation'); }} />
                </div>
        )
    }
    if (type === 'realisation') {
        return (
            <div className={getClassName()}>
                    <Button text="Retour" onClick={() => { navigate('/graphism'); }} />
                    <Reseau />
                    <Button text="Suivant" onClick={() => { navigate('/cv'); }} />
                </div>
        );
    }
    if (type === 'cv') {
        return (
            <div className={getClassName()}>
                    <Button text="Retour" onClick={() => { navigate('/realisation'); }} />
                    <Reseau />
                    <Button text="Suivant" onClick={() => { navigate('/contact'); }} />
            </div>
        );
    }
    if (type === 'contact') {
        return (
            <div className={getClassName()}>
                <Reseau />
                    <Button text="Retour" onClick={() => {
                        navigate('/cv');
                    }} />
                </div>
        )
    }

    return (

        <div className={getClassName()}>
            <Button
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