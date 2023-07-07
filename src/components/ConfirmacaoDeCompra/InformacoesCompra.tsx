import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import ListaIngressosComprados from './ListaIngressosComprados';
export default function InformacoesCompra (props: any){
    return (
        <div className='w-screen h-60'>
            <div className="relative flex flex-wrap justify-start content-center h-60 mx-12 border bg-white  rounded-3xl">
                <div className="ml-12">
                    <p className="font-bold  text-3xl">{props.Nome}</p>
                    <p className="font-sans text-4sm">Data: {props.Data}</p>
                    <ListaIngressosComprados/>
                </div>
            </div>
        </div>
    )
}