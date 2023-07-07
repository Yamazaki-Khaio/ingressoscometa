import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Evento from '../CadastroEvento/Evento';
import { time } from 'console';




export default function GrindEvento(props: any) {
  const [eventos, setEventos] = useState([])
  const [endereco, setEnderecos] = useState([]);

  useEffect(() => {
    fetchEventos()
  }, [])

//busca todos os eventos no banco de dados
  const fetchEventos = async () => {
    try {
      const response = await axios.get('/api/evento')
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


  //converte buffer to url image base64
  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

  return (
//renderiza todos os eventos cadastrados
    <div className="flex flex-wrap gap-5 justify-center items-center p-4">
      {eventos.map((evento: any, index: number) => (
        
        <Evento
          key={evento.id}
          Nome={evento.nome_evento}
          Data={new Date(evento.data_evento).toLocaleDateString()}
          Hora={(evento.horario_evento)}
          Local={getEnderecoDoEvento(evento.id)[0]?.cidade}
          Image={convertBufferToUrl(evento.imagem)}
          
           // Cria uma URL temporária para a imagem BLOB


        />
      ))}
    </div>
  )
}
