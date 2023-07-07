import CampoCpf from "./CampoCpf";
import CampoSenhaERepetirSenha from "./CampoSenhaERepetirSenha";
import RadioButton from "./RadioButton";
import CampoDataDeNascimento from "./CampoDataDeNascimento";
import CampoNomeCompleto from "./CampoNomeCompleto";
import BotaoSubmitCadastro from "./BotaoSubmitCadastro";
import { FormEventHandler, useState } from "react";
import { createHash } from 'crypto';
import CampoEmail from "./CampoEmail";
import CampoTelefone from "./CampoTelefone";
import CepCadastro from "./CepCadastro";
import CampoLocal from "../QRCode/CampoLocal";
import ComplementoEnderecoCadastro from "./ComplementoEnderecoCadastro";
import NumeroDaCasaCadastro from "./NumeroDaCasaCadastro";
import RuaCadastro from "./RuaCadastro";
import CampoCidade from "./CampoCidade";
import CampoEstado from "./CampoEstado";
interface FormData {
  nome: string,
  cpf: string,
  data_nascimento: string,
  senha: string,
  email: string,
  telefone: string,
  tipo:string,
  cep:string,
  rua:string,
  cidade:string,
  estado:string,
  complemento:string,
  numero:string
}

function removerMascaraCpf(cpfComMascara: string): string {
  // Remove todos os caracteres que não são dígitos
  const cpfSemMascara = cpfComMascara.replace(/\D/g, '');

  return cpfSemMascara;
}

export default function CadastroAdm() {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    data_nascimento: "2000-01-01",
    senha: "",
    email: "",
    telefone: "",
    tipo:"",
    cep: "",
    rua: "",
    complemento: "",
    cidade: "",
    estado: "",
    numero: ""
  });


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      const radios = document.querySelectorAll('input[name="tipoUsuario"]')
     
      var tipo:number = 0
     
      for(var i:number = 0;i<radios.length;i++){
         if(radios[i].checked){
           tipo = i + 1;
           break;
         }
      }
      const hash = createHash('sha256');
      hash.update(document.getElementById('senha').value)
      const form = {
        nome: document.getElementById('nomeCompleto').value,
        cpf: removerMascaraCpf(document.getElementById('cpf').value),
        data_nascimento: document.getElementById('data').value,
        senha: hash.digest('hex'),
        email:  document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        tipo: 3,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        cidade: document.getElementById('cidade').value,
        complemento: document.getElementById('complemento').value,
        estado: document.getElementById('estado').value,
        numero: document.getElementById('numero').value,
      }

    

      const res = await fetch('/api/usuario', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(form) //Testando se os valores estão passando
          console.log(data)
      // Envie uma requisição para a API interna para enviar o e-mail de boas-vindas
        fetch('/api/email_send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: form.email }),
        })
          .then((response) => response.json())
          .then((responseData) => {
            alert(responseData.message)
            console.log(responseData.message);
          })
          .catch((error) => {
            alert('Cadastro efetuado, realize o login')
            console.error('Erro ao enviar o e-mail de boas-vindas:', error);
          });

          window.location.replace("/login")
        });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados:")

      // Lógica adicional para lidar com erros no envio dos dados
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col w-5/6 mr-36 ml-auto justify-center items-center m-12 bg-white rounded-lg shadow-md shadow-xl-bottom">
      <form onSubmit={handleSubmit}>
        <CampoNomeCompleto optional={true} value={formData.nome} onChange={handleInputChange} name="nome" />
        <CampoEmail optional={true} value={formData.email} onChange={handleInputChange} name="email"/>
        <CampoCpf optional={true} value={formData.cpf} onChange={handleInputChange} name="cpf" />
        <CampoSenhaERepetirSenha optional={true} value={formData.senha} onChange={handleInputChange} name="senha" />
        <CampoTelefone optional={true} value={formData.telefone} onChange={handleInputChange} name="telefone"/> 
        <CampoDataDeNascimento optional={true} value={formData.data_nascimento} onChange={handleInputChange} name="data_nascimento" />
        <CampoLocal/>
        <CepCadastro optional={true} value={formData.cep} onChange={handleInputChange} name="cep"/>
        <CampoCidade optional={true} value={formData.cidade} onChange={handleInputChange} name="cidade"/>
        <CampoEstado optional={true} value={formData.estado} onChange={handleInputChange} name="estado"/>
        <RuaCadastro optional={true} value={formData.rua} onChange={handleInputChange} name="rua"/>
        <NumeroDaCasaCadastro optional={true} value={formData.numero} onChange={handleInputChange} name="numero"/>
        <ComplementoEnderecoCadastro optional={true} value={formData.complemento} onChange={handleInputChange} name="complemento"/>
        <BotaoSubmitCadastro />
      </form>
    </div>
  )
}
