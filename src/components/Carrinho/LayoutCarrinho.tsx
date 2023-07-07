import Rodape from "../CabecalhoCadastro/Rodape";
import CabecalhoCliente from "../CabecalhoCliente/CabecalhoCliente";
import BotaoFinalizarCompra from "./BotaoFinalizarCompra";


export default function LayoutAdm(props: any){
    return(
        <div className="flex flex-col justify-between h-screen bg-gray-100 items-center">
            <CabecalhoCliente isBotaoOcultoLogin={props.exibirBotao === false} isBotaoOcultoCadastro={props.exibirBotao2 === false} isBotaoOcultoEvento = {props.exibirBotao3 === false} />
            <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
            {props.pagina}
            Total: R${0}
            <BotaoFinalizarCompra frase="Deseja confirmar sua compra?" caminho="/qrcode"/>
            <Rodape/>
        </div>
    )
}