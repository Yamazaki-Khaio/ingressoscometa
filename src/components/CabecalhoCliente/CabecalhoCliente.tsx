import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BotaoCarrinho from "./BotaoCarrinho";
import BotaoIngressos from "./BotaoIngressos";
import BotaoEventos from "./BotaoEventos";
import BotaoPerfil from "./BotaoPerfil";

export default function CabecalhoCliente(props: { isBotaoOcultoLogin?: boolean, isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean }) {
    const { data: session } = useSession()
    const route = useRouter()
    function formatarNome(nome: string | null | undefined): string {
        if (nome == null) {
            return ''; // ou faça algo adequado para tratar o valor nulo ou indefinido
        }
    
        const nomesSeparados = nome.toLowerCase().split(' ');
        const nomesFormatados = nomesSeparados.map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1));
        return nomesFormatados.join(' ');
    }

    return (
        <div className="flex items-center justify-between p-8 w-screen h-40 bg-white">
            <div className="flex items-center gap-4">
                <a href="/">
                    <img src="/cometa2.png" alt="Logo" width="200" height="200" />
                </a>

            </div>
                <h2 className='text-3xl font-black'>Olá, {formatarNome(session?.user?.name)}</h2>
            <div className="flex gap-7">
            
                <a href="/carrinho"> <BotaoCarrinho />
                </a>
                <a href="/clienteIngressos"><BotaoIngressos /></a>

                <a href="/home"><BotaoEventos /></a>
                <a href="/perfil"> <BotaoPerfil /></a>
            </div>
            <button className={`
                        w-40 h-12
                        bg-teal-900 
                        text-white 
                        text-24 ml-6
                        rounded-xl`} role="button"
                        onClick={() => { signOut({ callbackUrl: 'http://localhost:3000/login' }) }} >Sair</button>

        </div>
    )
}
