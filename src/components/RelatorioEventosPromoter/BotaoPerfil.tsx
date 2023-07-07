import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faChartBar, faUser } from "@fortawesome/free-solid-svg-icons";

export function BotaoPerfil() {
  return (
    <div>
      <button
        className={`
          flex items-center
          bg-transparent
          text-black
          text-28
          rounded-3xl
          transition-all duration-300
          hover:text-green-600
          h-14
        `}
      >
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Perfil
      </button>
    </div>
  );
}
