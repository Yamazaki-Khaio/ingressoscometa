import Layout from "@/components/CabecalhoCadastro/layout";
import Login from "@/components/Login";

export default function login(){
    return(
        <div>
            <Layout pagina={<Login/>} exibirBotao={false} exibirBotao2={true} exibirBotao3={false} exibirBotao4={false}/>
        </div>
    )
}