import { useState } from "react"

function Form(){

    function meuSubmit(e){
        e.preventDefault()
        console.log(`Usuario: ${name} - Senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <form onSubmit={meuSubmit}>
            <div>
                <label htmlFor="name">Digite seu nome: </label>
                <input id="name" type="text" placeholder="Digite seu nome" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="password">Digite sua senha: </label>
                <input id="password" type="password" placeholder="Digite sua senha" onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default Form

