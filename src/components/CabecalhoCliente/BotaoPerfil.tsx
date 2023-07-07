import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function BotaoPerfil() {
  return (
    <div>
      <button
        className={`
          flex items-center
          bg-transparent
          text-black
          text-28 // Aumentando o tamanho do ícone
          rounded-3xl
          transition-all duration-300
          hover:text-green-600
          h-14 // Aumentando a altura do botão
        `}
      >
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Perfil
      </button>
    </div>
  );
}
