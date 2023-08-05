import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import ChoiceBox from './ChoiceBoxSetor';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EventoLogado(props: any) {
    const [id_usuario, setIdUsuario] = useState("");

    useEffect(() => {
        async function getUserId() {
            const user = await getSession();
            const userId = user?.user.id;
            setIdUsuario(userId);
            console.log(userId)
        }
        getUserId();
    }, []);


    function handleBotaoClicado(setores: any): void {
        console.log(document.getElementById("setor").value)
        for (const setor of setores) {
            if (setor.nome === document.getElementById("setor").value) {
                const form = {
                    tipo: setor.nome,
                    evento_id: props.id, // Use the 'evento_id' from props
                    quantidade: 1,
                }



                axios.post(`/api/ingresso?id=${id_usuario}`, form, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        }
    }

    return (
        <div className='w-screen h-60'>
            <div className="flex p-6 font-mono justify-center content-center bg-white rounded-3xl border border-white">
                <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                    <Image src={props.Image} alt={props.Nome} className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" width={720} height={480} loading="lazy" />
                </div>
                <form className="flex-auto pl-6">
                    <div className="relative flex flex-wrap items-baseline pb-6 before:bg-blue-900 before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                        <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                            {props.Nome}
                        </h1>
                        <div className="relative text-lg text-white">
                            {props.preco}
                        </div>
                        <div className="relative uppercase text-teal-400 ml-3">
                            No estoque
                        </div>
                    </div>
                    <div className="flex items-baseline my-6">
                        <div className="space-x-3 flex text-sm font-medium">
                            {/* Your size options here */}
                        </div>
                        <ChoiceBox setores={props.setores} />
                    </div>
                    <div className="flex space-x-2 mb-4 text-sm font-medium">
                        <div className="flex space-x-4">

                        </div>
                        <button onClick={() => handleBotaoClicado(props.setores)}>
                            <Botao href={`/carrinho?id=${id_usuario}`} NomeBotao="Adicionar ao carrinho" />
                        </button>
                    </div>
                    <p className="text-xs leading-6 text-slate-500">
                    </p>
                </form>
            </div>
        </div>
    );
}