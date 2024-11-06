"use client"

import axios from "axios"

const Page = ()=>{

  const getHorizon = async ()=>{

    const response = await axios.get('new_data_base-estendida/Bacia_do_Rio_do_Peixe/Export/Base_BRP_Interpol_convex_hull_lat_lon.geojson')

    let coordinates: number[]= []
    
    response.data.features[0].geometry.coordinates[0]
                      .map((c: number[]) => {
                        coordinates.push(c[0])
                        coordinates.push(c[1])
                      })
    console.log(coordinates)
  }

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
      <button onClick={getHorizon} className="bg-yellow-500 rounded-md p-2 font-bold">Get horizon</button>
    </div>
  )
}

export default Page