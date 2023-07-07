import React from 'react';
import Link from "next/link"

interface BotaoCancelarProps {
  onClick: () => void;
}

export default function BotaoCancelar(props: BotaoCancelarProps) {
  return (
    <div className="p-2">
        <input
          type="submit"
          value="Cancelar"
          className={`
            w-48 h-12
            bg-white
            text-black
            border border-black
            rounded-3xl
            transition-all duration-300
            hover:bg-gray-200
          `}
          onClick={props.onClick}
        />
    </div>
  );
}