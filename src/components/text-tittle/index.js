import React from "react";
import './index.css'

const TextTittle = (props) =>{

    return <div className="container-text">
            <h1 style={{color: props.color}} >{props.tittle}</h1>
        </div>
}

TextTittle.defaultProps = {
    tittle: 'texto dafault',
    color: 'orange',
};

export default TextTittle;