mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhc2gyOCIsImEiOiJjbW9haTVmaHowNzc1MnFwenA4MGRqYjNjIn0.EmsXtKTofPNUU_D-kM61CA';

  // creates the map, setting the container to the id of the div you added in step 2, and setting the initial center and zoom level of the map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/agash28/cmoaiha48000001s9808i2sl9'
    //style: 'mapbox://styles/agash28/cmoj53vb5002l01s45wgy4s2s'
});

map.addControl(new mapboxgl.FullscreenControl());

const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});

map.addControl(nav, 'bottom-right');

let defaultText = 'Hover or click a pin on the map';

function addAdditionalSourceAndLayer() {

//Add Hunga Tonga image

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

    //Add Eixample image
    map.addSource('Eixample', {
        'type': 'image',
        'url': 'https://photos.agash.ca/EixampleBarcelona1.png',
        'coordinates': [
            [2.1448189, 41.3891015],
            [2.1632097, 41.3891015],
            [2.1632097, 41.3752473],
            [2.1448189, 41.3752473]
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

    //Add Alvernia Planet image
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

    //Add Dallol Ethiopia image
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

    //Add Golden Gate image
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

    //Add North Sentinel image
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

    //Add Arctowski Station image
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

    //Add Beijing Daxing image
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

    //Add Volcan Jote image
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

    //Add HeydarAliyevAirport image
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
    
    //Add MumbaiAirport image
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
    
    //Add CuatroTorres image
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
    
    //Add Alumbrera image
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
    
    //Add Petronas image
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
    
    //Add VolcanPoruñita image
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

    //Add SantaCruzdeIslote image
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
    
    //Add HuntsvilleAlabama image
    map.addSource('HuntsvilleAlabama', {
        'type': 'image',
        'url': 'https://photos.agash.ca/HuntsvilleAlabama1.png',
        'coordinates': [
            // [-86.6578632,  34.7129592],
            // [-86.6537464,  34.7129592],
            // [-86.6537464,  34.7094368],
            // [-86.6578632,  34.7094368]
            [-86.6579534,  34.7128656],
            [-86.6537377,  34.7128656],
            [-86.6537377,  34.7095405],
            [-86.6579534,  34.7095405]
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
    
    //Add DongdaemunDesignPlaza image
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

    //Add CostaConcordia20130917 image
    map.addSource('CostaConcordia20130917', {
        'type': 'image',
        'url': 'https://photos.agash.ca/CostaConcordia20130917.png',
        'coordinates': [
            [ 10.9174804,  42.3686645],
            [ 10.9253973,  42.3686645],
            [ 10.9253973,  42.3629957],
            [ 10.9174804,  42.3629957]
        ]
    });

    map.addLayer({
        'id': 'CostaConcordia20130917-layer',
        'source': 'CostaConcordia20130917',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add CostaConcordia20130712 image
    map.addSource('CostaConcordia20130712', {
        'type': 'image',
        'url': 'https://photos.agash.ca/CostaConcordia20130712.png',
        'coordinates': [
            [ 10.9175219,  42.3686443],
            [ 10.9255946,  42.3686443],
            [ 10.9255946,  42.3629345],
            [ 10.9175219,  42.3629345]
        ]
    });

    map.addLayer({
        'id': 'CostaConcordia20130712-layer',
        'source': 'CostaConcordia20130712',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add GreatBlueHole image
    map.addSource('GreatBlueHole', {
        'type': 'image',
        'url': 'https://photos.agash.ca/GreatBlueHole.png',
        'coordinates': [
            [-87.5392281,  17.3202921],
            [-87.5298469,  17.3202921],
            [-87.5298469,  17.3114092],
            [-87.5392281,  17.3114092]
        ]
    });

    map.addLayer({
        'id': 'GreatBlueHole-layer',
        'source': 'GreatBlueHole',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    //Add Goma image

    map.addSource('Goma', {
        'type': 'image',
        'url': 'https://photos.agash.ca/Goma.png',
        'coordinates': [
            [ 29.2362327,  -1.6336956],
            [ 29.2431734,  -1.6336956],
            [ 29.2431734,  -1.6479425],
            [ 29.2362327,  -1.6479425]
        ]
    });

    map.addLayer({
        'id': 'Goma-layer',
        'source': 'Goma',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add GomaNIR image

    map.addSource('GomaNIR', {
        'type': 'image',
        'url': 'https://photos.agash.ca/GomaNIR.png',
        'coordinates': [
            [ 29.2362574,  -1.6337058],
            [ 29.2431397,  -1.6337058],
            [ 29.2431397,  -1.6481668],
            [ 29.2362574,  -1.6481668]
        ]
    });

    map.addLayer({
        'id': 'GomaNIR-layer',
        'source': 'GomaNIR',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        },
        'layout': {
            'visibility': 'none'
        }
    });
    
    //Add DowntownDubai image

    map.addSource('DowntownDubai', {
        'type': 'image',
        'url': 'https://photos.agash.ca/DowntownDubai.png',
        'coordinates': [
            [ 55.2652644,  25.2052848],
            [ 55.2836368,  25.2052848],
            [ 55.2836368,  25.1886272],
            [ 55.2652644,  25.1886272]
        ]
    });

    map.addLayer({
        'id': 'DowntownDubai-layer',
        'source': 'DowntownDubai',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add HotelRyugyongPyongyang image

    map.addSource('HotelRyugyongPyongyang', {
        'type': 'image',
        'url': 'https://photos.agash.ca/HotelRyugyongPyongyang.png',
        'coordinates': [
            [125.7243704,  39.0426505],
            [125.7379870,  39.0426505],
            [125.7379870,  39.0300574],
            [125.7243704,  39.0300574]
        ]
    });

    map.addLayer({
        'id': 'HotelRyugyongPyongyang-layer',
        'source': 'HotelRyugyongPyongyang',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add JudgeHarryPregersonInterchange image

    map.addSource('JudgeHarryPregersonInterchange', {
        'type': 'image',
        'url': 'https://photos.agash.ca/JudgeHarryPregersonInterchange.png',
        'coordinates': [
            [-118.2849491,  33.9317151],
            [-118.2763147,  33.9317151],
            [-118.2763147,  33.9253396],
            [-118.2849491,  33.9253396]
        ]
    });

    map.addLayer({
        'id': 'JudgeHarryPregersonInterchange-layer',
        'source': 'JudgeHarryPregersonInterchange',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add BarringerCrater image

    map.addSource('BarringerCrater', {
        'type': 'image',
        'url': 'https://photos.agash.ca/BarringerCrater.png',
        'coordinates': [
            [-111.0319917,  35.0347428],
            [-111.0136043,  35.0347428],
            [-111.0136043,  35.0197428],
            [-111.0319917,  35.0197428]
        ]
    });

    map.addLayer({
        'id': 'BarringerCrater-layer',
        'source': 'BarringerCrater',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add EritreaHalaba image

    map.addSource('EritreaHalaba', {
        'type': 'image',
        'url': 'https://photos.agash.ca/EritreaHalaba.png',
        'coordinates': [
            [ 41.7936167,  13.9189114],
            [ 41.8057402,  13.9189114],
            [ 41.8057402,  13.9052619],
            [ 41.7936167,  13.9052619]
        ]
    });

    map.addLayer({
        'id': 'EritreaHalaba-layer',
        'source': 'EritreaHalaba',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });

        //Add MalborkCastle image

    map.addSource('MalborkCastle', {
        'type': 'image',
        'url': 'https://photos.agash.ca/MalborkCastle.png',
        'coordinates': [
            [ 19.0248672,  54.0436092],
            [ 19.0338096,  54.0436092],
            [ 19.0338096,  54.0378817],
            [ 19.0248672,  54.0378817]
        ]
    });

    map.addLayer({
        'id': 'MalborkCastle-layer',
        'source': 'MalborkCastle',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add LuboszówPoland image

    map.addSource('LuboszówPoland', {
        'type': 'image',
        'url': 'https://photos.agash.ca/LuboszówPoland.png',
        'coordinates': [
            [ 15.3913811,  51.4283021],
            [ 15.3990438,  51.4283021],
            [ 15.3990438,  51.4242761],
            [ 15.3913811,  51.4242761]
        ]
    });

    map.addLayer({
        'id': 'LuboszówPoland-layer',
        'source': 'LuboszówPoland',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add KuwaitAirport image

    map.addSource('KuwaitAirport', {
        'type': 'image',
        'url': 'https://photos.agash.ca/KuwaitAirport.png',
        'coordinates': [
            [ 47.9809110,  29.2203451],
            [ 47.9942310,  29.2203451],
            [ 47.9942310,  29.2081018],
            [ 47.9809110,  29.2081018]
        ]
    });

    map.addLayer({
        'id': 'KuwaitAirport-layer',
        'source': 'KuwaitAirport',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
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
	
    const AlverniaPopup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Test popup'
    );
    const AlverniaMarkerDiv = document.createElement('div');
    AlverniaMarkerDiv.className = "marker";
    const AlverniaMarker = new mapboxgl.Marker(AlverniaMarkerDiv)
        .setLngLat([19.5439031, 50.1047289])
        .setPopup(AlverniaPopup)
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
    const EixampleMarker = new mapboxgl.Marker(EixampleDiv, {anchor: 'bottom'})
        .setLngLat([2.1516329, 41.3890737])
        .addTo(map);
    EixampleDiv.addEventListener('click', () => {
            map.flyTo({
                center: [2.1540143, 41.3821744],
                zoom: 15,
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
                zoom: 17,
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
    
    let costaSwitch = 0;
    // const CostaPopup = new mapboxgl.Popup({ offset: 25 }).setText(
    //     'Click this pin to toggle between 2013-07-12 and 2013-09-17 (testing)'
    // );
    const CostaConcordia20130917Div = document.createElement('div');
    CostaConcordia20130917Div.className = "marker";
    const CostaConcordia20130917Marker = new mapboxgl.Marker(CostaConcordia20130917Div)
        .setLngLat([ 10.9174804,  42.3686645])
        //.setPopup(CostaPopup)
        .addTo(map);
    CostaConcordia20130917Div.addEventListener('click', () => {
        map.flyTo({
            center: [ 10.9214388,  42.3658301],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

        if (costaSwitch == 0) {
            map.setLayoutProperty('CostaConcordia20130917-layer', 'visibility', 'none');
            map.setLayoutProperty('CostaConcordia20130712-layer', 'visibility', 'visible');
            costaSwitch = 1
        }
        else {
            map.setLayoutProperty('CostaConcordia20130917-layer', 'visibility', 'visible');
            map.setLayoutProperty('CostaConcordia20130712-layer', 'visibility', 'none');
            costaSwitch = 0
        }
    });

    // const CostaConcordia20130712Div = document.createElement('div');
    // CostaConcordia20130712Div.className = "marker";
    // const CostaConcordia20130712Marker = new mapboxgl.Marker(CostaConcordia20130712Div)
    //     .setLngLat([ 10.9175219,  42.3686443])
    //     .addTo(map);
    // CostaConcordia20130712Div.addEventListener('click', () => {
    //         map.flyTo({
    //             center: [ 10.9215582,  42.3657894],
    //             zoom: 16,
    //             essential: true // this animation is considered essential with respect to prefers-reduced-motion
    //         });
    // });

    const GreatBlueHoleDiv = document.createElement('div');
    GreatBlueHoleDiv.className = "marker";
    const GreatBlueHoleMarker = new mapboxgl.Marker(GreatBlueHoleDiv)
        .setLngLat([-87.5392281,  17.3202921])
        .addTo(map);
    GreatBlueHoleDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-87.5345375,  17.3158507],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    let GomaSwitch = 0;
    const GomaDiv = document.createElement('div');
    GomaDiv.className = "marker";
    // const GomaPopup = new mapboxgl.Popup({ offset: 25 }).setText(
    //     'Click this pin to toggle between natural colour and NIR (testing)'
    // );
    const GomaMarker = new mapboxgl.Marker(GomaDiv)
        .setLngLat([ 29.2362327,  -1.6336956])
        //.setPopup(GomaPopup)
        .addTo(map);
    GomaDiv.addEventListener('click', () => {
        map.flyTo({
            center: [ 29.2397031,  -1.6408191],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        if (GomaSwitch == 0) {
            map.setLayoutProperty('GomaNIR-layer', 'visibility', 'none');
            map.setLayoutProperty('Goma-layer', 'visibility', 'visible');
            GomaSwitch = 1
        }
        else {
            map.setLayoutProperty('GomaNIR-layer', 'visibility', 'visible');
            map.setLayoutProperty('Goma-layer', 'visibility', 'none');
            GomaSwitch = 0
        }
    });

    // const GomaNIRDiv = document.createElement('div');
    // GomaNIRDiv.className = "marker";
    // const GomaNIRMarker = new mapboxgl.Marker(GomaNIRDiv)
    //     .setLngLat([ 29.2362574,  -1.6337058])
    //     .addTo(map);
    // GomaNIRDiv.addEventListener('click', () => {
    //         map.flyTo({
    //             center: [ 29.2396986,  -1.6409363],
    //             zoom: 16,
    //             essential: true // this animation is considered essential with respect to prefers-reduced-motion
    //         });
    // });

    const DowntownDubaiDiv = document.createElement('div');
    DowntownDubaiDiv.className = "marker";
    const DowntownDubaiMarker = new mapboxgl.Marker(DowntownDubaiDiv)
        .setLngLat([ 55.2652644,  25.2052848])
        .addTo(map);
    DowntownDubaiDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 55.2744506,  25.1969560],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const HotelRyugyongPyongyangDiv = document.createElement('div');
    HotelRyugyongPyongyangDiv.className = "marker";
    const HotelRyugyongPyongyangMarker = new mapboxgl.Marker(HotelRyugyongPyongyangDiv)
        .setLngLat([125.7243704,  39.0426505])
        .addTo(map);
    HotelRyugyongPyongyangDiv.addEventListener('click', () => {
            map.flyTo({
                center: [125.7311787,  39.0363540],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const JudgeHarryPregersonInterchangeDiv = document.createElement('div');
    JudgeHarryPregersonInterchangeDiv.className = "marker";
    const JudgeHarryPregersonInterchangeMarker = new mapboxgl.Marker(JudgeHarryPregersonInterchangeDiv)
        .setLngLat([-118.2849491,  33.9317151])
        .addTo(map);
    JudgeHarryPregersonInterchangeDiv.addEventListener('click', () => {
        map.flyTo({
            center: [-118.2806319,  33.9285273],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const BarringerCraterDiv = document.createElement('div');
    BarringerCraterDiv.className = "marker";
    const BarringerCraterMarker = new mapboxgl.Marker(BarringerCraterDiv)
        .setLngLat([-111.0319917,  35.0347428])
        .addTo(map);
    BarringerCraterDiv.addEventListener('click', () => {
            map.flyTo({
                center: [-111.0227980,  35.0272428],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const EritreaHalabaDiv = document.createElement('div');
    EritreaHalabaDiv.className = "marker";
    const EritreaHalabaMarker = new mapboxgl.Marker(EritreaHalabaDiv)
        .setLngLat([ 41.7936167,  13.9189114])
        .addTo(map);
    EritreaHalabaDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 41.7996784,  13.9120866],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const MalborkCastleDiv = document.createElement('div');
    MalborkCastleDiv.className = "marker";
    const MalborkCastleMarker = new mapboxgl.Marker(MalborkCastleDiv)
        .setLngLat([ 19.0248672,  54.0436092])
        .addTo(map);
    MalborkCastleDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 19.0293384,  54.0407455],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const LuboszówPolandDiv = document.createElement('div');
    LuboszówPolandDiv.className = "marker";
    const LuboszówPolandMarker = new mapboxgl.Marker(LuboszówPolandDiv)
        .setLngLat([ 15.3913811,  51.4283021])
        .addTo(map);
    LuboszówPolandDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 15.3952125,  51.4262891],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });

    const KuwaitAirportDiv = document.createElement('div');
    KuwaitAirportDiv.className = "marker";
    const KuwaitAirportMarker = new mapboxgl.Marker(KuwaitAirportDiv)
        .setLngLat([ 47.9809110,  29.2203451])
        .addTo(map);
    KuwaitAirportDiv.addEventListener('click', () => {
            map.flyTo({
                center: [ 47.9875710,  29.2142234],
                zoom: 16,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    });


    //hover pin place text
    const ArctowskiName = document.getElementById('placeName');
    ArctowskiDiv.addEventListener('mouseover', () => {
        ArctowskiName.textContent = 'Arctowski';
    });
        
    const NorthSentinelName = document.getElementById('placeName');
    NorthSentinelDiv.addEventListener('mouseover', () => {
        NorthSentinelName.textContent = 'North Sentinel';
    });
        
    const GoldenGateName = document.getElementById('placeName');
    GoldenGateDiv.addEventListener('mouseover', () => {
        GoldenGateName.textContent = 'Golden Gate';
    });
        
    const DallolEthiopiaName = document.getElementById('placeName');
    DallolEthiopiaDiv.addEventListener('mouseover', () => {
        DallolEthiopiaName.textContent = 'Dallol Ethiopia';
    });
        
    const HeydarAliyevAirportName = document.getElementById('placeName');
    HeydarAliyevAirportDiv.addEventListener('mouseover', () => {
        HeydarAliyevAirportName.textContent = 'Heydar Aliyev Airport';
    });
        
    const MumbaiAirportName = document.getElementById('placeName');
    MumbaiAirportDiv.addEventListener('mouseover', () => {
        MumbaiAirportName.textContent = 'Mumbai Airport';
    });
        
    const CuatroTorresName = document.getElementById('placeName');
    CuatroTorresDiv.addEventListener('mouseover', () => {
        CuatroTorresName.textContent = 'Cuatro Torres';
    });
        
    const AlumbreraName = document.getElementById('placeName');
    AlumbreraDiv.addEventListener('mouseover', () => {
        AlumbreraName.textContent = 'Alumbrera';
    });
        
    const PetronasName = document.getElementById('placeName');
    PetronasDiv.addEventListener('mouseover', () => {
        PetronasName.textContent = 'Petronas';
    });
        
    const VolcanPoruñitaName = document.getElementById('placeName');
    VolcanPoruñitaDiv.addEventListener('mouseover', () => {
        VolcanPoruñitaName.textContent = 'Volcan Poru ñita';
    });
        
    const EixampleName = document.getElementById('placeName');
    EixampleDiv.addEventListener('mouseover', () => {
        EixampleName.textContent = 'Eixample';
    });
        
    const HungaTongaName = document.getElementById('placeName');
    HungaTongaDiv.addEventListener('mouseover', () => {
        HungaTongaName.textContent = 'Hunga Tonga';
    });
        
    const BeijingDaxingName = document.getElementById('placeName');
    BeijingDaxingDiv.addEventListener('mouseover', () => {
        BeijingDaxingName.textContent = 'Beijing Daxing';
    });
        
    const VolcanJoteName = document.getElementById('placeName');
    VolcanJoteDiv.addEventListener('mouseover', () => {
        VolcanJoteName.textContent = 'Volcan Jote';
    });
        
    const SantaCruzdeIsloteName = document.getElementById('placeName');
    SantaCruzdeIsloteDiv.addEventListener('mouseover', () => {
        SantaCruzdeIsloteName.textContent = 'Santa Cruzde Islote';
    });
        
    const HuntsvilleAlabamaName = document.getElementById('placeName');
    HuntsvilleAlabamaDiv.addEventListener('mouseover', () => {
        HuntsvilleAlabamaName.textContent = 'Huntsville Alabama';
    });
        
    const DongdaemunDesignPlazaName = document.getElementById('placeName');
    DongdaemunDesignPlazaDiv.addEventListener('mouseover', () => {
        DongdaemunDesignPlazaName.textContent = 'Dongdaemun Design Plaza';
    });
        
    const CostaConcordia20130712Name = document.getElementById('placeName');
    const CostaConcordiaSwitchText = document.createElement('p');
    CostaConcordiaSwitchText.className = 'switchText';
    CostaConcordiaSwitchText.textContent = "Click this pin to toggle between 2013-07-12 and 2013-09-17 (testing)";
    CostaConcordia20130917Div.addEventListener('mouseover', () => {
        CostaConcordia20130712Name.textContent = 'Costa Concordia';
        CostaConcordia20130712Name.appendChild(CostaConcordiaSwitchText);
    });
        
    const GreatBlueHoleName = document.getElementById('placeName');
    GreatBlueHoleDiv.addEventListener('mouseover', () => {
        GreatBlueHoleName.textContent = 'Great Blue Hole';
    });
        
    const GomaName = document.getElementById('placeName');
    const GomaSwitchText = document.createElement('p');
    GomaSwitchText.className = 'switchText';
    GomaSwitchText.textContent = "Click this pin to toggle between natural colour and NIR (testing)";
    GomaDiv.addEventListener('mouseover', () => {
        GomaName.textContent = 'Goma';
        GomaName.appendChild(GomaSwitchText);
    });
        
    const DowntownDubaiName = document.getElementById('placeName');
    DowntownDubaiDiv.addEventListener('mouseover', () => {
        DowntownDubaiName.textContent = 'Downtown Dubai';
    });
        
    const HotelRyugyongPyongyangName = document.getElementById('placeName');
    HotelRyugyongPyongyangDiv.addEventListener('mouseover', () => {
        HotelRyugyongPyongyangName.textContent = 'Hotel Ryugyong Pyongyang';
    });
        
    const JudgeHarryPregersonInterchangeName = document.getElementById('placeName');
    JudgeHarryPregersonInterchangeDiv.addEventListener('mouseover', () => {
        JudgeHarryPregersonInterchangeName.textContent = 'Judge Harry Pregerson Interchange';
    });
        
    const BarringerCraterName = document.getElementById('placeName');
    BarringerCraterDiv.addEventListener('mouseover', () => {
        BarringerCraterName.textContent = 'Barringer Crater';
    });
        
    const EritreaHalabaName = document.getElementById('placeName');
    EritreaHalabaDiv.addEventListener('mouseover', () => {
        EritreaHalabaName.textContent = 'Eritrea Halaba';
    });
        
    const MalborkCastleName = document.getElementById('placeName');
    MalborkCastleDiv.addEventListener('mouseover', () => {
        MalborkCastleName.textContent = 'Malbork Castle';
    });
        
    const LuboszówPolandName = document.getElementById('placeName');
    LuboszówPolandDiv.addEventListener('mouseover', () => {
        LuboszówPolandName.textContent = 'Luboszów Poland';
    });
        
    const KuwaitAirportName = document.getElementById('placeName');
    KuwaitAirportDiv.addEventListener('mouseover', () => {
        KuwaitAirportName.textContent = 'Kuwait Airport';
    });

    const AlverniaMarkerName = document.getElementById('placeName');
    AlverniaMarkerDiv.addEventListener('mouseover', () => {
        AlverniaMarkerName.textContent = 'Alvernia';
    });
}

map.on('style.load', () => {
    addAdditionalSourceAndLayer();
    addMarkers();
});

satBtn = document.getElementById('sat')
standBtn = document.getElementById('stand')
standBtn.addEventListener('click', () => {
    map.setStyle('mapbox://styles/agash28/cmoaiha48000001s9808i2sl9');
    satBtn.style.display = 'inline-block';
    standBtn.style.display = 'none';
});

satBtn = document.getElementById('sat')
satBtn.addEventListener('click', () => {
    map.setStyle('mapbox://styles/agash28/cmoj53vb5002l01s45wgy4s2s');
    satBtn.style.display = 'none';
    standBtn.style.display = 'inline-block';
});
