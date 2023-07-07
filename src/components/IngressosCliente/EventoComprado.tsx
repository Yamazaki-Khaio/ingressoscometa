import Image from 'next/image'
export default function EventoLogado(props: any) {
    const { imageSizeClass } = props;
    return (
        <div className="relative flex flex-wrap justify-start content-center h-60 w-screen ml-12 mr-12 border bg-white  rounded-3xl">
            <div className="w-92 h-44 ml-8">
                <Image width={720} height={480} src={props.Image} alt={props.Nome} className=" w-full h-full object-cover rounded-3xl " />
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