import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import EventoPromoter from './EventoPromoter';
import { getSession, useSession } from 'next-auth/react';
import Botao from '../CabecalhoCadastro/botao';


export default function ListaEventosPromoters(props: any) {
    const [eventos, setEventos] = useState([])
    const [endereco, setEnderecos] = useState([])
    useEffect(() => {
        fetchEventos()
    }, [])

    const fetchEventos = async () => {
        try {
            const user = await getSession();
            const userId = user?.user.id;
            const response = await axios.get(`/api/evento?id_usuario=${userId}`)
            setEventos(response.data)
            const response2 = await axios.get('/api/endereco')
            setEnderecos(response2.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const getEnderecoDoEvento = (eventoId: string) => {
        return endereco.filter((endereco: any) => endereco.id_evento === eventoId);
      };

    const convertBufferToUrl = (buffer: any) => {
        const imageData = Buffer.from(buffer.data).toString('base64');
        return `data:image/png;base64,${imageData}`;
    };

    const { data: session } = useSession()

    return (
<div>
        
        <div className="flex flex-wrap gap-5 justify-end items-end p-4 ">
            <div className='justify-start w-5/6'>
                <h2 className="font-bold  text-3xl"> Eventos Cadastrados</h2>
                <div className="absolute top-3 right-8">
                    <Botao href="/cadastro_evento" NomeBotao="Cadastrar Novo Evento" />
                </div>
            </div>
            {eventos.map((evento: any, index: number) => (
                <EventoPromoter
                    key={evento.id}
                    id={evento.id}
                    Nome={evento.nome_evento}
                    Data={new Date(evento.data_evento).toLocaleDateString()}
                    Hora={evento.horario_evento}
                    rua={evento.rua}
                    ativado={evento.ativado}
                    Image={convertBufferToUrl(evento.imagem)} // Aqui você precisa ajustar como a imagem é passada para o componente Evento

                />
            ))}
        </div>
</div>
        
    )
    
    }
