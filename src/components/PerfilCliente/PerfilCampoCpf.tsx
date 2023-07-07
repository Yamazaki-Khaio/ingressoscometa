import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Botao from "../CabecalhoCadastro/botao";
import { useEffect, useState } from "react";

export default function PerfilCampoCpf(props: any){
  const [cpf, setCpf] = useState(props.cpf);

  function formatarCPF(cpf: string) {
    if (!cpf) return cpf;

    const cpfLimpo = cpf.replace(/\D/g, "");
    const cpfFormatado = cpfLimpo
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return cpfFormatado;
  }


  function handleCpfChange(event: React.ChangeEvent<HTMLInputElement>) {
    let cpfValue = event.target.value.replace(/\D/g, '');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfValue);
  }

  
  useEffect(() => {
    setCpf(formatarCPF(props.cpf)); // Atualiza o valor do cpf formatado quando a propriedade cpf é atualizada
  }, [props.cpf]);

  return(
    <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="cpf">Cpf
    </label >
    <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4 ">
        <input
            type="text"
            name="cpf"
            id="cpf"
            maxLength={14}
            placeholder="Insira o cpf"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={cpf}
            onChange={handleCpfChange} 
            disabled/>
    </div></>
      
  )
}
