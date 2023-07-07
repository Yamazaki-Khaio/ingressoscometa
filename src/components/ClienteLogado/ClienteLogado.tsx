import ListaEventosCliente from "./ListaEventosCliente";
import Sessao from "@/components/sessao";

export default function ClienteLogado(){
    return(
        <div>
            <Sessao/>
            <ListaEventosCliente/>
        </div>
    )
}