"use client"
import { useState } from "react";
import CesiumWrapper from "../components/CesiumWrapper"
import type { CesiumType } from '../types/cesium';
import React from "react";
import axios from "axios";

const paths = [
  'new_data_base-estendida/Foz_do_Amazonas_ANP/Export/Fundo_do_mar_convex_hull_lat_lon.geojson',
  'new_data_base-estendida/Bacia_do_Rio_do_Peixe/Export/Base_BRP_Interpol_convex_hull_lat_lon.geojson',
  'new_data_base-estendida/LGI_NAMORADO/Export/Base do Sal_Namorado_convex_hull_lat_lon.geojson',
  'new_data_base-estendida/LGI_NAMORADO/Export/fdm_Campos_convex_hull_lat_lon.geojson',
]

type HorizonType = {name:string,show:boolean,description:string,coordinates:number[]}[]

function getPosition() {

  const horizons: HorizonType = []

  paths.forEach(async (horizon) => {
    const response = await axios.get('http://localhost:3000/'+horizon)

    let coordinates: number[]= []
    
    response.data.features[0].geometry.coordinates[0]
                      .map((c: number[]) => {
                        coordinates.push(c[0])
                        coordinates.push(c[1])
                      })
    
    horizons.push({
      name: horizon,
      show: true,
      description: '',
      coordinates})
  })

  console.log(horizons)
  return horizons
}

export default function MainPage() {

  const fetchedPosition = getPosition()

  const [horizons,setHorizons] = React.useState<{name:string,show:boolean,description:string,coordinates:number[]}[]>(fetchedPosition)

  return (
    <div>
      <CesiumWrapper horizons={horizons} />
    </div>

  )
}