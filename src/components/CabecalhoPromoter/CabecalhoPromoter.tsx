import {signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BotaoRelatorios from "./BotaoRelatorio";
import BotaoPerfil from "../AdmLogado/BotaoPerfilAdm"
import BotaoEventosAdm from "../AdmLogado/BotaoEventosAdm"

export default function CabecalhoPromoter(props: { isBotaoOcultoLogin?: boolean,  isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean}) {
    const { data: session } = useSession()
    const route = useRouter()
    return (
        <div className="flex flex-shrink-0 justify-center p-8 w-1/6 h-full fixed bg-white rounded-xl shadow">
          <div className="flex flex-col gap-4">
            <a href="/homepromoter">
              <img src="/cometa2.png" alt="Logo" width="200" height="200" />
            </a>
            <h2 className="font-bold text-xl">Olá {session?.user?.name}</h2>
            <div className="flex flex-col gap-4">
                    <BotaoEventosAdm Pagina="/homepromoter" NomeBotao="Eventos" icone= "faHome"/>
                    <BotaoRelatorios Pagina="/relatorio_evento_promoter" NomeBotao="Relatórios" icone= "faHome"/>
                    <BotaoPerfil Pagina="/perfilpromoter" NomeBotao="Perfil" icone= "faHome"/>
                    <button className={`
                            w-25 h-12
                            bg-teal-900 
                            text-white 
                            text-24 
                            rounded-xl`} role="button"
                        onClick={() => { signOut({ callbackUrl: 'http://localhost:3000/login' }) }}>Sair</button>
                    </div>    
                </div>
            </div>
        )
    
    }