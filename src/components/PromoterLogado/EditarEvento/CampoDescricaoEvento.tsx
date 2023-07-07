import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoDescricaoEvento(props: any){
  const [editando, setEditando] = useState(false);
  const [descricao, setDescricao] = useState(props.descricao); //Armazena o valor da descrição do evento
  function handleDescricaoChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor da descrição do evento
    setDescricao(event.target.value);
  }

  function handleEditar() {
    setEditando(true);
  }

  useEffect(() => {
    if (!editando) {
      setDescricao(props.descricao); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.descricao, editando]);


  return(
    <>
    <label htmlFor="descricao">
        Descrição:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        
      </label>
    <div className="flex">
      <input 
        id = "descricao"
        type = "text"
        placeholder="Insira a descrição do evento" 
        disabled={!editando}
        className="border w-128 border-gray-400 rounded-md p-2 mb-8"
        value = {descricao}
        onChange={handleDescricaoChange}
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