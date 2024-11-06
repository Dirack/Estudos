
var ch = []

const getHorizon = async ()=>{
  let response = await fetch('new_data_base-estendida/Bacia_do_Rio_do_Peixe/Export/Base_BRP_Interpol_convex_hull_lat_lon.geojson')

  let json = await response.json()

  let coordinates = await json.features[0].geometry.coordinates[0]

  console.log(coordinates)

  coordinates.map(c => {
    ch.push(c[0])
    ch.push(c[1])
  })

}

getHorizon()

console.log(ch)