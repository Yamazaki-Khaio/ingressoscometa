import Relatorio_evento from "@/components/RelatorioEventosPromoter/RelatorioEvento";
import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";

import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";


export default function cadastro(){
    const { data: session } = useSession()
    if(session&&session.user.tipo==='2'){
        return(
            <div>
                <Layout pagina={<Relatorio_evento/>}/>
            </div>
        )
    }else{
        return(
            <div>
                <NaoUtorizado/>
            </div>
        )
    }
   
}