import React, { useState } from 'react';

const Filtro: React.FC = () => {
  const [termoBusca, setTermoBusca] = useState<string>('');
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('');

  const handleSearch = (): void => {
    // Logica de busca
    console.log(`Realizando busca por: ${termoBusca}, Opção selecionada: ${opcaoSelecionada}`);
  };

  const handleOptionChange = (opcao: string): void => {
    setOpcaoSelecionada(opcao);
  };

  return (
    <div>
      <select
        className="rounded bg-white text-black p-2"
        value={opcaoSelecionada}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        <option value="">Selecione uma opção</option>
        <option value="setor">Filtrar por setor</option>
        <option value="quantidade">Filtrar por quantidade de ingressos</option>
      </select>
      
      <button
        onClick={handleSearch}
        disabled={!opcaoSelecionada}
        className="bg-green-500 text-white rounded px-4 py-2"
      >
        Buscar
      </button>
    </div>
  );
};

export default Filtro;
