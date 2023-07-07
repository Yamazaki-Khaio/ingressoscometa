import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function PaginaEvento(props: any) {
    const [evento, setEvento] = useState<any>(null);
    const { data: session } = useSession();
    const [endereco, setEnderecos] = useState([]);

    useEffect(() => {
        fetchEventoById(props.id);
    }, []);

    const fetchEventoById = async (id) => {
        try {
            const response = await axios.get(`/api/evento?id=${props.id}`);
            const eventoData = response.data;
            setEvento(eventoData);
            const response2 = await axios.get('/api/endereco')
            setEnderecos(response2.data)
            
            // Do something with the event data
        } catch (error) {
            console.log(error);
        }
    };

    const convertBufferToUrl = (buffer: any) => {
        const imageData = Buffer.from(buffer.data).toString('base64');
        return `data:image/jpeg;base64,${imageData}`;
    };
    
    const getEnderecoDoEvento = (eventoId: string) => {
        return endereco.filter((endereco: any) => endereco.id_evento === eventoId);
      };

    return (
        <div className="">
            {evento && (
                <div className='flex gap-8'>
                    <div className="h-128 ml-80">
                        <Image
                            width={720}
                            height={480}
                            src={convertBufferToUrl(evento.imagem)}
                            alt={evento.nome_evento}
                            className=" w-full h-full object-cover rounded-3xl "
                        />
                    </div>
                    <div className="w-64 mr-80 text-lg font-bold">
                        <p className=' font-black text-3xl'>{evento.nome_evento}</p>
                        <p className=' font-thin'>{getEnderecoDoEvento(evento.id)[0]?.cidade}</p>
                        <p className=' font-thin text-xl'>{new Date(evento.data_evento).toLocaleDateString()}</p>
                        <p className=' font-thin text-md'>{evento.horario_evento}</p>
                        <p className=' font-normal text-xl'>{evento.descricao_evento}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
