export default function lista3() {
    
    return(
        <div>{gerarnumero(100)}</div>
    )
}


function gerarnumero(final = 10) {
    const numero = [];
    for (let i = 0; i <= final; i++){
        numero.push(<span>{i}<br></br></span>)
    }
    return numero

}