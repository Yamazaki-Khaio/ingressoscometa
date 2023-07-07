import Link from "next/link";

export default function BotaoConfirmar(props:any){

    return(
        <div className="p-2">
                <input type="submit" value="Confirmar" className={`
            
            w-48 h-12
            bg-teal-900
            text-white
            text-24
            rounded-3xl
            transition-all duration-300
            hover:bg-teal-800
            active:bg-teal-700
                `}onClick={props.onClick}/>

        </div>
    )

}