import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Buffer } from 'buffer'; 
// configuração do slider de eventos em destaque
const settings = {
  className: "center mx-5",
  dots: true,
  infinite: true,
  arrows: false,
  centerPadding: "50px",
  rows: 1,
  speed: 2000,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  adaptiveHeight: true,
  pauseOnHover: true,
  sliderWidth: 100,
  slideMargin: 100,
};

export default function DestaqueSemana(props: any) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventosDestaque();
  }, []);
  //busca os eventos em destaque no banco de dados
  const fetchEventosDestaque = async () => {
    try {
      const response = await axios.get('/api/evento');
      setEventos(response.data);
    } catch (error) {
      console.error('Erro ao buscar eventos de destaque:', error);
    }
  }
  //convertendo a imagem para url base64
  const convertBufferToUrl = (buffer: any) => {
    const imageData = Buffer.from(buffer.data).toString('base64');
    return `data:image/png;base64,${imageData}`;
  }
// renderiza os eventos cadastrado no slide de eventos em destaque
  return (
    <div className="relative flex-wrap justify-center items-center p-4 gap-4">
      <Slider {...settings}>
        {eventos.map((eventoDestaque: any, index: number) => (
          <div key={index} className="destaque-evento">
            <img
              src={convertBufferToUrl(eventoDestaque.imagem)}
              alt={eventoDestaque.nome_evento}
              className="w-[500px] h-[300px] object-cover rounded-xl border-separate border-4 border-zinc-100"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
