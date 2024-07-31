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


// import React, { useState } from "react";
// import './input-text.css'

// const InputText = (props) => {
//     // Estado para armazenar o valor do input
//     const [inputValue, setInputValue] = useState('');

//     // Função para atualizar o estado com o valor do input
//     const handleChange = (event) => {
//         setInputValue(event.target.value);
//     }

//     return (
//         <>
//             <input
//                 type="text"
//                 className="inputtext"
//                 placeholder="Write here"
//                 value={inputValue} // Define o valor do input como o estado atual
//                 onChange={handleChange}
//             />

//             <div className="container-text">
//                 <h1>{inputValue}</h1> {/* Mostra o valor atual do input no h1 */}
//             </div>
//         </>
//     );
// }

// export default InputText;
