import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer';
import PromotorAdm from './PromotorAdm';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function formatarNome(nome: string | null | undefined): string {
    if (nome == null) {
        return ''; // ou faça algo adequado para tratar o valor nulo ou indefinido
    }

    const nomesSeparados = nome.toLowerCase().split(' ');
    const nomesFormatados = nomesSeparados.map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1));
    return nomesFormatados.join(' ');
}



export default function ListaPromotores(props: any) {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        fetchUsuarios()
    }, [])

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('/api/promoter')
            setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const { data: session } = useSession()

    return (
        <div>

            <div className="flex flex-col gap-5 items-center p-4 ">
                <div>
                    <h2 className='text-4xl font-black'>Lista de Promotores</h2>
                </div>
                {usuarios.map((usuario: any, index: number) => (
                    <div className="relative flex  justify-start content-center h-60 w-full ml-12 mr-12 border bg-white shadow-md rounded-3xl">
                        <div style={{ cursor: 'pointer' }}>
                            <PromotorAdm
                                key={usuario.id}
                                Nome={usuario.nome}
                                Cpf={usuario.cpf}
                                Id={usuario.id}

                            />
                        </div>
                    </div>

                ))}
            </div>
        </div>

    )

}