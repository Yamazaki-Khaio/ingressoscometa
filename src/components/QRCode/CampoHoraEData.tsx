import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function CampoHoraEData() {
  return (
    <div>
      <ul>
        <li className="flex items-center mb-4">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-xs" />{" "}
          <span className="text-xs">Data e hora</span>
        </li>
      </ul>
    </div>
  );
}
