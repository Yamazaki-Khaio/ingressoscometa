import { useState } from "react";

export default function CampoNomeEvento(props: any){
  const [local, setLocal] = useState('');

  function handleLocalChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocal(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="local">Local</label>
      <input 
        type="local" 
        name="local" 
        id="local" 
        placeholder="Insira o local do evento" 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={local}
        onChange={handleLocalChange}
      />
    </div>
  )
}