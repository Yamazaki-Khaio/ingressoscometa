import { useState } from "react";

export default function CampoDataEvento(props: any) {
  const [dataEvento, setDataEvento] = useState("");
  function handleDataEventoChange(event: React.ChangeEvent<HTMLInputElement>){//Modifica o valor do nome do evento
    setDataEvento(event.target.value);
  }
  return (
    <div className="flex flex-col gap-1">
    <label htmlFor="data">
      Data do evento:
      {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
    </label>
    <input
      value={dataEvento}
      type="date"
      name="data"
      id="data"
      placeholder="  /  /  "
      required
      className="border w-36 border-gray-400 rounded-md p-2 mb-8"
      onChange={handleDataEventoChange}
    />
  </div>
  
  );
}
