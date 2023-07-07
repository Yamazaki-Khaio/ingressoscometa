import Botao from "../CabecalhoCadastro/botao";
import { useState } from "react";

export default function CampoCpf(props: any){
  const [cpf, setCpf] = useState('');


  function handleCpfChange(event: React.ChangeEvent<HTMLInputElement>) {
    let cpfValue = event.target.value.replace(/\D/g, '');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfValue);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="cpf">CPF 
      {props.optional ? (
          <span className="text-red-600 text-bold"> *</span>
        ) : null}</label>
      <input 
        type="text" 
        maxLength={14} 
        name="Cpf" 
        id="cpf" 
        placeholder="Insira apenas números" 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={cpf}
        onChange={handleCpfChange}
        required 
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        />
    </div>
  )
}

