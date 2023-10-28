function acao1(){
    console.log("acao1")
}

export default function botao(params){
    function acao2(){
        console.log("acao2")
    }

    function acao5(e){
        console.log(e)
    }

    return(
        <div>
            <button onClick={acao1}>Click $01</button>
            <button onClick={acao2}>Click #02</button>

            {/* Função anônima */}
            <button onClick={function () {console.log("acao3")}}>Click #03</button>

            {/* Fução arrom */}
            <button onClick={() => console.log("acao #04")}>Click # 04</button>
            <button onClick={() => alert("vai que e tua")}>Botão test</button>

            {/* recebendo eventos */}
            <button onClick={acao5}>Click #05</button>
        </div>
    )
}