import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function CampoSenha(props: any){
    // Define dois estados iniciais para o componente usando o hook `useState`
    const [senha, setSenha] = useState(''); // Armazena o valor da senha
    const [mostrarSenha, setMostrarSenha] = useState(false); // Armazena o estado da opção de mostrar/ocultar a senha

    // Define uma função para lidar com a mudança de valor no campo de senha
    function handleSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value); // Atualiza o valor da senha no estado do componente
    }

    // Define uma função para lidar com o clique no botão de mostrar/ocultar a senha
    function handleMostrarSenhaChange() {
        setMostrarSenha(!mostrarSenha); // Alterna o estado da opção de mostrar/ocultar a senha
    }

    // Renderiza o componente
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="senha">Senha</label>
            <div className="relative">
                <input 
                    // Define o tipo do campo de senha com base no estado da opção de mostrar/ocultar a senha
                    type={mostrarSenha ? "text" : "password"}
                    name="senha" 
                    placeholder="Insira Sua senha"  
                    id="senha" 
                    className="border w-64 border-gray-400 rounded-md p-2 mb-2"
                    onChange={handleSenhaChange} // Define a função que será executada quando o valor do campo for alterado
                />
                <button 
                    type="button"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2" 
                    onClick={handleMostrarSenhaChange} // Define a função que será executada quando o botão for clicado
                >
                    <FontAwesomeIcon 
                        icon={mostrarSenha ? faEye : faEyeSlash} // Define qual ícone será exibido com base no estado da opção de mostrar/ocultar a senha
                        size="lg"
                    />
                </button>
            </div>
        </div>
    )
}
