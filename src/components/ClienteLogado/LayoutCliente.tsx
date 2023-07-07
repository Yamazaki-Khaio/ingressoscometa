import CabecalhoCliente from '../CabecalhoCliente/CabecalhoCliente'
import RodapeCliente from './RodapeCliente'

export default function LayoutCliente(props: any){
    return(
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <CabecalhoCliente isBotaoOcultoLogin={props.exibirBotao === false} isBotaoOcultoCadastro={props.exibirBotao2 === false} isBotaoOcultoEvento = {props.exibirBotao3 === false} /> 
                {props.pagina}
            <RodapeCliente/>
        </div>
    )
}