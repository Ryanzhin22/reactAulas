import Botao from "./Button/Botao"

function Evento(){

    function meuEvento(){
        console.log(`Opa! fui disparado.`)
    }
    function segundoEvento(){
        console.log("Disparando segundo evento")
    }

    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Botao evento={meuEvento} texto="Primeiro Botao" />
            <Botao evento={segundoEvento} texto="Segundo Botao" />
        </>
    )
}

export default Evento