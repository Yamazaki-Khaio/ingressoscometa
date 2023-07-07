import BlocoImagem from "./BlocoImagem";
import BlocoDadosIngresso from "./BlocoDadosIngresso";
import BlocoBotaoPrintShare from "./BlocoBotaoPrintShare";
import BlocoQrCode from "./BlocoQRCode";

export default function BlocoGeralQrCode() {
  const handleImprimir = () => {
    window.print();
  };

  return (
    <div
      className="flex items-center justify-center w-4/5 h-screen bg-white mx-auto relative"
      style={{ height: "55vh", marginTop: "-65vh", flexDirection: "row-reverse" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 bg-black w-px"></div>
      <div className="absolute inset-1 left-3/4 top-40">
        <BlocoDadosIngresso />
      </div>
      <div className="absolute inset-1 left-3/4 top-40">
        <BlocoQrCode/>
      </div>
      <div className="absolute inset-1 left-3/4 top-40">
        <BlocoBotaoPrintShare />
      </div>
      <div className="absolute inset-0 z-15 right-1/2 top-40">
        <BlocoImagem />
      </div>
    </div>
  );
}
