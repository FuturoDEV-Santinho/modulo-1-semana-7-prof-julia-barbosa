import React from 'react'
import './Formulario.css'
import { useState } from 'react'

const Formulario = ({user}) => {

    const [name, setName] = useState(user ? user.name : " ")
    const [email, setEmail] = useState(user ? user.email : " ")
    const [idade, setIdade] = useState(user ? user.idade : " ")
    const [comentario, setComentario] = useState()
    const [areas, setAreas] = useState()

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("name:", name,"email:" ,email, "idade:", idade, "comentario:", comentario, "areas:", areas)

        setName(" ")
        setEmail(" ")
        setIdade(" ")
        setComentario(" ")
        setAreas(" ")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span className='nome'>Nome:</span>
                <input name='name' placeholder='Digite seu nome' type="text" onChange={handleName} value={name}/>
            </label>
            <label>
                <span className='nome'>Email:</span>
                <input name='email' placeholder='Digite seu email' type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <label>
                <span className='nome'>idade:</span>
                <input name='idade' placeholder='Digite sua idade' type="number" value={idade} onChange={(event) => setIdade(event.target.value)}/>
            </label>
            <label>
                <span>Comentário:</span>
                <textarea name='comentario' placeholder='digite seu comentario' value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
            </label>
            <label>
                <span>Areas de atuação em TI:</span>
                <select name='areas' onChange={(e) => setAreas(e.target.value)}>
                    <option value="frontend">Front end</option>
                    <option value="backend">Back end</option>
                    <option value="qa">QA</option>
                    <option value="tester">Tester</option>
                    <option value="scrum">Scrum Master</option>
                </select>
            </label>
            <input type="submit" value="enviar" style={{marginLeft: "10px"}}/>
            <button type="submit" value="enviar"  style={{marginLeft: "10px"}}>
                botao enviar
            </button>
        </form>
    </div>
  )
}

export default Formulario