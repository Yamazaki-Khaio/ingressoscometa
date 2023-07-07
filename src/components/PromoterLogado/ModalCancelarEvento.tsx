import React, { useState } from "react";
import BotaoCancelar from "../Modal/BotaoCancelarModal";
import BotaoConfirmarCompra from "../Modal/BotaoConfirmarModal";
import axios from "axios";
import BotaoConfirmar from "./BotaoConfirmar";

interface ModalProps {
  mensagem: string;
  eventoId: number,
  onClose: () => void;
}

interface FormData {
  id: string
}



const ModalCancelarEvento: React.FC<ModalProps> = ({ mensagem, onClose, eventoId }) => {
  const [formData, setFormData] = useState<FormData>({
    id: eventoId.toString()
  });
  async function Deletar(event: React.ChangeEvent<HTMLInputElement>){
  try{
    await fetch(`/api/evento?id=${formData.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
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
          <BotaoConfirmar onClick={Deletar}/>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelarEvento;