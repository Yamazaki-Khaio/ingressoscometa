import Image from 'next/image'
import React, { useEffect } from 'react';




export default function Evento(props:any) {
    const { imageSizeClass } = props
    
    return (
        <div className="relative h-80 w-80 rounded-2xl">
        <div className="absolute inset-0 mx-auto rounded-2xl overflow-hidden">
            <Image width={1920} height={1080} src={props.Image} alt={props.Nome} className="w-full border h-full rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden" />
            </div>

            <div className=" bg-white absolute bottom-0 left-0 w-full opacity-100 text-black flex flex-col border rounded-3xl justify-center items-center h-auto overflow-hidden ">
            <div className="p-4">
                <p className="font-bold  text-lg">{props.Nome}</p>
                <p className="font-sans text-sm">Data: {props.Data}</p>
                <p className="font-sans text-sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-sm">Local: {props.Local}</p>
                </div>
            </div>
        </div>


    )}


    