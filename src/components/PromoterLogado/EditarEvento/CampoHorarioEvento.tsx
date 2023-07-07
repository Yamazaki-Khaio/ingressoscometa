import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoHorarioEvento(props: any) {
  const [editando, setEditando] = useState(false);
  const [horarioEvento, setHorarioEvento] = useState(props.horarioEvento);
  
  function handleEditar() {
    setEditando(true);
  }

  useEffect(() => {
    if (!editando) {
      setHorarioEvento(props.horarioEvento); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.horarioEvento, editando]);

  const handleHorarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHorarioEvento(event.target.value);
  };

  return (
    <>
    <label htmlFor="horarioEvento">
        Horário:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
      </label>
    <div className="flex">
          <input
            id = "horarioEvento"
            type="time"
            placeholder="00:00"
            required
            disabled={!editando}
            value={horarioEvento}
            onChange={handleHorarioChange}
            className="border w-24 border-gray-400 rounded-md p-2 mb-8"
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
