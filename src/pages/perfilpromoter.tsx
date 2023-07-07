import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";
import PerfilPromoter from "@/components/PerfilPromoter/TelaPerfilPromoter";
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";  

export default function perfilPromoter(){
    
    const { data: session } = useSession()
    if(session&&session.user.tipo==='2'){
        return (
            <div>   
                <Layout pagina={<PerfilPromoter/>} exibirBotao={true} exibirBotao2={false} exibirBotao3={false}/>
            </div>
        );
    }else{
        return(
            <div>
                <NaoUtorizado/>
            </div>
        )
    }

}