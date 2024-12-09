import { Radar } from "./components/Radar"
import { data } from "./components/data"

const Page = ()=>{
  return (
    <div>
        <Radar
    data={data}
    width={500}
    height={500}
    axisConfig={[
      { name: 'speed', max: 10 },
      { name: 'acceleration', max: 10 },
      { name: 'conso', max: 10 },
      { name: 'safety', max: 2 },
      { name: 'style', max: 1000 },
      { name: 'price', max: 100 },
    ]}
  />,
    </div>
  )
}

export default Page