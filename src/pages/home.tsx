import Layout from "@/components/CabecalhoCliente/layoutCliente";
import { signOut,useSession } from "next-auth/react";
import { json } from "stream/consumers";
import ClienteLogado from "@/components/ClienteLogado/ClienteLogado";
import PerfilPromoter from "@/components/PerfilPromoter/TelaPerfilPromoter";
import CabecalhoPromoter from "@/components/CabecalhoPromoter/CabecalhoPromoter";
import NaoUtorizado from "@/components/naoAutorizado";


export default function Home(){

    const { data: session } = useSession()
    if(session){
        const tipo = Number(session?.user.tipo)
        console.log(session?.user.tipo)
        if (session?.user.tipo === '1'){
            return(
                <div> 
                    <Layout pagina={<ClienteLogado/>}/>
                </div>
            )
        } else if (session?.user.tipo === '2'){
            window.location.replace("/homepromoter");
        } else {
            window.location.replace("/homeadm");
        }
    }
    

}