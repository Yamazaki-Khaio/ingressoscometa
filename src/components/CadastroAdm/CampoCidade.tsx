import React, { useState } from "react";

export default function CampoCidade(props: any) {
  const [cidade, setCidade] = useState('');

  function handleCidadeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCidade(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="cidade">Cidade
      {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        </label>
      <input
        type="text"
        name="cidade"
        id="cidade"
        placeholder="Insira sua cidade"
        required
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={cidade}
        onChange={handleCidadeChange}
      />
    </div>
  );
}
