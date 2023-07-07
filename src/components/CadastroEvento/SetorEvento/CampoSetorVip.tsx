import { useState } from "react";


export default function CampoSetorVip(props: any) {
  const[setor, setSetor] = useState("")
  const[qnt, setQnt] = useState("")
  const[preco, setPreco] = useState("")
  const[checked, setChecked] = useState(false)

    function handleQntChange(event: React.ChangeEvent<HTMLInputElement>){
      setQnt(event.target.value)
    }

    function handleSetorChange(event: React.ChangeEvent<HTMLInputElement>){
      setSetor(event.target.value)
    }

    function handlePrecoChange(event: React.ChangeEvent<HTMLInputElement>){
      setPreco(event.target.value)
    }

      function VipClick(){
        if (setor == ""){
          setSetor("VIP")
        }else{
          setSetor("")
  
        }
      }

  return (
    
    <div className="flex flex-col justify-center">
       <input 
        id = "setor_vip"
        type="text"
        className="border w-1/12 border-gray-400 rounded-md p-2 mb-8"
        value={setor}
        style={{visibility: "collapse"}}
        onChange={handleSetorChange}
      />
      <div className="r1" style={{wordSpacing: '70px'}}>
      VIP: <input 
      type="checkbox" 
      id="VipCheck" 
      value = {setor}
      onClick={VipClick}
      //style={{width: "150px"}}
      className="border w-10 border-gray-400 justify-center rounded-md">
      </input>

      </div>
      </div>
  );
}
