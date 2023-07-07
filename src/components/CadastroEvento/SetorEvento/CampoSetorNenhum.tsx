import { useState } from "react";


export default function CampoSetorNenhum(props: any) {
  const[setor, setSetor] = useState("")
  const[qnt, setQnt] = useState("")
  const[preco, setPreco] = useState("")

    function handleQntChange(event: React.ChangeEvent<HTMLInputElement>){
      setQnt(event.target.value)
    }

    function handleSetorChange(event: React.ChangeEvent<HTMLInputElement>){
      setSetor(event.target.value)
    }

    function handlePrecoChange(event: React.ChangeEvent<HTMLInputElement>){
      setPreco(event.target.value)
    }

    function NenhumClick(){
      if (setor == ""){
        setSetor("Nenhum")
      }else{
        setSetor("")

      }
    }

  return (
    
    <div className="flex flex-col justify-center">
       <input 
        id = "setor_nenhum"
        type="text"
        className="border w-1/12 border-gray-400 rounded-md p-2 mb-8"
        value={setor}
        style={{visibility: "collapse"}}
        onChange={handleSetorChange}
      />
      <div className="r1" style={{wordSpacing: '40px'}}>
      Nenhum: <input 
      type="checkbox" 
      id="NenhumCheck" 
      value = {setor}
      onClick={NenhumClick}
      className="border w-10 border-gray-400 justify-center rounded-md">
      </input>

      </div>
      </div>
  );
}
