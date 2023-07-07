import React  from "react";
import { useState } from "react";


export default function NumeroDaCasaCadastro(props: any){
    const [numero, setNumero] = useState('');


    function handleNumeroChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumero(event.target.value);
    }

    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="numero">Número
            {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        </label>
            <input 
                type="text" 
                name="numero" 
                id="numero" 
                maxLength={20} 
                placeholder="Insira o número" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={numero}
                onChange={handleNumeroChange}
            />
        </div>
        
    )
}