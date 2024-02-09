import Item from "./Item"

function Lista(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat" anoLancamento={1999} />
                <Item marca="UNO" anoLancamento={1849} />
                <Item />
            </ul>
        </>
    )
}

export default Lista