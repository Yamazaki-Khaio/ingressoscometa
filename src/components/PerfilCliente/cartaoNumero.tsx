import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CampoNumeroCartao(props: any) {
  const [numeroCartao, setNumeroCartao] = useState(props.numero);
  const [editando, setEditando] = useState(false);

  function handleNumeroCartaoChange(event: React.ChangeEvent<HTMLInputElement>) {
    let numeroCartaoValue = event.target.value.replace(/\D/g, "");
    numeroCartaoValue = numeroCartaoValue.replace(/(\d{4})(\d{4})(\d{4})(\d{4})$/, '$1 $2 $3 $4');
    setNumeroCartao(numeroCartaoValue);
  }

  function handleEditar() {
    setEditando(true);
    setNumeroCartao("");
  }
  useEffect(() => {
    if (!editando) {
      setNumeroCartao(props.numero); // Atualiza o valor do nome apenas se não estiver editando
    }
  }, [props.numero, editando]);

  return (
    <>
      <div className={`input-group border w-64 border-gray-400 rounded-md bg-white ${editando ? 'editing' : ''}`}>
        <input
          type="text"
          name="numeroCartao"
          id="numeroCartao"
          disabled={!editando}
          maxLength={19}
          placeholder={!editando ? "Insira o número do cartão" : ""}
          required
          onInvalid={(e) => {
            e.preventDefault();
            alert("Algo deu errado. Tente novamente.");
          }}
          value={numeroCartao}
          onChange={handleNumeroCartaoChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={handleEditar}>
            <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          </button>
        </span>
      </div>
    </>
  );
}
