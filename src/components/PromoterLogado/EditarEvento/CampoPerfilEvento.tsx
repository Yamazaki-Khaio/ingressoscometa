import { useState } from "react";

export default function CampoPerfilEvento(props: any){
  const [perfil, setPerfil] = useState("");

  const handlePerfilChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerfil(event.target.value);
  }

    return(
      <div className="flex flex-col gap-4">
        <label htmlFor="perfil">Perfil</label>
        <select
          value={perfil}
          id="perfil"
          onChange={handlePerfilChange}
          className="border w-64 border-gray-400 rounded-md p-2 mb-8"
          placeholder="Insira o perfil do evento" 
          >
          <option value="" disabled>
            Selecione o perfil
          </option>
          
          <option value="GRATIS">Gratis</option>
          <option value="MEIA">Meia</option>
          <option value="INTEIRA">Inteira</option>
        </select>
      </div>
    );
  
}