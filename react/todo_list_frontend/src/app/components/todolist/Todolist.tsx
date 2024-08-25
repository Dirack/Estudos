"use client"
import Task from "../task/Task"
import React from "react"
import { useState } from "react"
import { TypeTask } from "@/app/types/TypeTask"

import Title from "../title/Title"
import Menu from "../menu/Menu"

const Todolist = ()=>{
    const [tasks,setTasks] = useState<TypeTask[]>()

    const loadData = async ()=>{
        let response = await fetch("http://localhost:5000/all")
        let json = await response.json()
        console.log(json)
        setTasks(json)
    }

    return (
        <div>
            <Title />
            <div className="container mx-auto pt-6">
                <div>
                    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={loadData}>Load</button>
                </div>
                <div>
                    Number of tasks: {tasks?.length}
                    {tasks?.map((item,index)=>{
                        return(
                            <div key={index}>
                                <Task task={tasks[index]} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todolist