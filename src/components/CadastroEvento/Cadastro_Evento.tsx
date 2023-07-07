import BotaoSubmitEvento from "./BotaoSubmitEvento";
import CampoDescricaoEvento from "./CampoDescricaoEvento";
import CampoNomeEvento from "./CampoNomeEvento";
import CampoDataEvento from "./CampoDataEvento";
import { FormEventHandler, cloneElement, useState } from "react";
import CampoLocalEvento from "./CampoLocalEvento";
import CampoEnvioImagem from "./CampoEnviarImagem";
import CampoSetorVip from "./SetorEvento/CampoSetorVip";
import CampoSetorBackstage from "./SetorEvento/CampoSetorBackstage";
import CampoSetorCamarote from "./SetorEvento/CampoSetorCamarote";
import CampoSetorNenhum from "./SetorEvento/CampoSetorNenhum";
import CampoHorarioEvento from "./CampoHorarioEvento";
import CampoQntIngressoVip from "./QntEvento/CampoQntIngresso";
import CampoQntIngressoBackstage from "./QntEvento/CampoQntIngressoBack";
import CampoQntIngressoCamarote from "./QntEvento/CampoQntIngressoCam";
import CampoQntIngressoNenhum from "./QntEvento/CampoQntIngressoNenhum";
import CampoPrecoVip from "./PrecoEvento/CampoPreco";
import CampoPrecoCamarote from "./PrecoEvento/CampoPrecoCam";
import CampoPrecoBackstage from "./PrecoEvento/CampoPrecoBack";
import CampoPrecoNenhum from "./PrecoEvento/CampoPrecoNenhum";
import { FLOAT } from "sequelize";
import CepCadastro from "./CepCadastro";
import CampoCidade from "./CampoCidade";
import CampoEstado from "./CampoEstado";
import CampoLocal from "../QRCode/CampoLocal";
import ComplementoEnderecoCadastro from "./ComplementoEnderecoCadastro";
import NumeroDaCasaCadastro from "./NumeroDaCasaCadastro";
import RuaCadastro from "./RuaCadastro";
import { getSession, useSession } from "next-auth/react";

interface FormData {
  id_usuario?: string,
  nome: string,
  descricao: string,
  localEvento: string,
  dataEvento: string,
  horarioEvento: string,
  imagem : {
    type: string,
    data: number[]
  } | undefined

  setor_vip: string
  setor_camarote: string
  setor_backstage: string
  setor_nenhum: string

  qnt_vip: string
  qnt_camarote: string
  qnt_backstage: string
  qnt_nenhum: string
  
  preco_vip: string
  preco_camarote: string
  preco_backstage: string
  preco_nenhum: string

  cep:string,
  rua:string,
  cidade:string,
  estado:string,
  complemento:string,
  numero:string
  }


