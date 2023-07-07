import Link from "next/link";

export default function BotaoConfirmarCompra(){

    return(
        <Link href={"/qrcode"}>
        <div>
            <input type="submit" value="            Confirmar" className={`
            
                    flex flex-col items-center justify-center
                     w-25 h-12  // diminuindo o comprimento do botão
                     bg-teal-900 
                     text-white 
                     text-24 
                     rounded-3xl  // aumentando o valor do border-radius
                     transition-all duration-300  // adicionando um efeito de transição
                     hover:bg-teal-800  // adicionando uma cor de fundo quando o botão é hoverado
                     active:bg-teal-700  // adicionando uma cor de fundo quando o botão é clicado
                `} />
         
        </div>
       </Link>
    )

}