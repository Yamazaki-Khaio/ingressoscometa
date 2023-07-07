import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect }  from "react";
import { useState } from "react";


export default function PerfilCampoCep(props: any){
    const [cep, setCep] = useState(props.cep);
    const [editando, setEditando] = useState(false); // Estado de edição

    function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
        let cepValue = event.target.value.replace(/\D/g, '');
        cepValue = cepValue.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
        setCep(cepValue);
    }

    function handleEditar() {
        setEditando(true); // Habilita a edição ao clicar no botão "Editar"
        setCep("")
      }
      useEffect(() => {
        if (!editando) {
            setCep(props.cep); // Atualiza o valor do nome apenas se não estiver editando
        }
      }, [props.cep, editando]);
    
    return(
        <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="cep">Cep
        </label >
        <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
            <input
                type="text"
                name="cep"
                id="cep"
                maxLength={9}
                disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
                placeholder="Insira o cep"
                required
                onInvalid={(e) => {
                    e.preventDefault();
                    alert("Algo deu errado. Tente novamente.");
                } }
                value={cep}
                onChange={handleCepChange} />
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