import LayoutAdm from "@/components/AdmLogado/LayoutAdm"
import PerfilAdm from "@/components/PerfilAdm/PerfilAdm"
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";

export default function perfiladm(props:any){
    const { data: session } = useSession()
    if(session&&session.user.tipo==='3'){
        return(
            <LayoutAdm pagina={<PerfilAdm/>}/>
        ) 
    }else{
        return(
            <div>
                <NaoUtorizado/>
            </div>
        )
    }
      
}