import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";
import HomePromoter from "@/components/PromoterLogado/HomePromoter";
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";

export default function homepromoter(){
    const { data: session } = useSession()

    if(session&&session.user.tipo==='2'){
        return (
            <div>
                <Layout pagina={<HomePromoter/>} />
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