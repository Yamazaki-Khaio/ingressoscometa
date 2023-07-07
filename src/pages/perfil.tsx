import Layout from "@/components/CabecalhoCliente/layoutCliente";
import Perfil from "@/components/PerfilCliente/TelaPerfil";
import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";

export default function perfil(){
    
    const { data: session } = useSession()
    if(session&&session.user.tipo==='1'){
        return(
            <div>
                <Layout pagina={<Perfil/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false}/>
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