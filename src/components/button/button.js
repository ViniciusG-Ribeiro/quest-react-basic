import React from "react";
import './button.css';

const Button = (props) => {

    const ActiveLabel = () => {
        alert(`A label desse botão é ${props.label}`);
    }

    return(
        <button className="button-label" onClick={ActiveLabel}>Botão</button>
    )
}

export default Button;