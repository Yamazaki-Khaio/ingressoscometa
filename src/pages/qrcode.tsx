import Layout from "@/components/CabecalhoCliente/layoutCliente";
import BlocoGeralQrCode from "@/components/QRCode/BlocoGeralQrCode";

import { useSession } from "next-auth/react";
import NaoUtorizado from "@/components/naoAutorizado";


export default function qrcode(){
    const { data: session } = useSession()
    if(session&&session.user.tipo==='1'){
        return(
            <div>
                <Layout/>
                <BlocoGeralQrCode/>
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