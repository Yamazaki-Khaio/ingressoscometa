import React, { FormEventHandler, useState } from 'react';
import BotaoEnviarEmail from "./BotaoEnviarEmail";
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoEmailEsqueciSenha from '../CadastroUsuario/CampoEmailEsqueciSenha';
import fetch from 'isomorphic-unfetch';
import 'tailwindcss/tailwind.css';

const EsquecerSenha: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const form = {
        email: document.getElementById('email').value,
        id: ''
      };
      console.log(form.email)
      const res = await fetch(`/api/email?email=${form.email}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      console.log(res)
      if (res.ok) {
        const data = await res.json();
        console.log(data[0].id_usuario)
        if (data[0].id_usuario) {
          // O email existe no banco de dados
          console.log("O email está no banco");
          setEmailExists(true);
          form.id = data[0].id_usuario
          const res = await fetch(`/api/email_esqueci_senha`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
          });

          setIsButtonDisabled(true); // Desativa o botão de enviar
        } else {
          // O email não existe no banco de dados
          console.log("O email não está no banco");
          setEmailExists(false);
          setIsButtonDisabled(false); // Habilita o botão de enviar
        }
        setEmailSent(true);
      } else {
        // Lógica adicional para lidar com erros na resposta da API
        console.log("Erro ao verificar o email no banco de dados");
        setEmailSent(true);
        setEmailExists(false);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      // Lógica adicional para lidar com erros no envio dos dados
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold p-5">Informe seu e-mail associado à sua conta!</h2>
        <CampoEmailEsqueciSenha />
        <div className="flex">
          <BotaoCancelar href='/login' />
          <BotaoEnviarEmail
            disabled={isButtonDisabled}
            className={`bg-teal-900 text-white text-24 rounded-3xl transition-all duration-300 hover:bg-teal-800 active:bg-teal-700 ${isButtonDisabled ? 'bg-teal-200 cursor-not-allowed' : ''}`}
          />
        </div>
      </form>

      {emailSent && (
        <p className={`${!emailExists ? 'text-red-500' : ''}`}>
          {emailExists
            ? "Email de alteração de senha enviado, verifique sua caixa de email"
            : "E-mail não encontrado no banco de dados."}
        </p>
      )}
    </div>
  );
};

export default EsquecerSenha;
