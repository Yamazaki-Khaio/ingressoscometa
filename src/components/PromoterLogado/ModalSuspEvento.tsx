import React from "react";
import BotaoCancelar from "../Modal/BotaoCancelarModal";
import BotaoConfirmarCompra from "../Modal/BotaoConfirmarModal";
import axios from "axios";
import BotaoConfirmar from "./BotaoConfirmar";

interface ModalProps {
  mensagem: string;
  eventoId: number,
  onClose: () => void;
}

const ModalSuspEvento: React.FC<ModalProps> = ({ mensagem, onClose, eventoId }) => {
  async function Suspender(event: React.ChangeEvent<HTMLInputElement>){
  try{
  const formEvento = {
      id: eventoId,
      ativado: 0
    };
  const resEvento = await fetch(`/api/evento?id=${formEvento.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formEvento)
    });
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
    // Lógica adicional para lidar com erros no envio dos dados
  }
  window.location.reload();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
      <div className="bg-white rounded-lg w-570 h-254 p-4">
        <p className="text-lg font-bold text-center">{mensagem}</p>
        <div className="flex p-4">
          <BotaoCancelar onClick={onClose}/>
          <BotaoConfirmar onClick={Suspender}/>
        </div>
      </div>
    </div>
  );
};

export default ModalSuspEvento;