import CabecalhoCliente from "../CabecalhoCliente/CabecalhoCliente";
import Rodape from "../CabecalhoCadastro/Rodape";
import InformacoesCompra from "./InformacoesCompra";

export default function LayoutConfirmacaoCompra(props: any){
    return(
        <div className="flex flex-col justify-between h-screen bg-gray-100 items-center">
            <CabecalhoCliente isBotaoOcultoLogin={props.exibirBotao === false} isBotaoOcultoCadastro={props.exibirBotao2 === false} isBotaoOcultoEvento = {props.exibirBotao3 === false} />
            <InformacoesCompra/>
            <Rodape/>
        </div>
    )
}