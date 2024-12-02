import React from 'react';
import './Button.module.scss';

interface ButtonProps {
    onClick?: () => void;
    text: string
}

const Button : React.FC<ButtonProps> = ({text = "Click me", onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}  

export default Button;