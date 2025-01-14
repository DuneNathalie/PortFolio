import React from 'react';

import Styles from './Button.module.scss';

interface ButtonProps {
    onClick?: () => void;
    text: string;
    style?:any;
    type: "download" | "nav";
}

const Button : React.FC<ButtonProps> = ({text = "Click me", onClick, type}) => {
    return (
        <button onClick={onClick} className={type === "download" ? Styles.download : Styles.nav}>{text}</button>
    )
}  

export default Button;