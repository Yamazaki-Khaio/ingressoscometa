import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function CepCadastro(props: any){
    const [editando, setEditando] = useState(false);
    const [cep, setCep] = useState(props.cep);

    function handleEditar() {
        setEditando(true);
    }

    useEffect(() => {
        if (!editando) {
          setCep(props.cep); // Atualiza o valor do nome apenas se não estiver editando
        }
      }, [props.cep, editando]);
      

    function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
        let cepValue = event.target.value.replace(/\D/g, '');
        cepValue = cepValue.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
        setCep(cepValue);
    }
    

    return(
        <>
        <label htmlFor="cep">
                CEP:
                {props.optional ? (
                <span className="text-red-600 text-bold">*</span>
                ) : null}
        </label>
        <div className="flex">
            <input 
                type="text" 
                name="cep" 
                id="cep" 
                maxLength={9} 
                placeholder="Insira seu CEP" 
                disabled={!editando}
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={cep}
                onChange={handleCepChange}
            />
            <span className="input-group-btn p-2">
                <button type="button" className="btn btn-default" onClick={handleEditar}>
                    <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
            </span>
        </div>
        </>
    )
}