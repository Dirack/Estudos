"use client"

import { useState } from "react";

export type Color = 'yellow' | 'blue' | 'red' | 'green' | 'gray'

type Props = {
    color: Color;
}

const Ball = ({color}: Props)=>{

    let classe: string = `w-8 h-8 rounded-full border-black border-2 bg-${color}-200`

    return (
        <div className={`${classe}`}></div>
    )
}

export default Ball