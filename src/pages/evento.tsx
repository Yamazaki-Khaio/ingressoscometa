
import { useRouter } from 'next/router';
import PaginaEvento from "@/components/Evento/PaginaEvento";
import Layout from "@/components/CabecalhoCadastro/layout";
import LayoutCliente from '@/components/ClienteLogado/LayoutCliente';

export default function Evento() {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <LayoutCliente pagina={<PaginaEvento id={id} />} exibirBotao={false} exibirBotao2={true} exibirBotao3={true} />
    );
  }