import { peoplesList } from "../data/data"

const PeoplesList = ()=>{

    let vagabundos = peoplesList.filter(people => !(people.profissao))

    return (
        <>
        <div>
            <h1>Lista de pessoas:</h1>
            <ul>
                {peoplesList.map(people => {
                    return <li>id: {people.id} nome: {people.nome} Profissão:
                    {people.profissao &&
                        <span className="text-blue-600"> {people.profissao}</span>}
                    {!people.profissao &&
                        <span className="text-red-600"> Vagabundo</span>}
                    </li>
                })}
            </ul>
        </div>
        <div>
            <h1>Lista de vagabundos:</h1>
            <ul>
                {vagabundos.map(people => {
                    return <li>id: {people.id} nome: {people.nome}</li>
                })}
            </ul>
        </div>
        </>
    )
}

export default PeoplesList