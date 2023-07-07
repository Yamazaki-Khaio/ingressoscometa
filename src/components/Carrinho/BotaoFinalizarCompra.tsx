import { useState } from "react";
import Modal from "../Modal/Modal";

interface BotaoFinalizarCompraProps {
    frase: string;
    caminho: string;
  }

  const BotaoFinalizarCompra: React.FC<BotaoFinalizarCompraProps> = ({ frase, caminho }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    return(
       
        <div>
            <input onClick={() => setIsModalVisible(true)} 
                    type="submit" value="Finalizar Compra" className={`
                     w-48 h-12  // diminuindo o comprimento do botão
                     bg-teal-900 
                     text-white 
                     text-24 
                     rounded-3xl  // aumentando o valor do border-radius
                     transition-all duration-300  // adicionando um efeito de transição
                     hover:bg-teal-800  // adicionando uma cor de fundo quando o botão é hoverado
                     active:bg-teal-700  // adicionando uma cor de fundo quando o botão é clicado
                `} />
                {isModalVisible ? (<Modal mensagem={frase} onClose={() => setIsModalVisible(false)} link={caminho}></Modal>) : null}
        </div>
        
    )
}

export default BotaoFinalizarCompra;