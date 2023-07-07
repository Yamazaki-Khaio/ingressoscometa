import { useState } from "react";
import InputMask from "react-input-mask";

export default function CampoTelefone(props: any) {
  const [telefone, setTelefone] = useState('');

  function handleTelefoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="telefone">Telefone
      {props.optional ? (
          <span className="text-red-600 text-bold"> *</span>
        ) : null}
        </label>
      <InputMask
        mask="(99)99999-9999"
        type="tel"
        name="telefone"
        id="telefone"
        placeholder="(99)99999-9999"
        required
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={telefone}
        onChange={handleTelefoneChange}
      />
    </div>
  )
}
