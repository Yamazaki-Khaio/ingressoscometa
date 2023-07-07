export default function RadioButton(props: any){
    return(
        <div className="flex flex-col gap-4 mt-2 mb-4">
            <label>Cadastre-se como {props.optional ? (
          <span className="text-red-600 text-bold">*</span>
        ) : null}</label>
            <div className="flex gap-2">
                <div className="flex items-center gap-2">
                    <input type="radio" name="tipoUsuario" id="cliente" value="cliente" defaultChecked/>
                    <label htmlFor="cliente">Cliente</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="tipoUsuario" id="promoter" value="promoter"/>
                    <label htmlFor="promoter">Promoter</label>
                </div>
            </div>
        </div>
    )
}
