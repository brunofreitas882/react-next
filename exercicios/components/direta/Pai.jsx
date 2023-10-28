import Filho from "./Filho";

export default function Pai() {
    return (
        <div>
            <h1>Família</h1>
            <Filho nome="Carlos" familia="Albuquerque" />
            <Filho nome="Pedro" familia="Santos" />
            <Filho nome="Joana" familia="Albuquerque" />
            <Filho nome="Maria" familia="Santos" />
        </div>
    )
}