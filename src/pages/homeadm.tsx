import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import HomeAdm from "@/components/AdmLogado/HomeAdm"
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";


export default function homeadm(){
    const { data: session } = useSession()
    if(session&&session.user.tipo==='3'){
        return (
            <div>
                <LayoutAdm pagina={<HomeAdm/>} />
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

