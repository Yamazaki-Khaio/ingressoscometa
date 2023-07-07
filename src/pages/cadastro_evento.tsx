import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";
import CadastroEvento from "@/components/CadastroEvento/Cadastro_Evento";
import {useSession} from 'next-auth/react'
import NaoUtorizado from "@/components/naoAutorizado";
export default function cadastro(){
    const { data: session } = useSession()

    if(session&&session?.user.tipo==='2'){
        return(
            <div>
                <Layout pagina={<CadastroEvento/>} />
            </div>
        )
    }else{
        
        return(
            <div>
                <Layout pagina={<NaoUtorizado/>} />
            </div>
        )
    }
    
}