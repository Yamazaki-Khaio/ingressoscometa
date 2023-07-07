import BotaoConfirmarCompra from "./BotaoConfirmarCompra"
import BotaoCancelarCompra from "./BotaoCancelarCompra"

export default function FinalizarCompra() {
    const enviarEmail: MouseEvent<HTMLButtonElement, MouseEvent> = async(e) =>{
        e.preventDefault();
        try {
            const form = {
              email: "tassiocarvalhor@gmail.com",
              id: ''
            };
            console.log(form.email)
            const res = await fetch(`/api/email?email=${form.email}`, {
              method: 'GET',
              headers: {
                "Content-Type": "application/json"
              },
            });
            console.log(res)
            if (res.ok) {
              const data = await res.json();
              console.log(data[0].id_usuario)
              if (data[0].id_usuario) {
                // O email existe no banco de dados
                console.log("O email está no banco");
                form.id = data[0].id_usuario
                const res = await fetch(`/api/email_send_compra`, {
                  method: 'POST',
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(form),
                });
                

              } else {
                // O email não existe no banco de dados
                console.log("O email não está no banco");
              }

            } else {
              // Lógica adicional para lidar com erros na resposta da API
              console.log("Erro ao verificar o email no banco de dados");
            }
          } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            // Lógica adicional para lidar com erros no envio dos dados
          }
    };

    return (
        <div className="flex h-screen justify-center items-center flex-col">
    <div
        className=" w-1/4 h-80 bg-[url('http://localhost:3000/')] bg-gray-100 bg-center">
        <div className="w-full h-full flex items-center justify-center bg-white backdrop-brightness-50">
            <div className="absolute bottom-0 right-0 ...">
                <button onClick={enviarEmail}>
                <BotaoConfirmarCompra  />
                </button>
            </div>
            <div className="absolute bottom-0 left-0 ...">
            <BotaoCancelarCompra href="/carrinho"/>
            </div>
                
                <div className="absolute left-30 top-10 text-xl ...">Deseja confirmar a compra?</div>
        </div>
    </div>
</div>
    )
}