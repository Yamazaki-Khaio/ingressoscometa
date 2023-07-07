import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"

export default function Layout(props: any){
    return(
        <div className="flex flex-col justify-between h-screen ">
            <Cabecalho isBotaoOcultoLogin={props.exibirBotao === false} isBotaoOcultoCadastro={props.exibirBotao2 === false} isBotaoOcultoEvento = {props.exibirBotao3 === false} isBotaoOcultoBackup = {props.exibirBotao4 === false}/> 
                {props.pagina}
            <Rodape/>
        </div>
    )
}