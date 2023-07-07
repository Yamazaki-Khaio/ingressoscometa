import { signOut } from "next-auth/react"

export default function BotaoSair(){
    return(
        <div>
            <input type="button" onClick={() => {signOut({callbackUrl:"/login"})}} value="Sair" className={`
                     w-48 h-12  // diminuindo o comprimento do botão
                     bg-teal-900 
                     text-white 
                     text-24 
                     rounded-3xl  // aumentando o valor do border-radius
                     transition-all duration-300  // adicionando um efeito de transição
                     hover:bg-teal-800  // adicionando uma cor de fundo quando o botão é hoverado
                     active:bg-teal-700  // adicionando uma cor de fundo quando o botão é clicado
                `} />
                
         
        </div>
    )
}