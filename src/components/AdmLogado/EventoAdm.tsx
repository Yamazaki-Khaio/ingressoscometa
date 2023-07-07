import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
export default function EventoAdm(props: any) {
    const { imageSizeClass } = props;
    return (
        <div className='flex justify-center items-center flex-row'>
            <div className=" mt-8 ml-8">
                <Image width={720} height={480} src={props.Image} alt={props.Nome} className=" w-80 h-40 object-cover rounded-3xl " />
            </div>
            <div className="ml-12">
                <p className="font-bold  text-3xl">{props.Nome}</p>
                <p className="font-sans text-4sm">Local: {props.Local}</p>
                <p className="font-sans text-4sm">Data: {props.Data}</p>
                <p className="font-sans text-4sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-4sm">{props.Descricao}</p>
            </div>
            

        </div>


    )
}