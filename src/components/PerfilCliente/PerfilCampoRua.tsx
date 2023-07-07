import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function PerfilCampoRua(props: any){
    const [rua, setRua] = useState(props.rua);
    const [editando, setEditando] = useState(false); // Estado de edição

    function handleRuaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRua(event.target.value);
    }

    function handleEditar() {
        setEditando(true); // Habilita a edição ao clicar no botão "Editar"
        setRua("")
      }
      useEffect(() => {
        if (!editando) {
            setRua(props.rua); // Atualiza o valor do nome apenas se não estiver editando
        }
      }, [props.rua, editando]);

    return(
        <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="rua">Rua
        </label >
        <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
            <input
                type="text"
                name="rua"
                id="rua"
                maxLength={50}
                placeholder="Insira o rua"
                required
                disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
                onInvalid={(e) => {
                    e.preventDefault();
                    alert("Algo deu errado. Tente novamente.");
                } }
                value={rua}
                onChange={handleRuaChange}
                 />
            <span className="input-group-btn p-4">
                <button
                    type="button"
                    className="btn btn-default"
                    onClick={handleEditar}
                >
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        size="lg" />
                </button>
            </span>
        </div></>
        
    )
}