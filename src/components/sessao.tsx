import { signOut, useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";



export default function Sessao() {
    const { data: session } = useSession()
    const route = useRouter()

    if (session) {
        return (
            console.log("Você está logado")
        )
    }
    else {
        return (
            <div>
                <h1>Você não está logado</h1>
            </div>
        )
    }

}