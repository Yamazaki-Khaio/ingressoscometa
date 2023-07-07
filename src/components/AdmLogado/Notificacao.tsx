import Link from 'next/link';

export default function Notificacao(props:any){

   

    return(
        //notificacoes deve ser um array do tipo iNotificacao 
        <div className="flex flex-col w-5/6 mr-36 ml-auto justify-center items-center m-12 bg-white rounded-lg shadow-md shadow-xl-bottom">
            <div className='p-8'>
                
                {props.notificacoes.map(link => <Link className='flex w-614 h-27 left-72 top-75 p-4 font-poppins font-medium text-base leading-27 text-blac border-b border-gray-600 hover:text-purple-400' href={link.href}><br/>{link.descricao}<br/></Link> )}
            
            </div>
        </div>
    )
}