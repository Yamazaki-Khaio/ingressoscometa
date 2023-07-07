import React, { useState } from "react";

export default function CampoEstado(props: any) {
  const [estado, setEstado] = useState('');

  function handleEstadoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEstado(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="estado">
        Estado:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
      </label>
      <input
        type="text"
        name="estado"
        id="estado"
        placeholder="Insira seu estado"
        required
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={estado}
        onChange={handleEstadoChange}
      />
    </div>
  );
}
