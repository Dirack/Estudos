"use client"
import Image from 'next/image'
import * as C from './App.styles'
import logoImage from './assets/devmemory_logo.png'
import { useState } from 'react'
import { InfoItem } from './components/InfoItem'
import { Button } from './components/Button'
import restartSVG from './svgs/restart.svg'

const Page = ()=>{

  const [valor,setValor] = useState(0)

  const update = ()=>{
    let v = valor+1
    setValor(v)
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <Image src={logoImage} width={200} alt='' priority />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value='00:00' />
          <InfoItem label="Movimentos" value={valor.toString()} />
        </C.InfoArea>

        <Button label='Reiniciar' icon={restartSVG.src} onClick={update} />
      </C.Info>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  )
}

export default Page