import React, { FormEventHandler, useEffect, useState } from 'react';
import BotaoSalvarCartao from "./botaoSalvarCartao";
import CampoCvv from "./cartaoCvv";
import CampoNumeroCartao from "./cartaoNumero";
import CampoValidade from "./cartaoValidade";
import Image from 'next/image';
import CampoNomeCartao from './cartaoNome';
import { getSession } from 'next-auth/react';
import axios from 'axios';

interface FormData{
  nomeCartao: string,
  numero: string,
  cvv: string,
  validade: string,
}

export default function BlocoCartaoDeCredito() {
  const [formData, setFormData] = useState<FormData>({
    nomeCartao:'' ,
    numero: '',
    cvv: '',
    validade:'' ,
  });

  const [id_usuario, setIdUsuario] = useState("");

  useEffect(() => {
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);

      try {
        const response = await axios.get(`/api/cardc?id=${userId}`);
        const cartaoData = response.data;
        updateForm("nomeCartao" , cartaoData[0].titular )
        updateForm("numero" , cartaoData[0].nCard )
        updateForm("cvv", cartaoData[0].cvv)
        updateForm("validade", cartaoData[0].data_validade)
    } catch (error) {
        console.log(error);
    }
    }

    getUserId();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try{
    const formCartao = {
      id: id_usuario,
      nCard: document.getElementById('numeroCartao').value,
      data_validade: document.getElementById('validade').value,
      cvv: document.getElementById('cvv').value,
      titular: document.getElementById('nomeCartao').value,
      }
      const res = await fetch(`/api/cardc?id_usuario=${formCartao.id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formCartao)
        
      });
      if (res.status === 500) {
        console.log("entrou no pUt");
        await fetch(`/api/cardc?id_usuario=${formCartao.id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formCartao)
        });
        window.location.reload();
      }
      window.location.reload();
    } catch(error){
      console.error("Erro ao enviar os dados:", error);
    }
  }

  const updateForm = (attribute: any, value: any) => {
    console.log(value)
    setFormData((prevData) => ({
      ...prevData,
      [attribute]: value
    }));
  };

  
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getBackgroundColor = () => {
    if (hovered) {
      return 'linear-gradient(45deg, #1f9d78, #14b59f)';
    }
    return 'linear-gradient(45deg, #14b59f, #1f9d78)';
  };

  const getBoxShadow = () => {
    if (hovered) {
      return "10px 10px 8px rgba(0, 0, 0, 0.3)";
    }
    return "10px 10px 4px rgba(0, 0, 0, 0.2)";
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-96 h-60 mx-auto relative"
      style={{
        marginTop: "-100vh",
        right: "23vh",
        fontWeight: "bold",
        borderRadius: "30px",
        boxShadow: getBoxShadow(),
        background: getBackgroundColor(),
        transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <CampoNomeCartao nome = {formData.nomeCartao}/>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <CampoNumeroCartao numero = {formData.numero}/>
      </div>
      <div className="flex">
        <div style={{ marginRight: "23px" }}>
          <CampoCvv cvv={formData.cvv} />
        </div>
        <div style={{ marginLeft: "23px" }}>
          <CampoValidade validade={formData.validade}/>
        </div>
      </div>
      <div style={{ marginBottom: "100px", marginTop: "40px" }}>
        <BotaoSalvarCartao />
      </div>
      </form>
      <div style={{ marginRight: "300px", marginTop: "-200px" }}>
        <Image src="/chip.png" alt="chip" width="50" height="50" />
      </div>
    </div>
    );
  }
