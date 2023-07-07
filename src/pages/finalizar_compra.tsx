import Layout from "@/components/CabecalhoCadastro/layout";
import FinalizarCompra from "@/components/FinalizarCompra/FinalizarCompra";
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";

export default function finalizar(){
    const { data: session } = useSession()
    if(session&&session.user.tipo==='1'){
        return(
            <div>
                <Layout pagina={<FinalizarCompra/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false}/>
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