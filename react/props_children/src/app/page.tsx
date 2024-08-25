import Person from "./components/Person/Person"
import Card from "./components/Card/Card"

function Page(){
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo, ReactJS!</h1>
      <h2>Algum texto aleatório</h2>
      <Card>
        <><h3>Frase aleatória</h3></>
      </Card>
      <Person name="Elon Musk" avatar="./img/elon.jpeg" roles={['CEO Tesla','CEO spacex']} />
      <Person name="Jeff Bezos" avatar="./img/jeff.jpg" roles={['CEO Amazon','Rico']} />
      <Person name="Fulano" roles={['Desempregado','Geração nem-nem']} />
    </div>
  )
}

export default Page