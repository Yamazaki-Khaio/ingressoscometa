import React, { useState } from "react";

type Setor = "VIP" | "Backstage" | "Camarote" | "Nenhum";

type Props = {
  setores: Array<{
    id: number;
    nome: string;
    quantidade_ingresso: number;
    id_evento: number;
    preco: number;
  }>;
};

export default function ChoiceBox(props: Props) {
  const [selectedSetor, setSelectedSetor] = useState<Setor | undefined>(undefined);

  const handleSetorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Setor;
    setSelectedSetor(value);
  };

  return (
    <div className="">
      <select
        id="setor"
        value={selectedSetor || ""}
        onChange={handleSetorChange}
        className="border w-50 border-gray-400 rounded-md p-2 mb-8"
      >
        <option value="" disabled>
          Escolha seu setor
        </option>
        {props.setores.map((setor) => (
          <option key={setor.id} value={setor.nome}>
            {setor.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
