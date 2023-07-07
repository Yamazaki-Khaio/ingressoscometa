import React from "react"
import {ComboBoxComponent} from "@syncfusion/ej2-react-dropdowns"

export default function ComboBoxFiltroEventos(){
    
    const divStyle = {
        margin : 50,
        width : 10
    }

    return(
        <div style = {divStyle}>
            <ComboBoxComponent placeholder="Filtrar por"
            dataSource={['Nome', 'Data do evento']}
            popupHeight={'200px'} popupWidth={'200px'}
            > </ComboBoxComponent>
        </div>
    )
}