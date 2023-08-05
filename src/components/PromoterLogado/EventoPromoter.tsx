import Image from 'next/image'
import Botao from '../CabecalhoCadastro/botao';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import ModalSuspEvento from './ModalSuspEvento';
import ModalReativarEvento from './ModalReativarEvento';

export default function EventoPromoter(props: any) {
    const [modalReativar, setModalReativar] = useState(false);
    const [modalSuspender, setModalSuspender] = useState(false);
    var SuspenderVisivel: string;
    var ReativarVisivel: string;

    const openModalReativar = () => {
        setModalReativar(true);
    };

    const closeModalReativar = () => {
        setModalReativar(false);
    };

    const openModalSuspender = () => {
        setModalSuspender(true);
    };

    const closeModalSuspender = () => {
        setModalSuspender(false);
    };

    if (props.ativado == 1) {
        //Escolhe qual botão fica visível e qual não
        ReativarVisivel = "collapse"
        SuspenderVisivel = ""
    } else {
        SuspenderVisivel = "collapse"
        ReativarVisivel = ""
    }

    return (
        <div className="relative flex flex-wrap justify-start content-center h-60 w-4/5 ml-12 mr-12 border bg-white shadow-md rounded-3xl">
            <div className="w-40 h-100 ml-8">
                <Image
                    width={1920}
                    height={1080}
                    src={props.Image}
                    alt={props.Nome}
                    quality={100} // Set the desired quality value (e.g., 75)
                    className="object-cover rounded-3xl overflow-hidden"
                />


            </div>

            <div className="ml-12">
                <p className="font-bold text-3xl">{props.Nome}</p>
                <p className="font-sans text-4sm">Local: {props.Local}</p>
                <p className="font-sans text-4sm">Data: {props.Data}</p>
                <p className="font-sans text-4sm">A partir das: {props.Hora}</p>
                <p className="font-sans text-4sm">{props.Descricao}</p>
                <ul className="mt-4">
                    {props.Preco_backstage &&
                        <li className="font-sans text-4sm mt-2 flex items-center">
                            <span className="mr-2 w-24">Backstage:</span>
                            <span className="bg-gradient-to-br  from-teal-500 to-teal-800 text-white rounded-full px-2 py-1">
                                R$ {props.Preco_backstage?.toFixed(2)}
                            </span>
                        </li>
                    }

                    {props.Preco_camarote &&
                        <li className="font-sans text-4sm mt-2 flex items-center ">
                            <span className="mr-2 w-24">Camarote:</span>
                            <span className="bg-gradient-to-br justify-center from-teal-500 to-teal-800 text-white rounded-full px-2 py-1">
                                R$ {props.Preco_camarote?.toFixed(2)}
                            </span>
                        </li>
                    }
                    {props.Preco_vip &&
                        <li className="font-sans text-4sm mt-2 flex items-center">
                            <span className="mr-2 w-24">VIP:</span>
                            <span className="bg-gradient-to-br from-teal-500 to-teal-800 text-white rounded-full px-2 py-1">
                                R$ {props.Preco_vip?.toFixed(2)}
                            </span>
                        </li>
                    }
                </ul>
            </div>

            <div className="absolute bottom-3 right-7" style={{ visibility: SuspenderVisivel }}>
                <Botao onClick={openModalSuspender} NomeBotao="Suspender" />
            </div>
            {modalSuspender && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <ModalSuspEvento
                            mensagem="Deseja suspender o evento?"
                            eventoId={props.id}
                            onClose={closeModalSuspender}
                        />
                    </div>
                </div>
            )}



            <div className="absolute bottom-3 right-7" style={{ visibility: ReativarVisivel }}>
                <Botao onClick={openModalReativar} NomeBotao="Reativar" />
            </div>
            {modalReativar && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <ModalReativarEvento
                            mensagem="Deseja reativar o evento?"
                            eventoId={props.id}
                            onClose={closeModalReativar}
                        />
                    </div>
                </div>
            )}

            <div className="absolute bottom-3/4 right-8">
                <a href={`/editar_evento?id=${props.id}`} className="btn btn-default">
                    <button type="button" className="btn btn-default">
                        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    </button>
                </a>
            </div>
        </div>
    );
}
