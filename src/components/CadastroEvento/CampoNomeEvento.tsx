import { useState } from "react";

export default function CampoNomeEvento(props: any){
  const [nome, setNome] = useState(""); //Armazena o valor do nome do evento
  function handleNomeChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor do nome do evento
    setNome(event.target.value);
  }
  return(
    <div className="flex flex-col gap-1">
      <label htmlFor="nome">
        Nome:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
      </label>
      <input 
        id = "nome"
        type="text"
        placeholder="Insira o nome do evento" 
        className="border w-128 border-gray-400 rounded-md p-2 mb-8"
        value={nome}
        onChange={handleNomeChange}
      />
    </div>
  )
}