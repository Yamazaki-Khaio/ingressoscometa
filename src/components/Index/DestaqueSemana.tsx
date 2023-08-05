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
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  adaptiveHeight: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "50px",
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerPadding: "50px",
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px",
        slidesToScroll: 1,
      },
    },
  ],


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
      <div className="slider-container">
      <Slider {...settings}>
        {eventos.map((eventoDestaque: any, index: number) => (
          <div key={index} className="destaque-evento">
            <img
              src={convertBufferToUrl(eventoDestaque.imagem)}
              alt={eventoDestaque.nome_evento}
              className="w-full h-full object-cover rounded-xl border-separate border-4 border-zinc-100"
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}
