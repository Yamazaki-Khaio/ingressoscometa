import React from 'react';
import Layout from '@/components/CabecalhoCadastro/layout';
import RedefinirSenha from '../components/EsqueceuERedefinirSenha/RedefinirSenha';


export default function redefinir_nova_senha(){
    return(
        <div>
            <Layout pagina={<RedefinirSenha/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false} exibirBotao4={false}/>
            
        </div>
    )
}
  