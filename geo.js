mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhc2gyOCIsImEiOiJjbW9haTVmaHowNzc1MnFwenA4MGRqYjNjIn0.EmsXtKTofPNUU_D-kM61CA';

  // creates the map, setting the container to the id of the div you added in step 2, and setting the initial center and zoom level of the map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/agash28/cmoaiha48000001s9808i2sl9'
});

map.addControl(new mapboxgl.FullscreenControl());

const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});

map.addControl(nav, 'bottom-right');

function addAdditionalSourceAndLayer() {

//Add Hunga Tonga image
    map.on('load', () => {
        map.addSource('HungaTonga', {
            'type': 'image',
            'url': 'https://photos.agash.ca/Hunga+Tonga+2021-04-10+50cm2.jpg',
            'coordinates': [
                [-175.4003680,-20.5354617],
                [-175.38133144,-20.53723930],
                [-175.38284828,-20.55136838],
                [-175.40189848,-20.54957904]
            ]
        });

    map.addLayer({
            'id': 'HungaTonga-layer',
            'source': 'HungaTonga',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Eixample image
    map.on('load', () => {
        map.addSource('Eixample', {
            'type': 'image',
            'url': 'https://photos.agash.ca/Eixample+Barcelona+50cm.jpg',
            'coordinates': [
                [2.152970736, 41.389813995],
                [2.164239010, 41.381105396],
                [2.156200608, 41.375247328],
                [2.144930709,41.383959081]
            ]
        });


    map.addLayer({
            'id': 'Eixample-layer',
            'source': 'Eixample',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Alvernia Planet image
    const AlverniaMarkerDiv = document.createElement('div');
    AlverniaMarkerDiv.className = "marker";
    const AlverniaMarker = new mapboxgl.Marker(AlverniaMarkerDiv)
        .setLngLat([19.5439031, 50.1047289])
        .addTo(map);
    AlverniaMarkerDiv.addEventListener('click', () => {
            map.flyTo({
                center: [19.5475044, 50.1026258],
                zoom: 15,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });

    map.on('load', () => {
        map.addSource('AlverniaPlanet', {
            'type': 'image',
            'url': 'https://photos.agash.ca/Alvernia+Planet+2021-10-25+50cm.jpg',
            'coordinates': [
                [19.5439031, 50.1047289],
                [19.5511056, 50.1047289],
                [19.5511056, 50.1005226],
                [19.5439031, 50.1005226]
            ]
        });


    map.addLayer({
            'id': 'AlverniaPlanet-layer',
            'source': 'AlverniaPlanet',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Dallol Ethiopia image

    const DallolEthiopiaDiv = document.createElement('div');
    DallolEthiopiaDiv.className = "marker";
    const DallolEthiopiaMarker = new mapboxgl.Marker(DallolEthiopiaDiv)
        .setLngLat([40.2925530, 14.2456428])
        .addTo(map);
    DallolEthiopiaDiv.addEventListener('click', () => {
            map.flyTo({
                center: [40.2986674, 14.2399987],
                zoom: 14,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });

    map.on('load', () => {
        map.addSource('DallolEthiopia', {
            'type': 'image',
            'url': 'https://photos.agash.ca/DallolEthiopia.png',
            'coordinates': [
                [40.2925530, 14.2456428],
                [40.3047819, 14.2456428],
                [40.3047819, 14.2343546],
                [40.2925530, 14.2343546]
            ]
        });

    map.addLayer({
            'id': 'DallolEthiopia-layer',
            'source': 'DallolEthiopia',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Golden Gate image

    const GoldenGateDiv = document.createElement('div');
    GoldenGateDiv.className = "marker";
    const GoldenGateMarker = new mapboxgl.Marker(GoldenGateDiv)
        .setLngLat([-122.4830624, 37.8276392])
        .addTo(map);
    GoldenGateDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-122.4789436, 37.8183215],
                zoom: 14,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });

    map.on('load', () => {
        map.addSource('GoldenGate', {
            'type': 'image',
            'url': 'https://photos.agash.ca/GoldenGate.png',
            'coordinates': [
                [-122.4830624, 37.8276392],
                [-122.4748248, 37.8276392],
                [-122.4748248, 37.8090037],
                [-122.4830624, 37.8090037]
            ]
        });

    map.addLayer({
            'id': 'GoldenGate-layer',
            'source': 'GoldenGate',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add North Sentinel image

    const NorthSentinelDiv = document.createElement('div');
    NorthSentinelDiv.className = "marker";
    const NorthSentinelMarker = new mapboxgl.Marker(NorthSentinelDiv)
        .setLngLat([92.2098629, 11.5957307])
        .addTo(map);
    NorthSentinelDiv.addEventListener('click', () => {
            map.flyTo({
                center: [92.2124113, 11.5938552],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });

    map.on('load', () => {
        map.addSource('NorthSentinel', {
            'type': 'image',
            'url': 'https://photos.agash.ca/NorthSentinel.png',
            'coordinates': [
                [92.2098629, 11.5957307],
                [92.2149598, 11.5957307],
                [92.2149598, 11.5919797],
                [92.2098629, 11.5919797]
            ]
        });

    map.addLayer({
            'id': 'NorthSentinel-layer',
            'source': 'NorthSentinel',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Arctowski Station image

    const ArctowskiDiv = document.createElement('div');
    ArctowskiDiv.className = "marker";
    const ArctowskiMarker = new mapboxgl.Marker(ArctowskiDiv)
        .setLngLat([-58.4778433, -62.1571386])
        .addTo(map);
    ArctowskiDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-58.4705175, -62.1592260],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });

    map.on('load', () => {
        map.addSource('ArctowskiStation', {
            'type': 'image',
            'url': 'https://photos.agash.ca/ArctowskiStation.png',
            'coordinates': [
                [-58.4778433, -62.1571386],
                [-58.4631916, -62.1571386],
                [-58.4631916, -62.1613135],
                [-58.4778433, -62.1613135]
            ]
        });

    map.addLayer({
            'id': 'ArctowskiStation-layer',
            'source': 'ArctowskiStation',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Beijing Daxing image
    map.on('load', () => {
        map.addSource('BeijingDaxing', {
            'type': 'image',
            'url': 'https://photos.agash.ca/BeijingDaxing.png',
            'coordinates': [
                [116.4018903, 39.5170206],
                [116.4202720, 39.5170206],
                [116.4202720, 39.5029632],
                [116.4018903, 39.5029632]
            ]
        });

    map.addLayer({
            'id': 'BeijingDaxing-layer',
            'source': 'BeijingDaxing',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add Volcan Jote image
    map.on('load', () => {
        map.addSource('VolcanJote', {
            'type': 'image',
            'url': 'https://photos.agash.ca/VolcanJote.png',
            'coordinates': [
                [-67.3390564, -26.2892999],
                [-67.3195360, -26.2892999],
                [-67.3195360, -26.3017716],
                [-67.3390564, -26.3017716]
            ]
        });

    map.addLayer({
            'id': 'VolcanJote-layer',
            'source': 'VolcanJote',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
}

map.on('style.load', () => {
    addAdditionalSourceAndLayer();
});