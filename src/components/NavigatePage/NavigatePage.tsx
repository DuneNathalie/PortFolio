import { useNavigate } from 'react-router-dom';

import styles from './NavigatePage.module.scss';
import Button from '../../components/Button/Button';
import React from 'react';

interface NavigatePageProps {
    type?: 'home' | 'cv' | 'realisation' | 'contact' | 'graphism';
}

const NavigatePage: React.FC<NavigatePageProps> = ({ type }) => {
    const navigate = useNavigate();

    const getClassName = () => {
        if (type === 'home') return styles.containerButtonHome;
        if (type === 'contact') return styles.containerButtonContact;
        return styles.containerButton;
    };

    if (type === 'home') {
        return (
            <div className={getClassName()}>
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
                <Button text="Suivant" onClick={() => { navigate('/realisation'); }} />
            </div>
        )
    }
    if (type === 'realisation') {
        return (
            <div className={getClassName()}>
                <Button text="Retour" onClick={() => { navigate('/graphism'); }} />
                <Button text="Suivant" onClick={() => { navigate('/cv'); }} />
            </div>
        );
    }
    if (type === 'cv') {
        return (
            <div className={getClassName()}>
                <Button text="Retour" onClick={() => { navigate('/realisation'); }} />
                <Button text="Suivant" onClick={() => { navigate('/contact'); }} />
            </div>
        );
    }
    if (type === 'contact') {
        return (
            <div className={getClassName()}>
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
            </div >
        );
    };
export default NavigatePage;