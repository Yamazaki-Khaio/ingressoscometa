import React from 'react';

interface DadosEvento {
  evento: string;
  ingressosVendidos: number;
  totalArrecadado: number;
}

interface TabelaProps {
  dados: DadosEvento[];
}

const Tabela: React.FC<TabelaProps> = ({ dados }) => {
  return (
    <table className="border-collapse custom-table">
      <thead>
        <tr className="">
          <th className="py-2 px-4 bg-blue-100 rounded-tl-lg">Eventos</th>
          <th className="py-2 px-4 bg-blue-100">Total de Ingressos Vendidos</th>
          <th className="py-2 px-4 bg-blue-100 rounded-tr-lg">Total Arrecadado R$</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border text-center">{item.evento}</td>
            <td className="py-2 px-4 border text-center">{item.ingressosVendidos}</td>
            <td className="py-2 px-4 border text-center">{item.totalArrecadado.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
