import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import { FormEventHandler, cloneElement, useEffect, useState } from "react";
import CampoHorarioEvento from "./CampoHorarioEvento";
import { FLOAT } from "sequelize";
import CepCadastro from "./CepCadastro";
import CampoCidade from "./CampoCidade";
import CampoEstado from "./CampoEstado";
import CampoLocal from "../../QRCode/CampoLocal";
import ComplementoEnderecoCadastro from "./ComplementoEnderecoCadastro";
import NumeroDaCasaCadastro from "./NumeroDaCasaCadastro";
import RuaCadastro from "./RuaCadastro";
import { getSession } from "next-auth/react";
import axios from "axios";
import Botao from "../../CabecalhoCadastro/botao";
import BotaoEditaEvento from "../BotaoEditaEvento";

interface FormData {
  nome: string,
  descricao: string,
  localEvento: string,
  dataEvento: string,
  horarioEvento: string,
  imagem : {
    type: string,
    data: number[]
  } | undefined

  cep:string,
  rua:string,
  cidade:string,
  estado:string,
  complemento:string,
  numero:string
  }


export default function CadastroEvento(props:any) {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: undefined,
    horarioEvento: "",
    imagem: undefined,

    cep: "",
    rua: "",
    complemento: "",
    cidade: "",
    estado: "",
    numero: ""

  });
  
  useEffect(() => {

  async function getEventoId() {
    try {
      const response = await axios.get(`/api/evento?id=${props.id}`);
      const response4 = await axios.get(`/api/endereco?id_evento=${props.id}`);
      const eventoData = response.data;
      const enderecoData = response4.data;
      console.log(eventoData)
      updateForm("nome" , eventoData.nome_evento )
      updateForm("descricao" , eventoData.descricao_evento )
      updateForm("horarioEvento", eventoData.horario_evento)
      updateForm("dataEvento", new Date(eventoData.data_evento));
      updateForm("cidade", enderecoData[0].cidade)
      updateForm("estado", enderecoData[0].estado)
      updateForm("cep", enderecoData[0].cep)
      updateForm("rua", enderecoData[0].rua)
      updateForm("numero", enderecoData[0].numero)
      updateForm("complemento", enderecoData[0].complemento)

  } catch (error) {
      console.log(error);
    }
  }
  getEventoId();
}, []);

      const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try{
        const formEvento = {
            nome_evento: (document.getElementById('nome') as HTMLInputElement)?.value,
            descricao_evento: (document.getElementById('descricao') as HTMLInputElement)?.value,
            horario_evento: (document.getElementById('horarioEvento') as HTMLInputElement)?.value,
            data_evento: (document.getElementById('data') as HTMLInputElement)?.value,
            id: props.id
          };
        console.log(`/api/evento?id=${formEvento.id}`)
        const resEvento = await fetch(`/api/evento?id=${formEvento.id}`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formEvento)
          });

          const formEndereco = {
            cep:(document.getElementById('cep')as HTMLInputElement)?.value,
            rua:(document.getElementById('rua')as HTMLInputElement)?.value,
            numero:(document.getElementById('numero')as HTMLInputElement)?.value,
            complemento:(document.getElementById('complemento')as HTMLInputElement)?.value,
            id: props.id
          };
        const resEndereco = await fetch(`/api/endereco?id_evento=${formEndereco.id}`, {
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
setFormData((prevData) => ({
  ...prevData,
  [attribute]: value
}));
};
  const handleFileChange = (file: { type: string; data: number[] } | undefined) => {
    setFormData((prevData) => ({
      ...prevData,
      imagem: file
    }));
  };
  


return(
<div className="flex flex-col w-4/6 mr-36 ml-auto justify-center items-center m-12 bg-white rounded-lg shadow-md shadow-xl-bottom">
            <form onSubmit={handleSubmit}>
            <CampoNomeEvento optional={false} nome = {formData.nome}/>
            <CampoDescricaoEvento optional={false} descricao = {formData.descricao}/>
            <CampoLocal/>
            <CepCadastro optional={false} cep = {formData.cep}/>
            <CampoCidade optional={false} cidade = {formData.cidade}/>
            <CampoEstado optional={false} estado = {formData.estado}/>
            <RuaCadastro optional={false} rua = {formData.rua}/>
            <ComplementoEnderecoCadastro optional={false} complemento = {formData.complemento}/>
            <NumeroDaCasaCadastro optional={false} numero = {formData.numero}/>
            <CampoDataEvento optional={false} data={formData.dataEvento instanceof Date ? formData.dataEvento.toISOString().split('T')[0] : ''}/>
            <CampoHorarioEvento optional={false} horarioEvento = {formData.horarioEvento}/>
            <BotaoEditaEvento/>
            </form>
        </div>
    )
}