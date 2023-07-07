import PerfilCampoCep from "./PerfilCampoCep";
import PerfilCampoCpf from "./PerfilCampoCpf";
import PerfilCampoEmail from "./PerfilCampoEmail";
import PerfilCampoNome from "./PerfilCampoNome";
import PerfilCampoRua from "./PerfilCampoRua";
import PerfilCampoTelefone from "./PerfilCampoTelefone";
import PerfilComplementoCasa from "./PerfilComplementoCasa";
import PerfilNumeroCasa from "./PerfilNumeroCasa";
import BotaoSalvarPerfil from "./botaoSalvarPerfil";
import { FormEventHandler, useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import axios from "axios";

interface FormData {
  nome: string,
  cpf: string,
  senha: string,
  email: string,
  telefone: string,
  cep: string,
  rua: string,
  casa: string,
  complemento: string,
}

export default function Perfil(){
  const [id_usuario, setIdUsuario] = useState("");
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    senha: "",
    email: "",
    telefone: "",
    cep: '',
    rua: '',
    casa: '',
    complemento: '',
  });
  


  useEffect(() => {
    
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);
      console.log(userId)
      try {
        const response = await axios.get(`/api/usuario?id=${userId}`);
        const response2 = await axios.get(`/api/email?id=${userId}`);
        const response3 = await axios.get(`/api/telefone?id=${userId}`);
        const response4 = await axios.get(`/api/endereco?id=${userId}`);
        const usuarioData = response.data;
        const emailData = response2.data;
        const telefoneData = response3.data;
        const enderecoData = response4.data;
        console.log(enderecoData)
        updateForm("nome" , usuarioData[0].nome )
        updateForm("cpf" , usuarioData[0].cpf )
        updateForm("email", emailData[0].email)
        updateForm("telefone", telefoneData[0].telefone)
        updateForm("cep", enderecoData[0].cep)
        updateForm("rua", enderecoData[0].rua)
        updateForm("casa", enderecoData[0].numero)
        updateForm("complemento", enderecoData[0].complemento)

    } catch (error) {
        console.log(error);
    }
    }
    getUserId();
  }, []);


    
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        
        try {   

            const formUsuario = {
                nome: document.getElementById('nome').value,
                id: id_usuario
              };
            console.log(`/api/usuario?id=${formUsuario.id}`)
            const resUsuario = await fetch(`/api/usuario?id=${formUsuario.id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formUsuario)
              });

            const formTelefone = {
                telefone: document.getElementById('telefone').value,
                id: id_usuario
              };

            const resTelefone = await fetch(`/api/telefone?id_usuario=${formTelefone.id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formTelefone)
              });
              const formEndereco = {
                cep:document.getElementById('cep').value,
                rua:document.getElementById('rua').value,
                numero:document.getElementById('numero').value,
                complemento:document.getElementById('complemento').value,
                id: id_usuario
              };
            const resEndereco = await fetch(`/api/endereco?id_usuario=${formEndereco.id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formEndereco)
              });

        } catch (error) {
          console.error("Erro ao enviar os dados:", error);
          // Lógica adicional para lidar com erros no envio dos dados
        }
        window.location.reload();
      };


       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const updateForm = (attribute: any, value: any) => {
    console.log(value)
    setFormData((prevData) => ({
      ...prevData,
      [attribute]: value
    }));
  };



    return(
        
        <div className="flex flex-col w-5/6 mr-36 ml-auto justify-center items-center m-12 bg-white rounded-lg shadow-md shadow-xl-bottom">
            <div className="col-start-2 col-span-2 flex itens-center">
                <form onSubmit={handleSubmit}>
                    <PerfilCampoNome nome={formData.nome}/>
                    <PerfilCampoEmail email ={formData.email}/>
                    <PerfilCampoCpf cpf={formData.cpf}/>
                    <PerfilCampoTelefone telefone = {formData.telefone}/>
                    <PerfilCampoCep cep= {formData.cep}/>
                    <PerfilCampoRua rua = {formData.rua}/>
                    <PerfilNumeroCasa numemroCasa = {formData.casa}/>
                    <PerfilComplementoCasa complemento = {formData.complemento}/>
                    <BotaoSalvarPerfil/>
                </form>
            </div>
            <div className="col-start-3 col-span-4 flex justify-center items-start">

            </div>
            </div>
            
        )
}