export default function jsx4() {

    const subtutulo = 'Etou no JavaScript!'
    let outroSubtitulo = 'Continuo no JavaScript'

    return (
        <div>
            <div>
            <h1>Integracão JS e JSX</h1>
            <h2>{subtutulo}</h2>
            <h3>{3 * 3}</h3>
            <h3>{Math.max(25, 89)}</h3>
            <h3>{Math.min(95, 358)}</h3>
            <h4>{entre(7, 1, 10)}</h4>
            </div>
        </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return "Sim"
    } else {
        return "Não"
    }
}