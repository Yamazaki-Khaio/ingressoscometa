import QRCodeConfirmacao from "./QRCode";
export default function BlocoQrCode() {
  return (
    <div
      className="flex items-center justify-center w-60 h-60 bg-white mx-auto relative"
      style={{
        right: "41.5vh",
        marginTop: "-15vh", // Metade negativa da altura para centralizar verticalmente
        color: "black", // Definir a cor do texto como preto
        fontWeight: "bold", // Definir o peso da fonte como negrito
        border: "2px solid black" // Adicionar uma borda preta de 2px de espessura
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <QRCodeConfirmacao/>
      </span>
    </div>
  );
}
