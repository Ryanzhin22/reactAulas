function Saudacao({nome}){

    function criarSaudacao(algumNome){
        return(
            `Olá ${algumNome}, tudo bem?`
        )          
    }

    return(
        <>  
            {nome && <p>{criarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao