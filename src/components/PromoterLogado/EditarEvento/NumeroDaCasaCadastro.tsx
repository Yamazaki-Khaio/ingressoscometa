import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function NumeroDaCasaCadastro(props: any){
    const [editando, setEditando] = useState(false);
    const [numero, setNumero] = useState(props.numero);

    function handleEditar() {
        setEditando(true);
      }
    
    useEffect(() => {
    if (!editando) {
        setNumero(props.numero); // Atualiza o valor do nome apenas se não estiver editando
    }
    }, [props.numero, editando]);
      
    function handleNumeroChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumero(event.target.value);
    }

    return(
        <>
        <label htmlFor="numero">
                Número:
                {props.optional ? (
            <span className="text-red-600 text-bold">*</span>
            ) : null}
        </label>
        <div className="flex">    
            <input 
                type="text" 
                name="numero" 
                id="numero" 
                maxLength={20} 
                placeholder="Insira o número" 
                disabled={!editando}
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={numero}
                onChange={handleNumeroChange}
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