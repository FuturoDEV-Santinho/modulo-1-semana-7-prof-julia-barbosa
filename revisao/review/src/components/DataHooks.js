import React from 'react';
import { useState } from 'react';

const DataHooks = () => {
    let nota = 10;
    const [number, setNumber] = useState(10);

  return (
    <div>SIMULAR MUDANÇA DE NOTA DE ALUNO
        <h1>nota: {nota}</h1>
        <button onClick={() => (nota = 15)}> mudar nota </button>
        <h1>nota: {number}</h1>
        <button onClick={() => setNumber(5)}> mudar nota </button>
    </div>
  )
}

export default DataHooks