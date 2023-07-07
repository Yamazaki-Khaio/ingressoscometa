import React  from "react";
import { useState } from "react";


export default function RuaCadastro(props: any){
    const [rua, setRua] = useState('');

    function handleRuaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRua(event.target.value);
    }

    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="rua">Rua
            {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        </label>
            <input 
                type="text" 
                name="rua" 
                id="rua" 
                maxLength={50} 
                placeholder="Insira sua rua" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={rua}
                onChange={handleRuaChange}
            />
        </div>
        
    )
}