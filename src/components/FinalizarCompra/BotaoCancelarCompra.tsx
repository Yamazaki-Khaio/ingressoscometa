import React from 'react';
import Link from "next/link"

export default function BotaoCancelarCompra(props: {href: string}) {
    return (
      <div className="p-2">
         <Link href={props.href}>
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
        />
        </Link>
      </div>
    );
  }
  