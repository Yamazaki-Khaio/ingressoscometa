import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function PerfilCampoEmail(props: any) {
  const [email, setEmail] = useState(props.email);

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const validCharactersRegex = /^[a-zA-Z0-9\-_.@]*$/; // Expressão regular para validar os caracteres permitidos no campo email

    if (validCharactersRegex.test(value)) {
      setEmail(value);
    }
  }
  useEffect(() => {
    setEmail(props.email);
  }, [props.email]);

  function handleEditar(event: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

    return(
      <><label className="flex flex-col gap-1 rounded-md mb-2"  htmlFor="email">E-mail</label >
      <div className="input-group border w-64 border-gray-400 rounded-md p-2 mb-4">
          <input
              disabled
              type="text"
              name="email"
              id="email"
              maxLength={50}
              placeholder="Insira o email"
              required
              onInvalid={(e) => {
                  e.preventDefault();
                  alert("Algo deu errado. Tente novamente.");
              } }
              value={email}
              onChange={handleEmailChange} />
      </div></>
      
  )
}
