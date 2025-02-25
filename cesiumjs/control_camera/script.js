Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYmRjYzU3Ny0wMGVkLTQ1MzUtYTM2NS1mNmY1ZDZlMWEyOWYiLCJpZCI6ODY0MTIsImlhdCI6MTY0NzgxMTE2Mn0.mRqOX55qk8WGHhNY76VkEkPem8KglusF4EnVKD380ZA";

var horizons = [
        {
          name: "MFS_542_convex_hull_lat_lon",
          show: true,
          description: "<p>Wyoming is the 10th most extensive, but the least populous \
          and the second least densely populated of the 50 United \
          States. The western two thirds of the state is covered mostly \
          with the mountain ranges and rangelands in the foothills of \
          the eastern Rocky Mountains, while the eastern third of the \
          state is high elevation prairie known as the High Plains. \
          Cheyenne is the capital and the most populous city in Wyoming, \
          with a population estimate of 63,624 in 2017.</p>",
          coordinates: [[4.578568154397922, 54.79757982302541], [4.571954488118939, 54.79778108238254], [4.5714745728424635, 54.80631725327284], [4.57146020177234, 54.80766528791457], [4.571453016203789, 54.808339305128314], [4.571643387893562, 54.82698847405296], [4.572866246905293, 54.858447972868625], [4.573177098752763, 54.865863478430185], [4.58417298817081, 54.93285565399065], [4.584948765812499, 54.93330766744032], [4.786151117232082, 54.961015285431756], [4.788884388677995, 54.96102008298976], [4.800988867987733, 54.96104059061556], [4.81895032628756, 54.96106880016621], [4.991924750849041, 54.96120462993531], [4.997781584517958, 54.96120492124327], [5.003247956431077, 54.961204938550274], [5.019643075071396, 54.95334065663505], [5.040703730376466, 54.9340154885439], [5.04107113970301, 54.911550031828774], [5.041070913621304, 54.91132537812806], [5.041069557841164, 54.90997745575893], [5.041064371959601, 54.904810417392], [5.041063921858527, 54.90436110951162], [5.040662699259475, 54.892903870810365], [5.039868025474287, 54.87717828520642], [5.039470978091584, 54.86931547413045], [5.03907765994917, 54.86527179394796], [5.025795137581951, 54.79832713112651], [5.025017375486049, 54.798327262587506], [5.021128563073691, 54.7983278450982], [5.020350800206322, 54.79832794664147], [5.014128692688806, 54.79832857948102], [4.972518147631564, 54.79832460846244], [4.71118244689091, 54.79797337281478], [4.580512646681141, 54.79758664075448], [4.578568154397922, 54.79757982302541]]
        },]

//cesiumViewer.current?.zoomTo(cesiumViewer.current?.entities)


var viewer = new Cesium.Viewer('cesiumContainer', {
    targetFrameRate: 60,
    homeButton: true,
    sceneModePicker: false,
    navigationHelpButton: false,
    baseLayerPicker: false,
    clock: new Cesium.Clock({
      startTime: Cesium.JulianDate.fromIso8601('1880-01-01'),
      currentTime: Cesium.JulianDate.fromIso8601('1880-01-01'),
      stopTime: Cesium.JulianDate.fromIso8601("2013-12-01"),
      clockRange: Cesium.ClockRange.CLAMPED,
      canAnimate: false,
      shouldAnimate: false,
      multiplier: 31622400 //Fast forward 1 year a second
    }),
    //Saves GPU memory
    scene3DOnly: true,
    automaticallyTrackDataSourceClocks: false
  });
  
  viewer.scene.debugShowFramesPerSecond = true;
  viewer.scene.screenSpaceCameraController.enableTranslate = false;
  viewer.scene.screenSpaceCameraController.enableTilt = false;
  viewer.scene.screenSpaceCameraController.enableLook = false;
  viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
  viewer.imageryLayers.get(0).brightness = 0.7;

  var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
    handler.setInputAction(function (event) {
      var pickedPosition = viewer.scene.pickPosition(event.position);
      console.log(pickedPosition)
      if (Cesium.defined(pickedPosition)) {
        console.log(pickedPosition);
      }
      console.log('oi')
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    let oi = async ()=>{
      await viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0),
      })
      console.log('oi')
    }

    oi().then(
      viewer.camera.setView({
        destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 150000.0)
      })
    )
 
  // viewer.camera.flyTo({
  //   orientation: {
  //     heading: Cesium.Math.toRadians(20.0),
  //     pitch: Cesium.Math.toRadians(-35.0),
  //     roll: 0.0,
  //     },
  // });

  // viewer.scene.camera.rotateRight(5);