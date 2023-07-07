import Botao from "./botao";

export default function BotaoNovoEvento(props: any){
    return(
            <div className="flex gap-4">
                <Botao href="/cadastro_evento" NomeBotao="Novo Evento"/>
            </div>
    )
}