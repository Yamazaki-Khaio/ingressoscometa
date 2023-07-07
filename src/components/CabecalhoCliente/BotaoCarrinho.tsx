import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function BotaoEntrar() {
  return (
    <div>
      <button
        className={`
          flex items-center
          bg-transparent
          text-black
          text-24
          rounded-3xl
          transition-all duration-300
          hover:text-green-600
          h-14
        `}
      >
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        Carrinho
      </button>
    </div>
  );
}
