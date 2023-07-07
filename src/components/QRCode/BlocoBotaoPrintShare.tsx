import BotaoCompartilhar from "./BotaoCompartilhar";
import BotaoImpressora from "./BotaoImpressora";

export default function BlocoBotaoPrintShare() {
    const handleImprimir = () => {
        window.print();
    };
    return (
      <div
        className="flex items-center justify-start w-20 h-7 bg-white mx-auto relative"
        style={{
          top: "24vh", // Movendo o bloco para baixo
          left: "14vh",
          color: "black", // Definir a cor do texto como preto
          fontWeight: "bold", // Definir o peso da fonte como negrito
          paddingLeft: "1rem" // Adicionar um recuo à esquerda
        }}
      >
      <div className="absolute right-1 bottom--2 flex justify-between gap-8">
        <BotaoCompartilhar />
        <BotaoImpressora onClick={handleImprimir} />
      </div>
      </div>
    );
  }
  