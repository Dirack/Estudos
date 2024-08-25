import "./Person.css"

type Props = {
    name: string;
    avatar?: string;
    roles: string[];
}

const Person = ({
    name,
    avatar="./img/default.jpg",
    roles
}:Props)=>{
    return (
        <div className="p-3">
            <h1>{name}</h1>
            <img
            src={avatar}
            alt={name}
            className="w-40"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    )
}

export default Person