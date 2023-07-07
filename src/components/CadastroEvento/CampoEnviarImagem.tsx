import { ChangeEventHandler, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Compressor from "compressorjs";

interface ImageData {
  type: string;
  data: number[];
}

interface CampoEnvioImagemProps {
  onChange: (file: ImageData | undefined) => void;
  name: string;
}

export default function CampoEnvioImagem({
  onChange,
  name
}: CampoEnvioImagemProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const array = Array.from(new Uint8Array(arrayBuffer));
        onChange({ type: "Buffer", data: array });
        setImageUrl(URL.createObjectURL(file));
      };
      reader.readAsArrayBuffer(file);

      // Comprimir a imagem antes do envio
      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1024,
        maxHeight: 1024,
        success: (result) => {
          const compressedFile = new File([result], file.name, {
            type: result.type
          });
          reader.readAsArrayBuffer(compressedFile);
        },
        error: (error) => {
          console.error("Erro ao comprimir a imagem:", error);
        }
      });
    } else {
      onChange(undefined);
      setImageUrl(undefined);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(undefined);
    onChange(undefined);
  };


  return (
    <div>
      <div className="flex w-288 h-31 pb-4 left-745 top-1288">
        <p className="font-poppins font-normal text-22 leading-182 text-right">
          Adicionar foto do evento
        </p>
        <p className="font-poppins font-normal text-red-500 text-right mx-1 text-22 leading-182">
          <b>*</b>
        </p>
      </div>
      <div className="pb-6">
        {imageUrl ? (
          <div className="relative">
            <img
              src={imageUrl}
              alt="Imagem"
              className="max-w-64 h-auto"
              style={{ maxWidth: "200px" }}
            />
            <button
              className="absolute top-0 right-0 bg-gray-500 text-white px-2 py-1 rounded"
              onClick={handleRemoveImage}
            >
              <FaTimes className="text-red-500" />
            </button>
          </div>
        ) : (
          <label
            htmlFor={"arquivo"}
            className="block box-border w-100 h-5 text-center left-760 top-33 bg-gray-500 border-2 border-gray-300 rounded-lg pb-6 cursor-pointer"
          >
            Enviar Arquivo
          </label>
        )}
        <input
          type="file"
          accept="image/*"
          id="arquivo"
          name={name}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
