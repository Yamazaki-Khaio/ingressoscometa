import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EventoComprado from './EventoComprado';
import { Buffer } from 'buffer';
import Paginacao from './Paginacao';
import Filtro from './Filtro';

export default function ListaEventosCliente(props: any) {
  const [eventos, setEventos] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10; // Defina o número de eventos por página aqui

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async (): Promise<void> => {
    try {
      const response = await axios.get('/api/evento');
      setEventos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const convertBufferToUrl = (buffer: Buffer): string => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

  const totalItems = eventos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = eventos.slice(startIndex, endIndex);

  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
        <Filtro/>
        {currentEvents.map((evento: any) => (
          <EventoComprado
            key={evento.id}
            Nome={evento.nome_evento}
            Data={new Date(evento.data_evento).toLocaleDateString()}
            Hora={new Date(evento.data_evento).toLocaleTimeString()}
            Local={evento.local}
            Image={convertBufferToUrl(evento.imagem)} // Aqui você precisa ajustar como a imagem é passada para o componente Evento
          />
        ))}

      <Paginacao currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      </div>
      
    </div>
  );
}