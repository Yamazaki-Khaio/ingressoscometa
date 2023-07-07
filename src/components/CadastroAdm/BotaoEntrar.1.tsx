export default function BotaoEntrar() {
    return (
        <div>
            <input
                type="submit"
                value="Login"
                className={`
                     w-48 h-12
                     bg-teal-900
                     text-white
                     text-24
                     rounded-3xl
                     transition-all duration-300
                     hover:bg-teal-800
                     active:bg-teal-700
                     cursor-pointer // adicionando o estilo de cursor de ponteiro
                `}
            />
        </div>
    );
}
