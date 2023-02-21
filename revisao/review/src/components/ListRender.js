import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["banana", "uva", "maça", "pera", "laranja"]);
  return (
    <div>Lista de frutas
        <ul>
            {list.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender