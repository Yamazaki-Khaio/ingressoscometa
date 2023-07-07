import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";

export default function CampoSetor() {

  return (
    <div>
      <ul>
        <li className="flex items-center mb-4">
          <FontAwesomeIcon icon={faChartPie} className="mr-2 text-xs" />{" "}
          <span className="text-xs">Setor</span>
        </li>
      </ul>
    </div>
  );
}
