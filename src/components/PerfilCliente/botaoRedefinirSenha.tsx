import Link from "next/link";

export default function BotaoRedefinirSenha(){

    return(
        <div className="justify-center">
            <Link href='/redefinir_nova_senha'>
            <input type="submit" value="Redefinir Senha" className={`
            w-48 h-12
            bg-green-500
            text-white
            text-24
            rounded-3xl
            transition-all duration-300
            hover:bg-green-600
            `} />

                </Link>
         
        </div>
    )

}