export default function CadastroEvento() {

  const [formData, setFormData] = useState<FormData>({
    id_usuario: "",
    nome: "",
    descricao: "",
    localEvento: "",
    dataEvento: "",
    horarioEvento: "",
    imagem: undefined,

    setor_vip: "",
    setor_camarote: "",
    setor_backstage: "",
    setor_nenhum: "",

    qnt_vip: "",
    qnt_camarote: "",
    qnt_backstage: "",
    qnt_nenhum: "",
    
    preco_vip: "",
    preco_camarote: "",
    preco_backstage: "",
    preco_nenhum: "",

    cep: "",
    rua: "",
    complemento: "",
    cidade: "",
    estado: "",
    numero: ""

  });

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
    try{
      e.preventDefault()
      const session = await getSession()
      
      formData.id_usuario = session?.user?.id
      formData.nome = (document.getElementById('nome') as HTMLInputElement)?.value;
      formData.descricao = (document.getElementById('descricao') as HTMLInputElement)?.value;
      formData.localEvento = (document.getElementById('localEvento') as HTMLInputElement)?.value;
      formData.horarioEvento = (document.getElementById('horarioEvento') as HTMLInputElement)?.value;
      formData.dataEvento = (document.getElementById('data') as HTMLInputElement)?.value;

      formData.setor_vip = (document.getElementById('setor_vip') as HTMLInputElement)?.value;
      formData.qnt_vip = (document.getElementById('qnt_vip') as HTMLInputElement)?.value;
      formData.preco_vip = (document.getElementById('preco_vip') as HTMLInputElement)?.value;

      formData.setor_backstage = (document.getElementById('setor_backstage') as HTMLInputElement)?.value;
      formData.qnt_backstage = (document.getElementById('qnt_back') as HTMLInputElement)?.value;
      formData.preco_backstage = (document.getElementById('preco_back') as HTMLInputElement)?.value;

      formData.setor_camarote = (document.getElementById('setor_camarote') as HTMLInputElement)?.value;
      formData.qnt_camarote = (document.getElementById('qnt_cam') as HTMLInputElement)?.value;
      formData.preco_camarote = (document.getElementById('preco_cam') as HTMLInputElement)?.value;

      formData.setor_nenhum = (document.getElementById('setor_nenhum') as HTMLInputElement)?.value;
      formData.qnt_nenhum = (document.getElementById('qnt_nenhum') as HTMLInputElement)?.value;
      formData.preco_nenhum = (document.getElementById('preco_nenhum') as HTMLInputElement)?.value;

      formData.cep = (document.getElementById('cep') as HTMLInputElement)?.value;
      formData.cidade = (document.getElementById('cidade') as HTMLInputElement)?.value;
      formData.estado = (document.getElementById('estado') as HTMLInputElement)?.value;
      formData.complemento = (document.getElementById('complemento') as HTMLInputElement)?.value;
      formData.numero = (document.getElementById('numero') as HTMLInputElement)?.value;
      formData.rua = (document.getElementById('rua') as HTMLInputElement)?.value;
      const fileInput = document.getElementById('imagem') as HTMLInputElement;
    if (fileInput?.files?.length) {
      formData.imagem = {
        type: fileInput.files[0].type,
        data: Array.from(new Uint8Array(await fileInput.files[0].arrayBuffer()))
      };
    }
      
      console.log(formData)
      console.log(formData.id_usuario)
      console.log(formData.imagem)
      const res = await fetch('/api/evento', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(formData)


      })
      if(res.ok){
        window.location.replace("cadastro_evento")
      }else{
        const data = await res.json()
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
            <CampoNomeEvento optional={true} value={formData.nome} onChange={handleInputChange} name="nome"/>
            <CampoDescricaoEvento optional={true} value={formData.descricao} onChange={handleInputChange} name="descricao"/>
            <CampoLocal/>
            <CepCadastro optional={true}/>
            <CampoCidade optional={true}/>
            <CampoEstado optional={true}/>
            <RuaCadastro optional={true}/>
            <ComplementoEnderecoCadastro optional={true}/>
            <NumeroDaCasaCadastro optional={true}/>
            <CampoDataEvento optional={true} value={formData.dataEvento} onChange={handleInputChange} name="dataEvento"/>
            <CampoHorarioEvento optional={true} value={formData.horarioEvento} onChange={handleInputChange} name="horarioEvento"/>
            <div style={{wordSpacing: '150px'}} >
              Setores<span className="text-red-600 text-bold">* </span> 
              Preço<span className="text-red-600 text-bold">* </span> 
              Quantidade<span className="text-red-600 text-bold">* </span> 
              </div>
            <div style={{display: "flex"}}>
            <CampoSetorVip value={formData.setor_vip} onChange={handleInputChange} name="setor_vip"/>
            <CampoPrecoVip value={formData.preco_vip} onChange={handleInputChange} name="preco_vip"/>
            <CampoQntIngressoVip value={formData.qnt_vip} onChange={handleInputChange} name="qnt_vip"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorCamarote value={formData.setor_camarote} onChange={handleInputChange} name="setor_camarote"/> 
            <CampoPrecoCamarote value={formData.preco_camarote} onChange={handleInputChange} name="preco_camarote"/>
            <CampoQntIngressoCamarote value={formData.qnt_camarote} onChange={handleInputChange} name="qnt_camarote"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorBackstage value={formData.setor_backstage} onChange={handleInputChange} name="setor_backstage"/> 
            <CampoPrecoBackstage value={formData.preco_backstage} onChange={handleInputChange} name="preco_backstage"/>
            <CampoQntIngressoBackstage value={formData.qnt_backstage} onChange={handleInputChange} name="qnt_backstage"/>
            </div>
            <div className="" style={{display: "flex"}}>
            <CampoSetorNenhum value={formData.setor_nenhum} onChange={handleInputChange} name="setor_nenhum"/> 
            <CampoPrecoNenhum value={formData.preco_nenhum} onChange={handleInputChange} name="preco_nenhum"/>
            <CampoQntIngressoNenhum value={formData.qnt_nenhum} onChange={handleInputChange} name="qnt_nenhum"/>
            </div>
            <CampoEnvioImagem  onChange={handleFileChange} name="imagem"/>
            <BotaoSubmitEvento/>
            </form>
        </div>
    )
}