import CampoHoraEData from "./CampoHoraEData";
import CampoIngresso from "./CampoIngresso";
import CampoLocal from "./CampoLocal";
import CampoPerfilDoIngresso from "./CampoPerfilDoIngresso";
import CampoSetor from "./CampoSetor";

export default function BlocoDadosIngresso() {
  return (
    <div
      className="flex items-center justify-start w-65 h-60 bg-white mx-auto relative"
      style={{
        marginTop: "-15vh", // Metade negativa da altura para centralizar verticalmente
        color: "black", // Definir a cor do texto como preto
        fontWeight: "bold", // Definir o peso da fonte como negrito
        paddingLeft: "1rem" // Adicionar um recuo à esquerda
      }}
    >
      <ul style={{ paddingLeft: "0" }}>
        <li>
          <CampoHoraEData />
        </li>
        <li>
          <CampoLocal />
        </li>
        <li>
          <CampoIngresso />
        </li>
        <li>
          <CampoPerfilDoIngresso />
        </li>
        <li>
          <CampoSetor />
        </li>
      </ul>
    </div>
  );
}
