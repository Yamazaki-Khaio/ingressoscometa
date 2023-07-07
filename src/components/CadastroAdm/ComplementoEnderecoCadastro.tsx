import React  from "react";
import { useState } from "react";


export default function ComplementoEnderecoCadastro(props: any){
    const [complemento, setComplemento] = useState('');

    function handleComplementoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setComplemento(event.target.value);
    }

    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="complemento">Complemento
            {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        </label>
            <input 
                type="text" 
                name="complemento" 
                id="complemento" 
                maxLength={50} 
                placeholder="Insira o complemento" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={complemento}
                onChange={handleComplementoChange}
            />
        </div>
        
    )
}