import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function CampoEstado(props: any) {
  const [editando, setEditando] = useState(false);
  const [estado, setEstado] = useState(props.estado);

  function handleEstadoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEstado(event.target.value);
  }

  function handleEditar() {
    setEditando(true);
  }

  useEffect(() => {
    if (!editando) {
      setEstado(props.estado); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.estado, editando]);


  return (
    <>
    <label htmlFor="estado">
        Estado:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
    </label>
    <div className="flex">
      <input
        type="text"
        name="estado"
        id="estado"
        placeholder="Insira seu estado"
        disabled={!editando}
        required
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={estado}
        onChange={handleEstadoChange}
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
