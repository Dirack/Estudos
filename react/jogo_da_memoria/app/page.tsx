"use client"
import Image from 'next/image'
import * as C from './App.styles'
import logoImage from './assets/devmemory_logo.png'
import { useEffect, useState } from 'react'
import { InfoItem } from './components/InfoItem'
import { Button } from './components/Button'
import restartSVG from './svgs/restart.svg'
import { GridItemType } from './types/GridItem'

const Page = ()=>{
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed,setTimeElapsed] = useState<number>(0)
  const [moveCount,setMoveCount] = useState<number>(0)
  const [shownCount,setShownCount] = useState<number>(0)
  const [gridItems,setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(),[])

  const resetAndCreateGrid = ()=>{

  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <Image src={logoImage} width={200} alt='' priority />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value='00:00' />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button label='Reiniciar' icon={restartSVG.src} onClick={resetAndCreateGrid} />
      </C.Info>
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  )
}

export default Page