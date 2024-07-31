import React, { useState } from "react";
import './input-text.css'
import TextTittle from "../text-tittle/text-tittle";

const InputText = () =>{
    
    const [text, setText] = useState ("");

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    return(
        (
            <>
                <input type="text" className="inputtext" placeholder="Write herer" 
                onChange={handleChange}
                />
                <TextTittle tittle = {text} />
            </>
        )
    )

}

export default InputText;