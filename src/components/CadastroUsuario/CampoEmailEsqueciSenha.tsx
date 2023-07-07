import { useState } from "react";
import Botao from "../CabecalhoCadastro/botao";

export default function CampoEmailEsqueciSenha(props: any){
  const [email, setEmail] = useState('');

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return(
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <input 
          type="email" 
          name="email" 
          id="email" 
          maxLength={30} 
          placeholder="Insira seu e-mail" 
          required 
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
          className="border w-64 border-gray-400 rounded-md p-2 mb-8"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </div>
  )
}
