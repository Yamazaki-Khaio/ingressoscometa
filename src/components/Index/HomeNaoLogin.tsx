import DestaqueSemana from "./DestaqueSemana";
import GrindEvento from "./GrindEvento";

export default function HomeNaoLogin(props:any ){
    return(
        <div className="bg-gray-100">
            <DestaqueSemana/>
            <GrindEvento/>   
        </div>
    )
}