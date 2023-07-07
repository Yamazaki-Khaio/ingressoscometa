import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoValidade(props: any) {
  const [validade, setValidade] = useState(props.validade);
  const [editando, setEditando] = useState(false);

  function handleValidadeChange(event: React.ChangeEvent<HTMLInputElement>) {
    let validadeValue = event.target.value.replace(/\D/g, "");
    validadeValue = validadeValue.replace(/(\d{2})(\d{2})$/, "$1/$2");
    setValidade(validadeValue);
  }

  function handleEditar() {
    setEditando(true);
    setValidade("");
  }
  useEffect(() => {
    if (!editando) {
      setValidade(props.validade); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.validade, editando]);


  return (
    <>
      <div className="flex items-center justify-start h-7 w-32 border border-gray-400 rounded bg-white">
        <input
          type="text"
          name="validade"
          id="validade"
          disabled={!editando}
          placeholder={editando ? "" : "MM/AA"}
          required
          maxLength={5}
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
          value={validade}
          onChange={handleValidadeChange}
          className={`outline-none text-center ${editando ? "w-20" : "w-full"}`}
        />
        <button type="button" className="ml-2" onClick={handleEditar}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="lg"
            className="text-black hover:text-gray-600"
          />
        </button>
      </div>
    </>
  );
}
