import CabecalhoPromoter from "./CabecalhoPromoter"

export default function Layout(props: any){
    return(
        <div className="flex flex-col justify-between h-screen ">
            <CabecalhoPromoter/> 
                {props.pagina}
        </div>
    )
}