import React, { useEffect, useState } from 'react'
import Layout from "@/components/CabecalhoCadastro/layout"
import LayoutCarrinho from "@/components/Carrinho/LayoutCarrinho"
import ListaEventosCarrinho from '@/components/Carrinho/ListaEventosCarrinho'
import NaoUtorizado from "@/components/naoAutorizado";
import { useSession } from 'next-auth/react'


export default function Carrinho() {
    
    const { data: session } = useSession()

    if(session&&session.user.tipo==='1'){
        return (
            <div>
                <LayoutCarrinho pagina={<ListaEventosCarrinho id = {session?.user.id}/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false} exibirBotao4={true} />
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