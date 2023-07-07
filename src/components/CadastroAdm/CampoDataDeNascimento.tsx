import { useState } from "react";

export default function CampoDataDeNascimento(props: any) {
  const [dataEvento, setDataEvento] = useState("");

  function handleDataEventoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDataEvento(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="data">Data de Nascimento
      {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        </label>
      <input
        type="date"
        name="data"
        id="data"
        placeholder="AAAA/MM/DD"
        required
        className="border w-32 border-gray-400 rounded-md p-2 mb-8"
        value={dataEvento}
        onChange={handleDataEventoChange}
      />
    </div>
  );
}
