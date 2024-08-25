import { TypeTask } from "@/app/types/TypeTask"

type Props = {
    task: TypeTask
}

const Task = ({task}:Props)=>{
    return (
        <div>
            id: {task.id} Nome: {task.nome} Data: {task.data} Status: {task.done?"Done":"To do"}
        </div>
    )
}

export default Task