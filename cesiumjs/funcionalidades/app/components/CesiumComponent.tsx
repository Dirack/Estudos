'use client'

import React from 'react'
import type { CesiumType } from '../types/cesium'
import { Cesium3DTileset, type Entity, type Viewer } from 'cesium';
import type { Position } from '../types/position';
//NOTE: It is important to assign types using "import type", not "import"
// import { dateToJulianDate } from '../example_utils/date';
//NOTE: This is required to get the stylings for default Cesium UI and controls
import 'cesium/Build/Cesium/Widgets/widgets.css';

export const CesiumComponent: React.FunctionComponent<{
    CesiumJs: CesiumType,
    positions: Position[],
    horizons: {name:string,show:boolean,description:string,coordinates:number[][]}[]
}> = ({
    CesiumJs,
    positions,
    horizons
}) => {
    const cesiumViewer = React.useRef<Viewer | null>(null);
    const cesiumContainerRef = React.useRef<HTMLDivElement>(null);
    const addedScenePrimitives = React.useRef<Cesium3DTileset[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const resetCamera = React.useCallback(async () => {
        // Set the initial camera to look at Seattle
        // No need for dependancies since all data is static for this example.
        if (cesiumViewer.current !== null) {
            cesiumViewer.current.scene.camera.setView({
                destination: CesiumJs.Cartesian3.fromDegrees(4.578568154397922, 54.79757982302541, 770000),
                orientation: {
                  heading: CesiumJs.Math.toRadians(90),
                  pitch: CesiumJs.Math.toRadians(-90),
                },
              });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cleanUpPrimitives = React.useCallback(() => {
        //On NextJS 13.4+, React Strict Mode is on by default.
        //The block below will remove all added primitives from the scene.
        addedScenePrimitives.current.forEach(scenePrimitive => {
            if (cesiumViewer.current !== null) {
                cesiumViewer.current.scene.primitives.remove(scenePrimitive);
            }
        });
        addedScenePrimitives.current = [];
    }, []);
    
    const initializeCesiumJs = React.useCallback(async () => {
        if (cesiumViewer.current !== null) {
            //Using the Sandcastle example below
            //https://sandcastle.cesium.com/?src=3D%20Tiles%20Feature%20Styling.html
            const osmBuildingsTileset = await CesiumJs.createOsmBuildingsAsync();
            
            //Clean up potentially already-existing primitives.
            cleanUpPrimitives();

            //Adding tile and adding to addedScenePrimitives to keep track and delete in-case of a re-render.
            const osmBuildingsTilesetPrimitive = cesiumViewer.current.scene.primitives.add(osmBuildingsTileset);
            addedScenePrimitives.current.push(osmBuildingsTilesetPrimitive);
            
            //Position camera per Sandcastle demo
            resetCamera();

            //We'll also add our own data here (In Philadelphia) passed down from props as an example
            // positions.forEach(p => {
            //     cesiumViewer.current?.entities.add({
            //         position: CesiumJs.Cartesian3.fromDegrees(p.lng, p.lat),
            //         ellipse: {
            //             semiMinorAxis: 50000.0,
            //             semiMajorAxis: 50000.0,
            //             height: 0,
            //             material: CesiumJs.Color.RED.withAlpha(0.5),
            //             outline: true,
            //             outlineColor: CesiumJs.Color.BLACK,
            //         }
            //     });
            // });

            let colors = [CesiumJs.Color.RED,CesiumJs.Color.BLUE,CesiumJs.Color.GREEN,CesiumJs.Color.YELLOW]
            let n = 0

            horizons.forEach(h => {

                let coordinatesArray: number[] = []

                h.coordinates.forEach(c => {
                    coordinatesArray.push(c[0])
                    coordinatesArray.push(c[1])
                })

                cesiumViewer.current?.entities.add({
                    id: h.name,
                    name: h.name,
                    show: h.show,
                    description: h.description,
                    polygon: {
                      hierarchy: CesiumJs.Cartesian3.fromDegreesArray(coordinatesArray.map(e => e+n*0.5)),
                      height: 0,
                      material: colors[n%colors.length].withAlpha(0.5),
                      outline: true,
                      outlineColor: CesiumJs.Color.BLACK,
                    },
                })

                n++
            })

            cesiumViewer.current?.zoomTo(cesiumViewer.current?.entities)

            //Set loaded flag
            setIsLoaded(true);

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [positions]);

    React.useEffect(()=>{
        if(isLoaded){
            // alert('oi')
            // let colors = [CesiumJs.Color.RED,CesiumJs.Color.BLUE]
            // let n = 0
    
            horizons.forEach(h => {
    
                let coordinatesArray: number[] = []
    
                h.coordinates.forEach(c => {
                    coordinatesArray.push(c[0])
                    coordinatesArray.push(c[1])
                })

                let poly = cesiumViewer.current?.entities.getById(h.name)
                if(poly) poly.show = h.show
    
                // cesiumViewer.current?.entities.add({
                //     name: h.name,
                //     show: h.show,
                //     description: "<p>Wyoming is the 10th most extensive, but the least populous \
                //     and the second least densely populated of the 50 United \
                //     States. The western two thirds of the state is covered mostly \
                //     with the mountain ranges and rangelands in the foothills of \
                //     the eastern Rocky Mountains, while the eastern third of the \
                //     state is high elevation prairie known as the High Plains. \
                //     Cheyenne is the capital and the most populous city in Wyoming, \
                //     with a population estimate of 63,624 in 2017.</p>",
                //     polygon: {
                //       hierarchy: CesiumJs.Cartesian3.fromDegreesArray(coordinatesArray.map(e => e+n*0.05)),
                //       height: 0,
                //       material: colors[n%colors.length].withAlpha(0.5),
                //       outline: true,
                //       outlineColor: CesiumJs.Color.BLACK,
                //     },
                // })
    
                // n++
            })
        }
    },[horizons])

    React.useEffect(() => {
        if (cesiumViewer.current === null && cesiumContainerRef.current) {
            //OPTIONAL: Assign access Token here
            //Guide: https://cesium.com/learn/ion/cesium-ion-access-tokens/
            CesiumJs.Ion.defaultAccessToken = `${process.env.NEXT_PUBLIC_CESIUM_TOKEN}`;

            //NOTE: Always utilize CesiumJs; do not import them from "cesium"
            cesiumViewer.current = new CesiumJs.Viewer(cesiumContainerRef.current, {
                //Using the Sandcastle example below
                //https://sandcastle.cesium.com/?src=3D%20Tiles%20Feature%20Styling.html
                terrain: CesiumJs.Terrain.fromWorldTerrain()
            });

            //NOTE: Example of configuring a Cesium viewer
            cesiumViewer.current.clock.clockStep = CesiumJs.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (isLoaded) return;
        initializeCesiumJs();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positions, isLoaded]);

    //NOTE: Examples of typing... See above on "import type"
    const entities: Entity[] = [];
    //NOTE: Example of a function that utilizes CesiumJs features
    // const julianDate = dateToJulianDate(CesiumJs, new Date());

    return (
        <div
            ref={cesiumContainerRef}
            id='cesium-container'
            style={{height: '100vh', width: '100vw'}}
        />
    )
}

export default CesiumComponent