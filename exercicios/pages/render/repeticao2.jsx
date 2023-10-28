import listaProdutos from "@/data/listaProdutos"

export default function repeticao2() {
    function renderizarLinhas() {
        return listaProdutos.map((Produto) =>{
            return(
                <tr key = {Produto.id}>
                    <td>{Produto.id}</td>
                    <td>{Produto.nome}</td>
                    <td>{Produto.preco}</td>
               </tr>
            )
        }
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}