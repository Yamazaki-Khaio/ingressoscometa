import { useState } from "react";

export default function CampoEmail(props: any) {
  const [email, setEmail] = useState('');

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const validCharactersRegex = /^[a-zA-Z0-9\-_.@]*$/; // Expressão regular para validar os caracteres permitidos no campo email

    if (validCharactersRegex.test(value)) {
      setEmail(value);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="email">Email
      {props.optional ? (
          <span className="text-red-600 text-bold"> *</span>
        ) : null}</label>
      <input
        type="text"
        name="email"
        id="email"
        maxLength={30}
        placeholder="exemplo@gmail.com"
        required
        onInvalid={(e) => {
          e.preventDefault();
          alert("Algo deu errado. Tente novamente.");
        }}
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  )
}
