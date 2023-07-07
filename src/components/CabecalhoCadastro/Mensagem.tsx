import React from 'react';

function Message(props:{mensagem?: string} ) {

    return (
        <div>
            <p id='menssage' className='text-red-500 hidden text-center'>{props.mensagem}</p>
        </div>
    );
   
}

export default Message;