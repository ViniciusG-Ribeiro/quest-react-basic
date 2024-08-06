import React from "react";
import './index.css';

const Button = (props) => {

    return <button className="button-label" onClick={() => alert(`A label desse botão é ${props.label}`)}>Botão</button>
    
}

export default Button;