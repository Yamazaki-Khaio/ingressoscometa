import Image from 'next/image'
import React, { useEffect } from 'react';




export default function Evento(props:any) {
    const { imageSizeClass } = props
    
    return (
        <div className="relative h-80 w-80 bg-zinc-300 border border-zinc-400 rounded-2xl">
        <div className="absolute inset-0 mx-auto rounded-2xl overflow-hidden">
            <Image width={720} height={480} src={props.Image} alt={props.Nome} className="w-full border h-48 rounded-3xl scale-105 transition-transform duration-300 ease-in-out transform hover:scale-110" />
            </div>

            <div className="absolute bottom-0 left-0 w-full opacity-100 text-black flex flex-col  justify-center items-center h-auto">
            <div className="p-4">
                <p className="font-bold  text-lg">{props.Nome}</p>
                <p className="font-sans text-sm">Data: {props.Data}</p>
                <p className="font-sans text-sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-sm">Local: {props.Local}</p>
                </div>
            </div>
        </div>


    )}


    