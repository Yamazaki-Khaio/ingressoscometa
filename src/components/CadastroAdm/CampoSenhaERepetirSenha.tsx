import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function RepetirSenha(props: any) {
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSenha(event.target.value);
  }

  function handleRepetirSenhaChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRepetirSenha(event.target.value);
  }

  function handleMostrarSenhaChange() {
    setMostrarSenha(!mostrarSenha);
  }

  function verificarSenhasIguais() {
    return senha === repetirSenha;
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="senha">Senha
      {props.optional ? (
          <span className="text-red-600 text-bold"> *</span>
        ) : null}
        </label>
      <div className="relative">
        <input
          type={mostrarSenha ? "text" : "password"}
          name="senha"
          placeholder="Insira sua senha"
          id="senha"
          className="border w-64 border-gray-400 rounded-md p-2 mb-2"
          value={senha}
          onChange={handleSenhaChange}
        />
        <button
          type="button"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
          onClick={handleMostrarSenhaChange}
        >
          <FontAwesomeIcon
            icon={mostrarSenha ? faEye : faEyeSlash}
            size="lg"
          />
        </button>
      </div>
      <label htmlFor="repetirSenha">Repetir Senha
      {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        </label>
      <div className="relative">
        <input
          type={mostrarSenha ? "text" : "password"}
          name="repetirSenha"
          placeholder="Repita sua senha"
          id="repetirSenha"
          className={`border w-64 border-gray-400 rounded-md p-2 mb-2 ${verificarSenhasIguais() ? '' : 'border-red-500'}`}
          value={repetirSenha}
          onChange={handleRepetirSenhaChange}
        />
        <button
          type="button"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
          onClick={handleMostrarSenhaChange}
        >
          <FontAwesomeIcon
            icon={mostrarSenha ? faEye : faEyeSlash}
            size="lg"
          />
        </button>
      </div>
      {!verificarSenhasIguais() && <p className="text-red-500">As senhas não coincidem</p>}
    </div>
  )
}
