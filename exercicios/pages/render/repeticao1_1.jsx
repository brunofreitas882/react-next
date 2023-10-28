export default function repeticao1(){
    const listaAprovados = ['Carlos', 'Maria', 'Paulo', 'Ricardo', 'Andréia', 'Fernado']

    function renderizarLista (){
        return listaAprovados.map((nome, i) => <li> {nome} </li>)
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}