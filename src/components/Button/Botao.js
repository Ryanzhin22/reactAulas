function Botao(props){
    return(
        <div>
            <button onClick={props.evento}>{props.texto}</button>
        </div>
    )
}

export default Botao