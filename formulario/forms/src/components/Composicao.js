import React from 'react'

const Composicao = ({children}) => {
  return (
    <div>
        <h1>Renderizo este titulo</h1>
        {children}
    </div>
  )
}

export default Composicao