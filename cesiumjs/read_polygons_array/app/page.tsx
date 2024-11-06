"use client"

import axios from "axios"

const Page = ()=>{

  const paths = [
                  'new_data_base-estendida/Foz_do_Amazonas_ANP/Export/Fundo_do_mar_convex_hull_lat_lon.geojson',
                  'new_data_base-estendida/Bacia_do_Rio_do_Peixe/Export/Base_BRP_Interpol_convex_hull_lat_lon.geojson',
                  'new_data_base-estendida/LGI_NAMORADO/Export/Base do Sal_Namorado_convex_hull_lat_lon.geojson',
                ]

  const getHorizon = ()=>{

    const horizons: number[][] = []

    paths.forEach(async (horizon) => {
      const response = await axios.get(horizon)

      let coordinates: number[]= []
      
      response.data.features[0].geometry.coordinates[0]
                        .map((c: number[]) => {
                          coordinates.push(c[0])
                          coordinates.push(c[1])
                        })
      
      horizons.push(coordinates)
    })

    console.log(horizons)
  }

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
      <button onClick={getHorizon} className="bg-yellow-500 rounded-md p-2 font-bold">Get horizons list</button>
    </div>
  )
}

export default Page