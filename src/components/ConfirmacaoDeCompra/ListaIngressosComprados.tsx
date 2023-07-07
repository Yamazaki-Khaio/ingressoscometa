import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ListaIngressosComprados (props: any){
    return (
        <div className='w-screen h-60'>
            <div className="relative flex flex-wrap justify-start content-center h-60 mx-12 border bg-white  rounded-3xl">
                <div className="ml-12">
                    <p className="font-bold  text-3xl">{props.Evento}</p>
                    <p className="font-sans text-4sm">Quantidade: {props.QuantidadeIngressos}</p>
                    <p className="font-sans text-4sm">Setor: {props.Setor}</p>
                    <p className="font-sans text-4sm">Preço: {props.Preco}</p>
                </div>
            </div>
        </div>
    )
}