import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoDataEvento(props: any) {
  const [editando, setEditando] = useState(false);
  const [dataEvento, setDataEvento] = useState(props.data);

  function handleEditar() {
    setEditando(true);
  }

  useEffect(() => {
    if (!editando) {
      setDataEvento(props.data); // Atualiza o valor da data apenas se não estiver editando
    }
  }, [props.data, editando]);

  function handleDataEventoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDataEvento(event.target.value);
  }

  return (
    <>
      <label htmlFor="data">
        Data do evento:
        {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}
      </label>
      <div className="flex">
        <input
          value={dataEvento}
          type="date"
          name="data"
          id="data"
          placeholder="  /  /  "
          disabled={!editando}
          required
          className="border w-36 border-gray-400 rounded-md p-2 mb-8"
          onChange={handleDataEventoChange}
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
