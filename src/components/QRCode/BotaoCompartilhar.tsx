import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

export default function BotaoCompartilhar() {
  return (
    <div>
      <button
        className={`
          flex items-center
          bg-transparent
          text-black
          text-28 // Aumentando o tamanho do ícone
          rounded-full // Alterando para formato circular
          transition-all duration-300
          hover:text-green-600
          h-14 // Aumentando a altura do botão
        `}
      >
        <FontAwesomeIcon icon={faShareAlt} />
      </button>
    </div>
  );
}
