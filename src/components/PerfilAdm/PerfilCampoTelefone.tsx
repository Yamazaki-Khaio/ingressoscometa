import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";

export default function PerfilCampoTelefone(props: any) {
  const [telefone, setTelefone] = useState(props.telefone);
  const [editando, setEditando] = useState(false); // Estado de ediçãos
  function handleTelefoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    let telefoneValue = event.target.value.replace(/\D/g, '');
    telefoneValue = telefoneValue.replace(/(\d{5})(\d{1,4})$/, '$1-$2' )
    setTelefone(telefoneValue);
  }


  function handleEditar() {
    setEditando(true); // Habilita a edição ao clicar no botão "Editar"
    setTelefone("")
  }

  useEffect(() => {
    if (!editando) {
        setTelefone(props.telefone); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.telefone, editando]);



  return(
    <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="telefone">Telefone
    </label >
    <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
        <input
            type="text"
            name="telefone"
            id="telefone"
            disabled={!editando} // Define o estado de desabilitado com base na variável de estado "editando"
            maxLength={50}
            placeholder="Insira o telefone"
            required
            onInvalid={(e) => {
                e.preventDefault();
                alert("Algo deu errado. Tente novamente.");
            } }
            value={telefone}
            onChange={handleTelefoneChange} />
        <span className="input-group-btn p-4">
            <button
                type="button"
                className="btn btn-default"
                onClick={handleEditar}
            >
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="lg" />
            </button>
        </span>
    </div></>
    
)
}

