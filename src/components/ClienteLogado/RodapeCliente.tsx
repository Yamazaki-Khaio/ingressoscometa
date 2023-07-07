import BotaoLogout from "./BotaoLogout"

export default function RodapeCliente(){
    return(
        <div>
            <div className="flex items-center justify-between p-8 w-screen h-32 bg-white ">
            <div>
                <h2>Compre seus ingressos aqui!</h2>
            </div>
            <div className="flex gap-6">
                <BotaoLogout/>
            </div>
        </div>
        </div>
    )
}