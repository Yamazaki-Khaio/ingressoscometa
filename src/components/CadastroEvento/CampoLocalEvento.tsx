import { useState } from "react";

export default function CampoLocalEvento(props: any){
  const [localEvento, setLocalEvento] = useState("");
  function handleLocalEventoChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor do nome do
    setLocalEvento(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="local">Local</label>
      <input 
      id="localEvento"
      type="text"
      value={localEvento}
      onChange={handleLocalEventoChange}
        placeholder="Insira a descrição do local do evento" 
        className="border w-128 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  )
}