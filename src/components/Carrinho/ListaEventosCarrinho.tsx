import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import Link from 'next/link';
import IngressoCarrinho from './IngressoCarrinho';
import { getSession, useSession } from 'next-auth/react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export default function ListaEventosCarrinho(props: any) {
  const [carrinho, setCarrinho] = useState([])
  //lógica aqui rotas, ajustar
  
  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const user = await getSession();
      const userId = user?.user.id;
      const response = await axios.get(`/api/carrinhoCompras?id=${userId}`)
      setCarrinho(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
 
  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center p-4 bg-slate-200">
      <div style={{ cursor: 'pointer' }}>
        {carrinho.map((c: any, index: number) => (
          <IngressoCarrinho
            key={index} // Add a unique key prop here
            id={c.id}
            name={c.nome_evento}
            data={new Date(c.data_evento).toLocaleDateString()}
            setor={c.nome}
            price={c.valor}
            place={c.cidade}
            image={convertBufferToUrl(c.imagem)}
          />
        ))}

      </div>
    </div>
  );


}

