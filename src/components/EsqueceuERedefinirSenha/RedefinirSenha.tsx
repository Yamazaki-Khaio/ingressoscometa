import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BotaoConfirmarSenhaNova from "./BotaoConfirmarSenhaNova";
import BotaoCancelar from './BotaoCancelar';
import CampoSenhaERepetirSenha from "../CadastroUsuario/CampoSenhaERepetirSenha";
import { getSession } from 'next-auth/react';
import { createHash } from 'crypto';

const EsquecerSenha: React.FC = () => {
  const [id_usuario, setIdUsuario] = useState("");
  const [senhaAlterada, setSenhaAlterada] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);
      console.log(userId);
    }
    getUserId();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const novaSenha = document.getElementById('senha').value;
      const hash = createHash('sha256');
      hash.update(novaSenha);
      const form = {
        id: id_usuario,
        senha: hash.digest('hex'),
      };
      const res = await fetch(`http://localhost:3000/api/usuario?id=${id_usuario}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });
      setSenhaAlterada(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (senhaAlterada) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="font-bold p-5">Senha alterada com sucesso!</h2>
        <p>Agora você pode fazer login com sua nova senha.</p>
        <button onClick={() => router.push('/login')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Ir para a tela de login</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold p-5">Insira a nova senha!</h2>
      <CampoSenhaERepetirSenha />
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <BotaoCancelar href='/perfil' />
          <BotaoConfirmarSenhaNova href='/login' />
        </form>
      </div>
    </div>
  );
};

export default EsquecerSenha;
