import { useState } from "react" 

function Condicional(){

    function meuSubmit(e){
        e.preventDefault()
        console.log(`O email do usuário é: ${email}`)
    }

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    return(
        <>
            <h1>Cadastre seu Email:</h1>
            <form onSubmit={meuSubmit}>
                <input type="text" placeholder="digite seu email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email do usuário é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </>
    )
}

export default Condicional