import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function ComplementoEnderecoCadastro(props: any){
    const [editando, setEditando] = useState(false);
    const [complemento, setComplemento] = useState(props.complemento);

    function handleEditar() {
        setEditando(true);
      }
    
    useEffect(() => {
    if (!editando) {
        setComplemento(props.complemento); // Atualiza o valor do nome apenas se não estiver editando
    }
    }, [props.complemento, editando]);
      

    function handleComplementoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setComplemento(event.target.value);
    }

    return(
        <>
        <label htmlFor="complemento">
                Complemento:
                {props.optional ? (
                <span className="text-red-600 text-bold">*</span>
                ) : null}
            </label>
            <div className="flex">
            <input 
                type="text" 
                name="complemento" 
                id="complemento" 
                maxLength={50} 
                placeholder="Insira o complemento" 
                disabled={!editando}
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={complemento}
                onChange={handleComplementoChange}
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