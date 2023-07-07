import Layout from "@/components/CabecalhoCadastro/layout"
import HomeNaoLogin  from "@/components/Index/HomeNaoLogin"
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

export default function Home(){
    const { data: session } = useSession()
    if(session){
       const router = useRouter()
       router.push('/home')
    }else{
        return (
            <div>
                <Layout pagina={<HomeNaoLogin/>} exibirBotao={true} exibirBotao2={true} exibirBotao3={false} exibirBotao4={false} />
            </div>       
        )
    }

}