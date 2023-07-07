import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import CadastroAdm from "@/components/CadastroAdm/Cadastro";

export default function cadastro(){
    return(
        <div>
            <LayoutAdm pagina={<CadastroAdm/>} exibirBotao={true} exibirBotao2={false} exibirBotao3={false} exibirBotao4={false}/>
        </div>
    )
}