import Sessao from "@/components/sessao";
import IngressosAdquiridos from '../components/IngressosCliente/IngressosAdquiridos';
import Layout from "@/components/CabecalhoCliente/layoutCliente";
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";

export default function clienteIngressos(){
    
    const { data: session } = useSession()
    if(session&&session.user.tipo==='1'){
        return(
            <div>
                <Layout pagina={<IngressosAdquiridos/>} />
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