import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function RuaCadastro(props: any){
    const [editando, setEditando] = useState(false);
    const [rua, setRua] = useState(props.rua);

    function handleEditar() {
        setEditando(true);
      }
    
    useEffect(() => {
    if (!editando) {
        setRua(props.rua); // Atualiza o valor do nome apenas se não estiver editando
    }
    }, [props.rua, editando]);
      

    function handleRuaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRua(event.target.value);
    }

    return(
        <>
        <label htmlFor="rua">
                Rua:
                {props.optional ? (
                <span className="text-red-600 text-bold">*</span>
                ) : null}
        </label>
        <div className="flex">
            <input 
                type="text" 
                name="rua" 
                id="rua" 
                maxLength={50} 
                placeholder="Insira sua rua" 
                disabled={!editando}
                required 
                onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
                }}
                className="border w-64 border-gray-400 rounded-md p-2 mb-8"
                value={rua}
                onChange={handleRuaChange}
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