export default function BotaoSalvarCartao() {
    return (
      <div>
        <input
          type="submit"
          value="Salvar Cartão"
          className={`
          w-36 h-10
          bg-transparent
          border-2 border-black
          text-white
          transition-all duration-300
          hover:bg-black hover:bg-opacity-25
          active:bg-black active:bg-opacity-50
          outline-none
          rounded-2xl
          `}
        />
      </div>
    );
  }
  