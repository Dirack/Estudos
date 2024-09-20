"use client"

import { Color } from "../Balls/Ball";

export type Eliminate = (color: Color) => void

type Props = {
    color: Color;
    eliminate: Eliminate;
}

const Button = ({color, eliminate}: Props)=>{

    let classe = `text-white bg-${color}-500 p-2 rounded mt-2 hover:bg-${color}-400 hover:cursor-pointer transition-all`
    return (
        <div
        className={`${classe}`}
        onClick={()=>eliminate(color)}
      >
        Eliminate
      </div>
    )
}

export default Button