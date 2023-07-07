import { useState } from "react";

export default function CampoHorarioEvento(props: any) {
  const [horarioEvento, setHorarioEvento] = useState("");

  const handleHorarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHorarioEvento(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="horarioEvento">
        Horário:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
        
      </label>
      <input
        id = "horarioEvento"
        type="time"
        placeholder="00:00"
        value={horarioEvento}
        onChange={handleHorarioChange}
        className="border w-24 border-gray-400 rounded-md p-2 mb-8"
      />
    </div>
  );
}
