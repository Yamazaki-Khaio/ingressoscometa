import React  from "react";
import { useState } from "react";


export default function CepCadastro(props: any){
    const [cep, setCep] = useState('');

    function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
        let cepValue = event.target.value.replace(/\D/g, '');
        cepValue = cepValue.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
        setCep(cepValue);
    }

    return(
        <div className="flex flex-col gap-1">
            <label htmlFor="cep">
                CEP:
                {props.optional ? (
                    <span className="text-red-600 text-bold">*</span>
                ) : null}
            </label>
            <input 
                type="text" 
                name="cep" 
                id="cep" 
                maxLength={9} 
                placeholder="Insira seu CEP" 
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={cep}
                onChange={handleCepChange}
            />
        </div>
        
    )
}