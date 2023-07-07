import Link from "next/link"
import BotaoRelatorioAdm from "./BotaoRelatorioAdm"
import BotaoEventosAdm from "./BotaoEventosAdm"
import BotaoPerfilAdm from "./BotaoPerfilAdm"
import BotaoNotificacoesAdm from "./BotaoNotificacoesAdm"
import BotaoPromotersAdm from "./BotaoPromotersAdm"
import BotaoBackup from "./BotaoBackup"
import BotaoSair from "../PerfilAdm/botaoSair"
import BotaoCadastrarAdm from "./BotaoCadastrarAdm"

export default function CabecalhoAdm(props: any) {
    
    return (
        <div className=" p-8 h-full fixed m-4 rounded-md bg-white shadow-2xl ">
            <div className="flex flex-col gap-4">
                <Link href="/homeadm">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200" />
                </Link>
                <BotaoEventosAdm Pagina="/homeadm" NomeBotao="Eventos" />
                <BotaoRelatorioAdm Pagina="/relatoriosadm" NomeBotao="Relatórios" />
                <BotaoPerfilAdm Pagina="/perfiladm" NomeBotao="Perfil" />
                <BotaoNotificacoesAdm Pagina="/notificacoes" NomeBotao="Notificações" />
                <BotaoPromotersAdm Pagina="/promotores" NomeBotao="Promoters"/>
                <BotaoCadastrarAdm Pagina="/cadastroadm" NomeBotao="Cadastrar administrador"/>
                <BotaoBackup Pagina="/api/backup" NomeBotao="Backup"/>
                <BotaoSair/>
            </div>
            
        </div>
    )
}