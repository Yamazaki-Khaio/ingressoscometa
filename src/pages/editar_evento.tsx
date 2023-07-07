import Layout from "@/components/CabecalhoPromoter/LayoutPromoter";
import {useSession} from 'next-auth/react'
import NaoUtorizado from "@/components/naoAutorizado";
import EditarEvento from "@/components/PromoterLogado/EditarEvento/EditarEvento";
import { useRouter } from "next/router";
export default function cadastro(){
    const { data: session } = useSession()
    const router = useRouter()
    console.log(router.query)
    
    if(session&&session?.user.tipo==='2'){
        return(
            <div>
                <Layout pagina={<EditarEvento id={router.query['id']} />} />
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