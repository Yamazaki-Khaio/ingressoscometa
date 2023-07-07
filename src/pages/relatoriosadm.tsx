import HomeAdm from "@/components/AdmLogado/HomeAdm"
import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import RelatoriosAdm from "@/components/AdmLogado/RelatoriosAdm"
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";

export default function relatoriosadm(props: any) {
    const { data: session } = useSession()
    if(session&&session.user.tipo==='3'){
        return (
            <div>
                <LayoutAdm pagina={<RelatoriosAdm/>} />
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
