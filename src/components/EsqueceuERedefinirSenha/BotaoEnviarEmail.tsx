import React from 'react';

interface BotaoEnviarProps {
  disabled?: boolean;
}

export default function BotaoEnviar({ disabled }: BotaoEnviarProps) {
  return (
    <div className="p-2">
      <input
        type="submit"
        value="Enviar"
        className={`
          w-48 h-12
          bg-teal-900
          text-white
          text-24
          rounded-3xl
          transition-all duration-300
          hover:bg-teal-800
          active:bg-teal-700
        `}
        disabled={disabled} // Aplica a propriedade disabled ao botão
      />
    </div>
  );
}


  