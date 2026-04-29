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

    //Add HeydarAliyevAirport image
    map.on('load', () => {
            map.addSource('HeydarAliyevAirport', {
                'type': 'image',
                'url': 'https://photos.agash.ca/HeydarAliyevAirport.png',
                'coordinates': [
                    [ 50.0460162,  40.4684786],
                    [ 50.0590599,  40.4684786],
                    [ 50.0590599,  40.4630003],
                    [ 50.0460162,  40.4630003]
                ]
            });

    map.addLayer({
            'id': 'HeydarAliyevAirport-layer',
            'source': 'HeydarAliyevAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add MumbaiAirport image
    map.on('load', () => {
            map.addSource('MumbaiAirport', {
                'type': 'image',
                'url': 'https://photos.agash.ca/MumbaiAirport.png',
                'coordinates': [
                    [ 72.8689918,  19.1004393],
                    [ 72.8793063,  19.1004393],
                    [ 72.8793063,  19.0925417],
                    [ 72.8689918,  19.0925417]
                ]
            });

    map.addLayer({
            'id': 'MumbaiAirport-layer',
            'source': 'MumbaiAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add CuatroTorres image
    map.on('load', () => {
            map.addSource('CuatroTorres', {
                'type': 'image',
                'url': 'https://photos.agash.ca/CuatroTorres.png',
                'coordinates': [
                    [ -3.6939235,  40.4842540],
                    [ -3.6824920,  40.4842540],
                    [ -3.6824920,  40.4752324],
                    [ -3.6939235,  40.4752324]
                ]
            });

    map.addLayer({
            'id': 'CuatroTorres-layer',
            'source': 'CuatroTorres',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add Alumbrera image
    map.on('load', () => {
            map.addSource('Alumbrera', {
                'type': 'image',
                'url': 'https://photos.agash.ca/Alumbrera.png',
                'coordinates': [
                    [-67.3785227, -26.2072537],
                    [-67.3644373, -26.2072537],
                    [-67.3644373, -26.2198949],
                    [-67.3785227, -26.2198949]
                ]
            });

    map.addLayer({
            'id': 'Alumbrera-layer',
            'source': 'Alumbrera',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add Petronas image
    map.on('load', () => {
            map.addSource('Petronas', {
                'type': 'image',
                'url': 'https://photos.agash.ca/Petronas.png',
                'coordinates': [
                    [101.7080049,   3.1611789],
                    [101.7181758,   3.1611789],
                    [101.7181758,   3.1520013],
                    [101.7080049,   3.1520013]
                ]
            });

    map.addLayer({
            'id': 'Petronas-layer',
            'source': 'Petronas',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add VolcanPoruñita image
    map.on('load', () => {
            map.addSource('VolcanPoruñita', {
                'type': 'image',
                'url': 'https://photos.agash.ca/VolcanPoruñita.png',
                'coordinates': [
                    [-68.3014837, -21.3113368],
                    [-68.2854558, -21.3113368],
                    [-68.2854558, -21.3246358],
                    [-68.3014837, -21.3246358]
                ]
            });

    map.addLayer({
            'id': 'VolcanPoruñita-layer',
            'source': 'VolcanPoruñita',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });

    //Add SantaCruzdeIslote image
    map.on('load', () => {
            map.addSource('SantaCruzdeIslote', {
                'type': 'image',
                'url': 'https://photos.agash.ca/SantaCruzdeIslote.png',
                'coordinates': [
                    [-75.8611806,   9.7877409],
                    [-75.8569911,   9.7877409],
                    [-75.8569911,   9.7839457],
                    [-75.8611806,   9.7839457]
                ]
            });

    map.addLayer({
            'id': 'SantaCruzdeIslote-layer',
            'source': 'SantaCruzdeIslote',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add HuntsvilleAlabama image
    map.on('load', () => {
            map.addSource('HuntsvilleAlabama', {
                'type': 'image',
                'url': 'https://photos.agash.ca/HuntsvilleAlabama.png',
                'coordinates': [
                    [-86.6578632,  34.7129592],
                    [-86.6537464,  34.7129592],
                    [-86.6537464,  34.7094368],
                    [-86.6578632,  34.7094368]
                ]
            });

    map.addLayer({
            'id': 'HuntsvilleAlabama-layer',
            'source': 'HuntsvilleAlabama',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
    
    //Add DongdaemunDesignPlaza image
    map.on('load', () => {
            map.addSource('DongdaemunDesignPlaza', {
                'type': 'image',
                'url': 'https://photos.agash.ca/DongdaemunDesignPlaza.png',
                'coordinates': [
                    [127.0069694,  37.5695652],
                    [127.0136913,  37.5695652],
                    [127.0136913,  37.5644117],
                    [127.0069694,  37.5644117]
                ]
            });

    map.addLayer({
            'id': 'DongdaemunDesignPlaza-layer',
            'source': 'DongdaemunDesignPlaza',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        });
    });
}

//add markers
function addMarkers() {
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

    const HeydarAliyevAirportDiv = document.createElement('div');
    HeydarAliyevAirportDiv.className = "marker";
    const HeydarAliyevAirportMarker = new mapboxgl.Marker(HeydarAliyevAirportDiv)
        .setLngLat([ 50.0460162,  40.4684786])
        .addTo(map);
    HeydarAliyevAirportDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 50.0525381,  40.4657394],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const MumbaiAirportDiv = document.createElement('div');
    MumbaiAirportDiv.className = "marker";
    const MumbaiAirportMarker = new mapboxgl.Marker(MumbaiAirportDiv)
        .setLngLat([ 72.8689918,  19.1004393])
        .addTo(map);
    MumbaiAirportDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 72.8741491,  19.0964905],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const CuatroTorresDiv = document.createElement('div');
    CuatroTorresDiv.className = "marker";
    const CuatroTorresMarker = new mapboxgl.Marker(CuatroTorresDiv)
        .setLngLat([ -3.6939235,  40.4842540])
        .addTo(map);
    CuatroTorresDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ -3.6882077,  40.4797432],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const AlumbreraDiv = document.createElement('div');
    AlumbreraDiv.className = "marker";
    const AlumbreraMarker = new mapboxgl.Marker(AlumbreraDiv)
        .setLngLat([-67.3785227, -26.2072537])
        .addTo(map);
    AlumbreraDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-67.3714800, -26.2135743],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const PetronasDiv = document.createElement('div');
    PetronasDiv.className = "marker";
    const PetronasMarker = new mapboxgl.Marker(PetronasDiv)
        .setLngLat([101.7080049,   3.1611789])
        .addTo(map);
    PetronasDiv.addEventListener('click', () => {
            map.flyTo({
                center: [101.7130903,   3.1565901],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const VolcanPoruñitaDiv = document.createElement('div');
    VolcanPoruñitaDiv.className = "marker";
    const VolcanPoruñitaMarker = new mapboxgl.Marker(VolcanPoruñitaDiv)
        .setLngLat([-68.3014837, -21.3113368])
        .addTo(map);
    VolcanPoruñitaDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-68.2934697, -21.3179863],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const EixampleDiv = document.createElement('div');
    EixampleDiv.className = "marker";
    const EixampleMarker = new mapboxgl.Marker(EixampleDiv)
        .setLngLat([2.152970736, 41.389813995])
        .addTo(map);
    EixampleDiv.addEventListener('click', () => {
            map.flyTo({
                center: [2.154456,41.382745],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const HungaTongaDiv = document.createElement('div');
    HungaTongaDiv.className = "marker";
    const HungaTongaMarker = new mapboxgl.Marker(HungaTongaDiv)
        .setLngLat([-175.4003680,-20.5354617])
        .addTo(map);
    HungaTongaDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-175.391831,-20.543253],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const BeijingDaxingDiv = document.createElement('div');
    BeijingDaxingDiv.className = "marker";
    const BeijingDaxingMarker = new mapboxgl.Marker(BeijingDaxingDiv)
        .setLngLat([116.4018903, 39.5170206])
        .addTo(map);
    BeijingDaxingDiv.addEventListener('click', () => {
            map.flyTo({
                center: [116.4110812, 39.5099919],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const VolcanJoteDiv = document.createElement('div');
    VolcanJoteDiv.className = "marker";
    const VolcanJoteMarker = new mapboxgl.Marker(VolcanJoteDiv)
        .setLngLat([-67.3390564, -26.2892999])
        .addTo(map);
    VolcanJoteDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-67.3292962, -26.2955358],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const SantaCruzdeIsloteDiv = document.createElement('div');
    SantaCruzdeIsloteDiv.className = "marker";
    const SantaCruzdeIsloteMarker = new mapboxgl.Marker(SantaCruzdeIsloteDiv)
        .setLngLat([-75.8611806,   9.7877409])
        .addTo(map);
    SantaCruzdeIsloteDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-75.8590859,   9.7858433],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const HuntsvilleAlabamaDiv = document.createElement('div');
    HuntsvilleAlabamaDiv.className = "marker";
    const HuntsvilleAlabamaMarker = new mapboxgl.Marker(HuntsvilleAlabamaDiv)
        .setLngLat([-86.6578632,  34.7129592])
        .addTo(map);
    HuntsvilleAlabamaDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-86.6558048,  34.7111980],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const DongdaemunDesignPlazaDiv = document.createElement('div');
    DongdaemunDesignPlazaDiv.className = "marker";
    const DongdaemunDesignPlazaMarker = new mapboxgl.Marker(DongdaemunDesignPlazaDiv)
        .setLngLat([127.0069694,  37.5695652])
        .addTo(map);
    DongdaemunDesignPlazaDiv.addEventListener('click', () => {
            map.flyTo({
                center: [127.0103303,  37.5669884],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });    
}

map.on('style.load', () => {
    addAdditionalSourceAndLayer();
    addMarkers();
});