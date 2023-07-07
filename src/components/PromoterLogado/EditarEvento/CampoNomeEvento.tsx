import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoNomeEvento(props: any){
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(props.nome); //Armazena o valor do nome do evento
  function handleNomeChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor do nome do evento
    setNome(event.target.value);
  }

  function handleEditar() {
    setEditando(true);
  }

  useEffect(() => {
    if (!editando) {
      setNome(props.nome); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.nome, editando]);

  return(
    <>
      <label htmlFor="nome">
        Nome:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
      </label>
      <div className="flex">
      <input 
        id = "nome"
        type="text"
        placeholder="Insira o nome do evento" 
        disabled={!editando}
        className="border w-128 border-gray-400 rounded-md p-2 mb-8"
        value={nome}
        onChange={handleNomeChange}
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