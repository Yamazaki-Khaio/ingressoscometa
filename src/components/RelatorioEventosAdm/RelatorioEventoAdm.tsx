import React from 'react';
import Tabela from './TabelaEventoAdm';

const dados = [
  { evento: 'Sandy e Júnior: o retorno Pleno', ingressosVendidos: 52, totalArrecadado: 200000.00 },
  { evento: 'Patati Patatá Show do ano', ingressosVendidos: 157, totalArrecadado: 801200.00 },
  { evento: 'Zeca Pagodinho as melhores', ingressosVendidos: 80, totalArrecadado: 701000.00 },
  { evento: 'Bruno e Marrone as antigas', ingressosVendidos: 71, totalArrecadado: 502000.00 },
  { evento: 'O circo 07 anões', ingressosVendidos: 171, totalArrecadado: 902000.00 },
];

const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4">
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Relatório de Eventos</h1>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 mt-4">
            <h3 className="text-xl font-semibold">Tabela de Eventos</h3>
            <Tabela dados={dados} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
