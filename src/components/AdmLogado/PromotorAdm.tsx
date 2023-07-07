import Botao from '../CabecalhoCadastro/botao';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useEffect, useState } from "react";
import Modal from '../Modal/Modal';
interface FormData {
    email: string,
    telefone: string,
    cidade: string,
    estado: string,
  }

export default function EventoPromoter(props: any) {
    const [modalLiberar, setModalLiberar] = useState(false);
    const [modalSuspender, setModalSuspender] = useState(false);
    const [modalRemover, setModalRemover] = useState(false);

    const abrirModalLiberar = () => {
        setModalLiberar(true);
    };
      
    const fecharModalLiberar = () => {
        setModalLiberar(false);
    };

    const abrirModalSuspender = () => {
        setModalSuspender(true);
    };
      
    const fecharModalSuspender = () => {
        setModalSuspender(false);
    };

    const abrirModalRemover = () => {
        setModalRemover(true);
    };
      
    const fecharModalRemover = () => {
        setModalRemover(false);
    };

    const [formData, setFormData] = useState<FormData>({
        email: "Sem E-mail cadastrado",
        telefone: "Sem Telefone cadastrado",
        cidade: 'Sem Cidade cadastrada',
        estado: 'Sem Estado cadastrado',
      });

      useEffect(() => {
    
        async function getUserId() {
          const userId = props.Id;
          
          try {
            const response2 = await axios.get(`/api/email?id=${userId}`);
            const response3 = await axios.get(`/api/telefone?id=${userId}`);
            const response4 = await axios.get(`/api/endereco?id=${userId}`);

            const emailData = response2.data;
            const telefoneData = response3.data;
            const enderecoData = response4.data;
            console.log(enderecoData)
            updateForm("email", emailData[0].email)
            updateForm("telefone", telefoneData[0].telefone)
            updateForm("cidade", enderecoData[0].cidade)
            updateForm("estado", enderecoData[0].estado)
    
        } catch (error) {
            console.log(error);
        }
        }
        getUserId();
      }, []);

      const updateForm = (attribute: any, value: any) => {
        console.log(value)
        setFormData((prevData) => ({
          ...prevData,
          [attribute]: value
        }));
      };

    function banirUsuario(id: string, acao: string) {
        const url = `https://exemplo-api-banimento.com/${acao}/${id}`;

        axios.post(url)
            .then(response => {
                // Verifique o status da resposta e faça o tratamento apropriado.
                if (response.status === 200) {
                    // A solicitação foi bem-sucedida.
                    console.log('Banimento realizado com sucesso!');
                } else {
                    // A solicitação falhou.
                    console.error('Falha ao realizar o banimento.');
                }
            })
            .catch(error => {
                // Trate erros de rede ou outras falhas na solicitação.
                console.error('Erro na solicitação:', error);
            });
        return undefined
    }

    return (
        <>
          <div className="flex justify-center items-center flex-row">
            <div className="ml-12 mt-2">
              <p className="font-bold text-3xl">{props.Nome}</p>
              <p className="font-sans text-4sm">Local: {formData.cidade}, {formData.estado}</p>
              <p className="font-sans text-4sm">Email: {formData.email}</p>
              <p className="font-sans text-4sm">CPF: {props.Cpf}</p>
              <p className="font-sans text-4sm">Telefone: {formData.telefone}</p>
              <p className="font-sans text-4sm">Status: {props.Status}</p>
      
              <div className="absolute top-3/4 left-1/4">
                <button
                  onClick={() => { banirUsuario(props.Id, "liberar"); abrirModalLiberar(); }}
                  className="bg-teal-700 w-40 h-12 rounded-xl text-white text-md font black"
                >
                  Liberar
                </button>
              </div>
      
              <div className="absolute top-3/4 left-2/4">
                <button
                  onClick={() => { banirUsuario(props.Id, "banir"); abrirModalSuspender(); }}
                  className="bg-teal-700 w-40 h-12 rounded-xl text-white text-md font black"
                >
                  Suspender
                </button>
              </div>
      
              <div className="absolute top-3/4 left-3/4">
                <button
                  onClick={() => { banirUsuario(props.Id, "remover"); abrirModalRemover(); }}
                  className="bg-teal-700 w-40 h-12 rounded-xl text-white text-md font black"
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
      
          {modalLiberar && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <Modal
                  mensagem="Deseja liberar o promoter?"
                  link="/promotores"
                  onClose={fecharModalLiberar}
                />
              </div>
            </div>
          )}
      
          {modalSuspender && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <Modal
                  mensagem="Deseja suspender o promoter?"
                  link="/promotores"
                  onClose={fecharModalSuspender}
                />
              </div>
            </div>
          )}
      
          {modalRemover && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <Modal
                  mensagem="Deseja remover o promoter?"
                  link="/promotores"
                  onClose={fecharModalRemover}
                />
              </div>
            </div>
          )}
        </>
      );
      
}