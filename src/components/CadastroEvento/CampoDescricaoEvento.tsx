import { useState } from "react";

export default function CampoDescricaoEvento(props: any){
  const [descricao, setDescricao] = useState(""); //Armazena o valor da descrição do evento
  function handleDescricaoChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor da descrição do evento
    setDescricao(event.target.value);
  }
  return(
    <div className="flex flex-col gap-1">
      <label htmlFor="descricao">
        Descrição:
        {props.optional ? (
          <span className="text-red-600 text-bold"> *</span>
        ) : null}
      </label>
      <input 
        id = "descricao"
        type = "text"
        placeholder="Insira a descrição do evento" 
        className="border w-128 border-gray-400 rounded-md p-2 mb-8"
        value = {descricao}
        onChange={handleDescricaoChange}
      />
    </div>
  )
}