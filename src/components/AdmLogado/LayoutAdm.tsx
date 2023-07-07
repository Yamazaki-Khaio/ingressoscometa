import CabecalhoAdm from "./CabecalhoAdm"
import ListaEventosAdm from "./ListaEventosAdm"

export default function LayoutAdm(props: any) {
    return (
        <div className="flex justify-evenly">
            <div className="w-1/6">
                <CabecalhoAdm />
            </div>
            <div className="w-4/6">
                {props.pagina}
            </div>
                
            

        </div>

    )
}