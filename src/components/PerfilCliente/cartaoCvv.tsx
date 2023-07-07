import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoCvv(props: any) {
  const [cvv, setCvv] = useState(props.cvv);
  const [editando, setEditando] = useState(false);

  function handleCvvChange(event: React.ChangeEvent<HTMLInputElement>) {
    let cvvValue = event.target.value.replace(/\D/g, "");
    setCvv(cvvValue);
  }

  function handleEditar() {
    setEditando(true);
    setCvv("");
  }
  useEffect(() => {
    if (!editando) {
      setCvv(props.cvv); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.cvv, editando]);

  return (
    <>
      <div className="flex items-center border w-20 border-gray-400 rounded-md bg-white">
        <input
          type="text"
          name="cvv"
          id="cvv"
          disabled={!editando}
          maxLength={3}
          placeholder={editando ? "" : "CVV"}
          required
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
          value={cvv}
          onChange={handleCvvChange}
          className={`flex-grow outline-none text-center ${editando ? 'w-10' : 'w-full'}`}
        />
        <button type="button" className="btn btn-default" onClick={handleEditar}>
          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
        </button>
      </div>
    </>
  );
}
