
import Link from "next/link";
import { faBell, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function BotaoNotificacoesAdm(props: any) {
    return (   
        <div className="flex flex-col gap-4">
            <Link href= {props.Pagina}>
                <div className=" flex-row content-center items-start bg-white  hover:bg-slate-200 hover:text-teal-700 font-bold py-2 px-18 rounded ">
                    <FontAwesomeIcon icon={faBell} className="mr-2" /> 
                    {props.NomeBotao}
                </div>
            </Link>
        </div>
    )
}
