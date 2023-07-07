import Link from "next/link";

interface BotaoProps {
  href?: string;
  NomeBotao: string;
  onClick?: () => void;
  oculto?: boolean;
}

const Botao: React.FC<BotaoProps> = ({ href, NomeBotao, onClick, oculto }) => {
  if (oculto) {
    return null;
  }

  if (href) {
    return (
      <div>
        <Link href={href}>
          <button
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
            role="button"
          >
            {NomeBotao}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <button
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
        onClick={onClick}
        role="button"
      >
        {NomeBotao}
      </button>
    </div>
  );
};

export default Botao;
