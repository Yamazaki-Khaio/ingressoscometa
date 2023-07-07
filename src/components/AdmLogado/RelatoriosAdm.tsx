import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EventoLogado from '../ClienteLogado/EventoLogado';
import { Buffer } from 'buffer';
import EventoAdm from './EventoAdm';
import { useSession } from 'next-auth/react';

export default function RelatoriosAdm(props: any) {
    const [eventos, setEventos] = useState([])
    useEffect(() => {
        fetchEventos()
    }, [])

    const fetchEventos = async () => {
        try {
            const response = await axios.get('/api/evento')
            setEventos(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const convertBufferToUrl = (buffer: any) => {
        const imageData = Buffer.from(buffer.data).toString('base64');
        return `data:image/png;base64,${imageData}`;
    };

    const { data: session } = useSession()
    return (
        <div className="flex flex-col w-5/6 mr-36 ml-auto justify-center items-center m-12 bg-white rounded-lg shadow-md shadow-xl-bottom">

            <div className="flex flex-wrap gap-5 justify-center w-5/6 items-center p-4 ">
                <div className='justify-start w-5/6'>
                    <h2 className="font-bold">Olá {session?.user?.name}</h2>
                </div>
                {eventos.map((evento: any, index: number) => (
                    <EventoAdm
                        key={evento.id}
                        Nome={evento.nome_evento}
                        Data={new Date(evento.data_evento).toLocaleDateString()}
                        Hora={new Date(evento.data_evento).toLocaleTimeString()}
                        Local={evento.local}
                        Image={convertBufferToUrl(evento.imagem)} // Aqui você precisa ajustar como a imagem é passada para o componente Evento

                    />
                ))}
            </div>
        </div>
    )
}