import React from 'react';
import { BotaoPerfil } from './BotaoPerfil';
import { BotaoRelatorios } from './BotaoRelatorio';
import { BotaoEventos } from './BotaoEventos';
import BotaoLogout from "../ClienteLogado/BotaoLogout"
import Image from 'next/image'

const App: React.FC = () => {
  return (
    <div className="shadow-xl p-12 rounded-lg">
      <Image src="/cometa2.png" alt="Logo" width="170" height="170"/>
      <BotaoEventos/>
      <BotaoRelatorios/>
      <BotaoPerfil/>
      <BotaoLogout/>
    </div>
  );
};

export default App;
