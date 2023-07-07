import Notificacao from "@/components/AdmLogado/Notificacao"
import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import iNotificacao from "./api/classes/iNotificacao"

//APENAS TESTE DO COMPONENTE

export default function notificacoes (){
    const links:iNotificacao[] = [{key:1 ,href:'/home',descricao:'Promoter novo adicionado na plataforma! Aguardando aprovação.'},
    {key:2 ,href:'/home',descricao:'Promoter novo adicionado na plataforma! Aguardando aprovação.'},
    {key:3 ,href:'/home',descricao:'Promoter novo adicionado na plataforma! Aguardando aprovação.'}]
    return(
        <div>
           <LayoutAdm pagina={<Notificacao notificacoes={links}/>}/>     
        </div>
    )
}