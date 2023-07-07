import Link from "next/link";
import Botao from "./botao";
import Image from 'next/image'

export default function Cabecalho(props: { isBotaoOcultoLogin?: boolean,  isBotaoOcultoCadastro?: boolean, isBotaoOcultoEvento?: boolean, isBotaoOcultoBackup?: boolean}) {

    return(
        <div className="flex items-center justify-between p-8 w-screen h-32 bg-teal-300">
            <div className="flex items-center gap-4">
                <Link href="/">
                    <Image src="/cometa2.png" alt="Logo" width="200" height="200"/>
                </Link>
                <h2>Compre seus ingressos aqui!</h2>  
            </div>
            <div className="flex gap-4">
                <Botao href="/login" NomeBotao="Login" oculto={props.isBotaoOcultoLogin} />
                <Botao href="/cadastro" NomeBotao="Cadastro" oculto={props.isBotaoOcultoCadastro} />
                <Botao href="/cadastro_evento" NomeBotao="Novo Evento" oculto={props.isBotaoOcultoEvento} />
                <Botao href="/backup" NomeBotao="Backup" oculto={props.isBotaoOcultoBackup} />
            </div>    
        </div>
    )
}
