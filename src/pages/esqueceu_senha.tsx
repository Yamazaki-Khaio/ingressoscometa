import React from 'react';
import Layout from '@/components/CabecalhoCadastro/layout';
import EsquecerSenha from '@/components/EsqueceuERedefinirSenha/EsquecerSenha';


export default function esqueceu_senha(){
    return(
        <div>
            <Layout pagina={<EsquecerSenha/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false} exibirBotao4={false}/>
            
        </div>
    )
}
  