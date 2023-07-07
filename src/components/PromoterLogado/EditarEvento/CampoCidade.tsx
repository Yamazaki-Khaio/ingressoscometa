import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function CampoCidade(props: any) {
  const [editando, setEditando] = useState(false);
  const [cidade, setCidade] = useState(props.cidade);

  function handleEditar() {
    setEditando(true);
  }

  useEffect(() => {
    if (!editando) {
      setCidade(props.cidade); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.cidade, editando]);
  

  function handleCidadeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCidade(event.target.value);
  }

  return (
    <>
    <label htmlFor="cidade">
        Cidade:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
          ) : null}
    </label>
    <div className="flex">
      <input
        type="text"
        name="cidade"
        id="cidade"
        placeholder="Insira sua cidade"
        disabled={!editando}
        required
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={cidade}
        onChange={handleCidadeChange}
      />
      <span className="input-group-btn p-2">
          <button type="button" className="btn btn-default" onClick={handleEditar}>
            <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          </button>
        </span>
    </div>
    </>
  );
}
