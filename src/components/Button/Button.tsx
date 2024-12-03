import React from 'react';
import './Button.module.scss';

interface ButtonProps {
    onClick?: () => void;
    text: string;
    style?:any;
}

const Button : React.FC<ButtonProps> = ({text = "Click me", onClick,style}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}  

export default Button;