import { useState } from "react";

export default function CampoNomeCompleto(props: any) {
  const [nomeCompleto, setNomeCompleto] = useState("");

  function handleNomeCompletoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const regex = /^[a-zA-Z\s]+$/; // Regex para permitir apenas letras e espaços

    if (regex.test(inputValue)) {
      setNomeCompleto(inputValue);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="nomeCompleto">Nome Completo
      {props.optional ? (
          <span className="text-red-600 text-bold"> *</span>
        ) : null}</label>
      <input
        type="text"
        name="nomeCompleto"
        id="nomeCompleto"
        maxLength={30}
        placeholder="Insira nome completo"
        required
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={nomeCompleto}
        onChange={handleNomeCompletoChange}
      />
    </div>
  );
}
