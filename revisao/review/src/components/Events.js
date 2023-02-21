import React from 'react'

const handleAtivouAqui = () =>{
    console.log('ativou o evento')
}

const Events = () => {
  return (
    <div>Events
        <button onClick={handleAtivouAqui}>
            Clique aqui
        </button>
    </div>
    
  )
}

export default Events