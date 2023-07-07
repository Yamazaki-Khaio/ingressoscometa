import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function PerfilNumeroCasa(props: any){
    const [numero, setNumero] = useState(props.numemroCasa);
    const [editando, setEditando] = useState(false); // Estado de edição


    function handleNumeroChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNumero(event.target.value);
    }

    function handleEditar() {
        setEditando(true); // Habilita a edição ao clicar no botão "Editar"
        setNumero("")
      }
      useEffect(() => {
        if (!editando) {
            setNumero(props.numemroCasa); // Atualiza o valor do nome apenas se não estiver editando
        }
      }, [props.numemroCasa, editando]);

    return(
        <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="numero">Número da Casa
        </label >
        <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
            <input
                type="text"
                name="numero"
                id="numero"
                disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
                maxLength={50}
                placeholder="Insira o numero"
                required
                onInvalid={(e) => {
                    e.preventDefault();
                    alert("Algo deu errado. Tente novamente.");
                } }
                value={numero}
                onChange={handleNumeroChange} />
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