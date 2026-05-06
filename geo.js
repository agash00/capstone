//let defaultText = 'Hover or click a pin on the map';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhc2gyOCIsImEiOiJjbW9haTVmaHowNzc1MnFwenA4MGRqYjNjIn0.EmsXtKTofPNUU_D-kM61CA';
let viewNum = 0;
let switchLayerNum = 0;
let layerName1 = '';
let layerName2 = '';
let trueName = '';
let oldLayerName = '';
let dropdown = document.getElementById('dropdown-content');
let dropdownBtns = Array.from(dropdown.children);
let newDropdownBtns = [];
const switchBtn = document.getElementById('switch');
const toggleViewBtn = document.getElementById('toggleViewBtn');
for (i = 0; i < dropdownBtns.length; i++){
    if (i % 2 == 0){
        newDropdownBtns.push(dropdownBtns[i]);
        dropdown.removeChild(dropdownBtns[i]);
    }
}

newDropdownBtns.sort(function (a, b) {
  if (a.innerHTML < b.innerHTML) {
    return -1;
  }
  if (a.innerHTML > b.innerHTML) {
    return 1;
  }
  return 0;
});

for (i = 0; i < newDropdownBtns.length; i++){
    dropdown.appendChild(newDropdownBtns[i]);
}

const placesBtn = document.getElementById('dropbtn');
placesBtn.addEventListener('click', () => {
    if (dropdown.style.display == 'block'){
        dropdown.style.display = 'none';
    }
    else {
        dropdown.style.display = 'block';
    }
});


// creates the map, setting the container to the id of the div you added in step 2, and setting the initial center and zoom level of the map
function addMap() {
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
    map.on('style.load', () => {
        addAdditionalSourceAndLayer(map);
        addMarkers(map);
        viewNum = 0;
        switchLayerNum = 0;
        toggleViewBtn.style.backgroundImage = 'url("images/view.png")';
        if (layerName1 != '' && layerName1 != 'none'){
            viewLayer(layerName1.replace("-layer", "").concat("Marker"), 1);
            switchBtn.disabled = false;
            switchBtnPower(1);
        }
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
    toggleViewBtn.addEventListener('click', () => {
        if (viewNum == 0){
            map.setLayoutProperty(viewLayer('get'), 'visibility', 'none');
            viewNum = 1;
            toggleViewBtn.style.backgroundImage = 'url("images/hide.png")';
            if (layerName1 != '' && layerName1 != 'none'){
                switchBtn.disabled = true;
                switchBtnPower(0);
            }
        }
        else {
            map.setLayoutProperty(viewLayer('get'), 'visibility', 'visible');
            viewNum = 0;
            toggleViewBtn.style.backgroundImage = 'url("images/view.png")';
            if (layerName1 != '' && layerName1 != 'none'){
                switchBtn.disabled = false;
                switchBtnPower(1);
            }
        }
        console.log(trueName);
    });
    switchBtn.addEventListener('click', () => {
        if (switchLayerNum == 0) {
            switchLayer('off', 'on');
            switchLayerNum = 1;
        }
        else {
            switchLayer('on', 'off');
            switchLayerNum = 0;
        }
    });
    return map;
}

//added button to start the map instead of auto load at each refresh
document.getElementById('startBtn').addEventListener('click', () => {
    map = addMap();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('content').style.display = '';
});


function addAdditionalSourceAndLayer(map) {

//Add Hunga Tonga image

    map.addSource('HungaTonga', {
        'type': 'image',
        'url': 'https://photos.agash.ca/HungaTonga2.png',
        'coordinates': [
            [-175.4003250, -20.5386411],
            [-175.3840448, -20.5386411],
            [-175.3840448, -20.5506065],
            [-175.4003250, -20.5506065]
            // [-175.4003680,-20.5354617],
            // [-175.38133144,-20.53723930],
            // [-175.38284828,-20.55136838],
            // [-175.40189848,-20.54957904]
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
        },
        'layout': {
            'visibility': 'none'
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

    
    //Add NewYauMaTeishelterHongkong image

    map.addSource('NewYauMaTeishelterHongkong', {
        'type': 'image',
        'url': 'https://photos.agash.ca/NewYauMaTeishelterHongkong.png',
        'coordinates': [
            [114.1460610,  22.3170465],
            [114.1617069,  22.3170465],
            [114.1617069,  22.3043527],
            [114.1460610,  22.3043527]
        ]
    });

    map.addLayer({
        'id': 'NewYauMaTeishelterHongkong-layer',
        'source': 'NewYauMaTeishelterHongkong',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add PortCamilleRayonGolfeJuan image

    map.addSource('PortCamilleRayonGolfeJuan', {
        'type': 'image',
        'url': 'https://photos.agash.ca/PortCamilleRayonGolfeJuan.png',
        'coordinates': [
            [ 7.0699998,  43.5707001],
            [ 7.0852935,  43.5707001],
            [ 7.0852935,  43.5617766],
            [ 7.0699998,  43.5617766]
        ]
    });

    map.addLayer({
        'id': 'PortCamilleRayonGolfeJuan-layer',
        'source': 'PortCamilleRayonGolfeJuan',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add PyramidsOfGiza image

    map.addSource('PyramidsOfGiza', {
        'type': 'image',
        'url': 'https://photos.agash.ca/PyramidsOfGiza.png',
        'coordinates': [
            [ 31.1257876,  29.9813191],
            [ 31.1402810,  29.9813191],
            [ 31.1402810,  29.9709339],
            [ 31.1257876,  29.9709339]
        ]
    });

    map.addLayer({
        'id': 'PyramidsOfGiza-layer',
        'source': 'PyramidsOfGiza',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add Sealand image

    map.addSource('Sealand', {
        'type': 'image',
        'url': 'https://photos.agash.ca/Sealand.png',
        'coordinates': [
            [ 1.4797713,  51.8998809],
            [ 1.4864099,  51.8998809],
            [ 1.4864099,  51.8929971],
            [ 1.4797713,  51.8929971]
        ]
    });

    map.addLayer({
        'id': 'Sealand-layer',
        'source': 'Sealand',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add ShenzhenBao'anInternationalAirport image

    map.addSource('ShenzhenBaoanInternationalAirport', {
        'type': 'image',
        'url': 'https://photos.agash.ca/ShenzhenBaoanInternationalAirport.png',
        'coordinates': [
            [113.7976525,  22.6376172],
            [113.8158766,  22.6376172],
            [113.8158766,  22.6234194],
            [113.7976525,  22.6234194]
        ]
    });

    map.addLayer({
        'id': 'ShenzhenBaoanInternationalAirport-layer',
        'source': 'ShenzhenBaoanInternationalAirport',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add SiedlcePoland image

    map.addSource('SiedlcePoland', {
        'type': 'image',
        'url': 'https://photos.agash.ca/SiedlcePoland.png',
        'coordinates': [
            [ 22.2635107,  52.1679498],
            [ 22.2788980,  52.1679498],
            [ 22.2788980,  52.1579486],
            [ 22.2635107,  52.1579486]
        ]
    });

    map.addLayer({
        'id': 'SiedlcePoland-layer',
        'source': 'SiedlcePoland',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        }
    });
    
    //Add SiedlcePolandZoom image

    map.addSource('SiedlcePolandZoom', {
        'type': 'image',
        'url': 'https://photos.agash.ca/SiedlcePolandZoom.png',
        'coordinates': [
            [ 22.2652131,  52.1633222],
            [ 22.2755428,  52.1633222],
            [ 22.2755428,  52.1602001],
            [ 22.2652131,  52.1602001]
        ]
    });

    map.addLayer({
        'id': 'SiedlcePolandZoom-layer',
        'source': 'SiedlcePolandZoom',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        },
        'layout': {
            'visibility': 'none'
        }
    });
    
    //Add PetronasNIR2 image
    map.addSource('PetronasNIR2', {
        'type': 'image',
        'url': 'https://photos.agash.ca/PetronasNIR2.png',
        'coordinates': [
            [101.7081938,   3.1611142],
            [101.7177900,   3.1611142],
            [101.7177900,   3.1522316],
            [101.7081938,   3.1522316]
        ]
    });

    map.addLayer({
        'id': 'PetronasNIR2-layer',
        'source': 'PetronasNIR2',
        'type': 'raster',
        'paint': {
            'raster-fade-duration': 0,
            'raster-emissive-strength': 1
        },
        'layout': {
            'visibility': 'none'
        }
    });

}
function viewLayer(layerName, num){
    if (toggleViewBtn.style.backgroundImage == 'url("images/hide.png")'){
        toggleViewBtn.style.backgroundImage = 'url("images/view.png")'
    }
    if (layerName != 'get'){
        trueName = layerName.replace("Marker", "-layer");
        if (trueName != oldLayerName && oldLayerName != '' && num != 1){
            map.setLayoutProperty(oldLayerName, 'visibility', 'visible');
            viewNum = 0;
            switchLayerNum = 0;
        }
    }
    else {
        return trueName;
    }
    oldLayerName = trueName;
    
}

function switchBtnPower(switchNum){
    if (switchNum == 1) {
        switchBtn.style.backgroundColor = 'white';
        switchBtn.style.pointerEvents = 'auto';
        document.getElementById('switchTip').textContent = "Alternate image";
    }
    else {
        switchBtn.style.backgroundColor = 'gray';
        switchBtn.style.pointerEvents = 'none';
        document.getElementById('switchTip').textContent = "No alternate image";
    }
}
function switchLayer(layer1, layer2){
    if (layer1 == 'none') {
        layerName1 = layer1;
        layerName2 = layer2;
    }
    else if (layer1 != 'on' && layer1 != 'off'){
        layerName1 = layer1;
        layerName2 = layer2;
        viewLayerName1 = layerName1.replace("-layer", "").concat("Marker");
        viewLayerName2 = layerName2.replace("-layer", "").concat("Marker");
        viewLayer(viewLayerName1);
        map.setLayoutProperty(layerName2, 'visibility', 'none');
        if (toggleViewBtn.style.backgroundImage == 'url("images/hide.png")'){
            toggleViewBtn.click();
        }
    }
    if (layer1 == 'off') {
        viewLayer(viewLayerName2);
        map.setLayoutProperty(layerName1, 'visibility', 'none');
        map.setLayoutProperty(layerName2, 'visibility', 'visible');
    }
    else if (layer1 == 'on') {
        viewLayer(viewLayerName1);
        map.setLayoutProperty(layerName1, 'visibility', 'visible');
        map.setLayoutProperty(layerName2, 'visibility', 'none');
    }
}

//add markers
function addMarkers(map) {
    const ArctowskiDiv = document.createElement('div');
    ArctowskiDiv.className = "marker";
    ArctowskiDiv.id = 'ArctowskiStationMarker';
    const ArctowskiMarker = new mapboxgl.Marker(ArctowskiDiv)
        .setLngLat([-58.4778433, -62.1571386])
        .addTo(map);
    ArctowskiDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-58.4705175, -62.1592260],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });
	
	const NorthSentinelDiv = document.createElement('div');
    NorthSentinelDiv.className = "marker";
    NorthSentinelDiv.id = 'NorthSentinelMarker';
    const NorthSentinelMarker = new mapboxgl.Marker(NorthSentinelDiv)
        .setLngLat([92.2098629, 11.5957307])
        .addTo(map);
    NorthSentinelDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [92.2124113, 11.5938552],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });
	
	const GoldenGateDiv = document.createElement('div');
    GoldenGateDiv.className = "marker";
    GoldenGateDiv.id = 'GoldenGateMarker';
    const GoldenGateMarker = new mapboxgl.Marker(GoldenGateDiv)
        .setLngLat([-122.4830624, 37.8276392])
        .addTo(map);
    GoldenGateDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-122.4789436, 37.8183215],
            zoom: 14,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });
	
	const DallolEthiopiaDiv = document.createElement('div');
    DallolEthiopiaDiv.className = "marker";
    DallolEthiopiaDiv.id = 'DallolEthiopiaMarker';
    const DallolEthiopiaMarker = new mapboxgl.Marker(DallolEthiopiaDiv)
        .setLngLat([40.2925530, 14.2456428])
        .addTo(map);
    DallolEthiopiaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [40.2986674, 14.2399987],
            zoom: 14,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });
	
    const AlverniaMarkerDiv = document.createElement('div');
    AlverniaMarkerDiv.className = "marker";
    AlverniaMarkerDiv.id = 'AlverniaPlanetMarker';
    const AlverniaMarker = new mapboxgl.Marker(AlverniaMarkerDiv)
        .setLngLat([19.5439031, 50.1047289])
        .addTo(map);
    AlverniaMarkerDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [19.5475044, 50.1026258],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id); 
    });

    const HeydarAliyevAirportDiv = document.createElement('div');
    HeydarAliyevAirportDiv.className = "marker";
    HeydarAliyevAirportDiv.id = 'HeydarAliyevAirportMarker';
    const HeydarAliyevAirportMarker = new mapboxgl.Marker(HeydarAliyevAirportDiv)
        .setLngLat([ 50.0460162,  40.4684786])
        .addTo(map);
    HeydarAliyevAirportDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 50.0525381,  40.4657394],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const MumbaiAirportDiv = document.createElement('div');
    MumbaiAirportDiv.className = "marker";
    MumbaiAirportDiv.id = 'MumbaiAirportMarker';
    const MumbaiAirportMarker = new mapboxgl.Marker(MumbaiAirportDiv)
        .setLngLat([ 72.8689918,  19.1004393])
        .addTo(map);
    MumbaiAirportDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 72.8741491,  19.0964905],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const CuatroTorresDiv = document.createElement('div');
    CuatroTorresDiv.className = "marker";
    CuatroTorresDiv.id = 'CuatroTorresMarker';
    const CuatroTorresMarker = new mapboxgl.Marker(CuatroTorresDiv)
        .setLngLat([ -3.6939235,  40.4842540])
        .addTo(map);
    CuatroTorresDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ -3.6882077,  40.4797432],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const AlumbreraDiv = document.createElement('div');
    AlumbreraDiv.className = "marker";
    AlumbreraDiv.id = 'AlumbreraMarker';
    const AlumbreraMarker = new mapboxgl.Marker(AlumbreraDiv)
        .setLngLat([-67.3785227, -26.2072537])
        .addTo(map);
    AlumbreraDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-67.3714800, -26.2135743],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const PetronasDiv = document.createElement('div');
    PetronasDiv.className = "marker";
    PetronasDiv.id = 'PetronasMarker';
    const PetronasMarker = new mapboxgl.Marker(PetronasDiv)
        .setLngLat([101.7080049,   3.1611789])
        .addTo(map);
    PetronasDiv.addEventListener('click', (e) => {
        switchLayer('Petronas-layer', 'PetronasNIR2-layer');
        switchBtnPower(1);
        map.flyTo({
            center: [101.7130903,   3.1565901],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const VolcanPoruñitaDiv = document.createElement('div');
    VolcanPoruñitaDiv.className = "marker";
    VolcanPoruñitaDiv.id = 'VolcanPoruñitaMarker';
    const VolcanPoruñitaMarker = new mapboxgl.Marker(VolcanPoruñitaDiv)
        .setLngLat([-68.3014837, -21.3113368])
        .addTo(map);
    VolcanPoruñitaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-68.2934697, -21.3179863],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const EixampleDiv = document.createElement('div');
    EixampleDiv.className = "marker";
    EixampleDiv.id = 'EixampleMarker';
    const EixampleMarker = new mapboxgl.Marker(EixampleDiv, {anchor: 'bottom'})
        .setLngLat([2.1516329, 41.3890737])
        .addTo(map);
    EixampleDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [2.1540143, 41.3821744],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const HungaTongaDiv = document.createElement('div');
    HungaTongaDiv.className = "marker";
    HungaTongaDiv.id = 'HungaTongaMarker';
    const HungaTongaMarker = new mapboxgl.Marker(HungaTongaDiv)
        .setLngLat([-175.4003250, -20.5386411])
        //.setLngLat([-175.4003680,-20.5354617])
        .addTo(map);
    HungaTongaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-175.3921849, -20.5446238],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const BeijingDaxingDiv = document.createElement('div');
    BeijingDaxingDiv.className = "marker";
    BeijingDaxingDiv.id = 'BeijingDaxingMarker';
    const BeijingDaxingMarker = new mapboxgl.Marker(BeijingDaxingDiv)
        .setLngLat([116.4018903, 39.5170206])
        .addTo(map);
    BeijingDaxingDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [116.4110812, 39.5099919],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const VolcanJoteDiv = document.createElement('div');
    VolcanJoteDiv.className = "marker";
    VolcanJoteDiv.id = 'VolcanJoteMarker';
    const VolcanJoteMarker = new mapboxgl.Marker(VolcanJoteDiv)
        .setLngLat([-67.3390564, -26.2892999])
        .addTo(map);
    VolcanJoteDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-67.3292962, -26.2955358],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const SantaCruzdeIsloteDiv = document.createElement('div');
    SantaCruzdeIsloteDiv.className = "marker";
    SantaCruzdeIsloteDiv.id = 'SantaCruzdeIsloteMarker';
    const SantaCruzdeIsloteMarker = new mapboxgl.Marker(SantaCruzdeIsloteDiv)
        .setLngLat([-75.8611806,   9.7877409])
        .addTo(map);
    SantaCruzdeIsloteDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-75.8590859,   9.7858433],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const HuntsvilleAlabamaDiv = document.createElement('div');
    HuntsvilleAlabamaDiv.className = "marker";
    HuntsvilleAlabamaDiv.id = 'HuntsvilleAlabamaMarker';
    const HuntsvilleAlabamaMarker = new mapboxgl.Marker(HuntsvilleAlabamaDiv)
        .setLngLat([-86.6578632,  34.7129592])
        .addTo(map);
    HuntsvilleAlabamaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-86.6558048,  34.7111980],
            zoom: 17,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const DongdaemunDesignPlazaDiv = document.createElement('div');
    DongdaemunDesignPlazaDiv.className = "marker";
    DongdaemunDesignPlazaDiv.id = 'DongdaemunDesignPlazaMarker';
    const DongdaemunDesignPlazaMarker = new mapboxgl.Marker(DongdaemunDesignPlazaDiv)
        .setLngLat([127.0069694,  37.5695652])
        .addTo(map);
    DongdaemunDesignPlazaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [127.0103303,  37.5669884],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });
    
    let costaSwitch = 0;
    const CostaConcordia20130917Div = document.createElement('div');
    CostaConcordia20130917Div.className = "marker";
    CostaConcordia20130917Div.id = 'CostaConcordia20130917Marker';
    const CostaConcordia20130917Marker = new mapboxgl.Marker(CostaConcordia20130917Div)
        .setLngLat([ 10.9174804,  42.3686645])
        .addTo(map);
    CostaConcordia20130917Div.addEventListener('click', (e) => {
        switchBtnPower(1);
        map.flyTo({
            center: [ 10.9214388,  42.3658301],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        map.setLayoutProperty('CostaConcordia20130917-layer', 'visibility', 'none');
        map.setLayoutProperty('CostaConcordia20130712-layer', 'visibility', 'visible');
        switchLayer('CostaConcordia20130712-layer', 'CostaConcordia20130917-layer');
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
    GreatBlueHoleDiv.id = 'GreatBlueHoleMarker';
    const GreatBlueHoleMarker = new mapboxgl.Marker(GreatBlueHoleDiv)
        .setLngLat([-87.5392281,  17.3202921])
        .addTo(map);
    GreatBlueHoleDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-87.5345375,  17.3158507],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const GomaDiv = document.createElement('div');
    GomaDiv.className = "marker";
    GomaDiv.id = 'GomaMarker';
    const GomaMarker = new mapboxgl.Marker(GomaDiv)
        .setLngLat([ 29.2362327,  -1.6336956])
        .addTo(map);
    GomaDiv.addEventListener('click', (e) => {
        switchBtnPower(1);
        map.flyTo({
            center: [ 29.2397031,  -1.6408191],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        map.setLayoutProperty('Goma-layer', 'visibility', 'visible');
        map.setLayoutProperty('GomaNIR-layer', 'visibility', 'none');
        switchLayer('Goma-layer', 'GomaNIR-layer');
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
    DowntownDubaiDiv.id = 'DowntownDubaiMarker';
    const DowntownDubaiMarker = new mapboxgl.Marker(DowntownDubaiDiv)
        .setLngLat([ 55.2652644,  25.2052848])
        .addTo(map);
    DowntownDubaiDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 55.2744506,  25.1969560],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const HotelRyugyongPyongyangDiv = document.createElement('div');
    HotelRyugyongPyongyangDiv.className = "marker";
    HotelRyugyongPyongyangDiv.id = 'HotelRyugyongPyongyangMarker';
    const HotelRyugyongPyongyangMarker = new mapboxgl.Marker(HotelRyugyongPyongyangDiv)
        .setLngLat([125.7243704,  39.0426505])
        .addTo(map);
    HotelRyugyongPyongyangDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [125.7311787,  39.0363540],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const JudgeHarryPregersonInterchangeDiv = document.createElement('div');
    JudgeHarryPregersonInterchangeDiv.className = "marker";
    JudgeHarryPregersonInterchangeDiv.id = 'JudgeHarryPregersonInterchangeMarker';
    const JudgeHarryPregersonInterchangeMarker = new mapboxgl.Marker(JudgeHarryPregersonInterchangeDiv)
        .setLngLat([-118.2849491,  33.9317151])
        .addTo(map);
    JudgeHarryPregersonInterchangeDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-118.2806319,  33.9285273],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const BarringerCraterDiv = document.createElement('div');
    BarringerCraterDiv.className = "marker";
    BarringerCraterDiv.id = 'BarringerCraterMarker';
    const BarringerCraterMarker = new mapboxgl.Marker(BarringerCraterDiv)
        .setLngLat([-111.0319917,  35.0347428])
        .addTo(map);
    BarringerCraterDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-111.0227980,  35.0272428],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const EritreaHalabaDiv = document.createElement('div');
    EritreaHalabaDiv.className = "marker";
    EritreaHalabaDiv.id = 'EritreaHalabaMarker';
    const EritreaHalabaMarker = new mapboxgl.Marker(EritreaHalabaDiv)
        .setLngLat([ 41.7936167,  13.9189114])
        .addTo(map);
    EritreaHalabaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 41.7996784,  13.9120866],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const MalborkCastleDiv = document.createElement('div');
    MalborkCastleDiv.className = "marker";
    MalborkCastleDiv.id = 'MalborkCastleMarker';
    const MalborkCastleMarker = new mapboxgl.Marker(MalborkCastleDiv)
        .setLngLat([ 19.0248672,  54.0436092])
        .addTo(map);
    MalborkCastleDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 19.0293384,  54.0407455],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const LuboszówPolandDiv = document.createElement('div');
    LuboszówPolandDiv.className = "marker";
    LuboszówPolandDiv.id = 'LuboszówPolandMarker';
    const LuboszówPolandMarker = new mapboxgl.Marker(LuboszówPolandDiv)
        .setLngLat([ 15.3913811,  51.4283021])
        .addTo(map);
    LuboszówPolandDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 15.3952125,  51.4262891],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });

    const KuwaitAirportDiv = document.createElement('div');
    KuwaitAirportDiv.className = "marker";
    KuwaitAirportDiv.id = 'KuwaitAirportMarker';
    const KuwaitAirportMarker = new mapboxgl.Marker(KuwaitAirportDiv)
        .setLngLat([ 47.9809110,  29.2203451])
        .addTo(map);
    KuwaitAirportDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [ 47.9875710,  29.2142234],
            zoom: 16,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        viewLayer(e.srcElement.id);
    });
        const NewYauMaTeishelterHongkongDiv = document.createElement('div');
    NewYauMaTeishelterHongkongDiv.className = "marker";
    NewYauMaTeishelterHongkongDiv.id = 'NewYauMaTeishelterHongkongMarker';
    const NewYauMaTeishelterHongkongMarker = new mapboxgl.Marker(NewYauMaTeishelterHongkongDiv)
        .setLngLat([114.1460610,  22.3170465])
        .addTo(map);
    NewYauMaTeishelterHongkongDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        viewLayer(e.srcElement.id);
        map.flyTo({
            center: [114.1538840,  22.3106996],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const PortCamilleRayonGolfeJuanDiv = document.createElement('div');
    PortCamilleRayonGolfeJuanDiv.className = "marker";
    PortCamilleRayonGolfeJuanDiv.id = 'PortCamilleRayonGolfeJuanMarker';
    const PortCamilleRayonGolfeJuanMarker = new mapboxgl.Marker(PortCamilleRayonGolfeJuanDiv)
        .setLngLat([ 7.0699998,  43.5707001])
        .addTo(map);
    PortCamilleRayonGolfeJuanDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        viewLayer(e.srcElement.id);
        map.flyTo({
            center: [ 7.0776466,  43.5662384],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const PyramidsOfGizaDiv = document.createElement('div');
    PyramidsOfGizaDiv.className = "marker";
    PyramidsOfGizaDiv.id = 'PyramidsOfGizaMarker';
    const PyramidsOfGizaMarker = new mapboxgl.Marker(PyramidsOfGizaDiv)
        .setLngLat([ 31.1257876,  29.9813191])
        .addTo(map);
    PyramidsOfGizaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        viewLayer(e.srcElement.id);
        map.flyTo({
            center: [ 31.1330343,  29.9761265],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const SealandDiv = document.createElement('div');
    SealandDiv.className = "marker";
    SealandDiv.id = 'SealandMarker';
    const SealandMarker = new mapboxgl.Marker(SealandDiv)
        .setLngLat([ 1.4797713,  51.8998809])
        .addTo(map);
    SealandDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        viewLayer(e.srcElement.id);
        map.flyTo({
            center: [ 1.4830906,  51.8964390],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const ShenzhenBaoanInternationalAirportDiv = document.createElement('div');
    ShenzhenBaoanInternationalAirportDiv.className = "marker";
    ShenzhenBaoanInternationalAirportDiv.id = 'ShenzhenBaoanInternationalAirportMarker';
    const ShenzhenBaoanInternationalAirportMarker = new mapboxgl.Marker(ShenzhenBaoanInternationalAirportDiv)
        .setLngLat([113.7976525,  22.6376172])
        .addTo(map);
    ShenzhenBaoanInternationalAirportDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        viewLayer(e.srcElement.id);
        map.flyTo({
            center: [113.8067645,  22.6305183],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    const SiedlcePolandDiv = document.createElement('div');
    SiedlcePolandDiv.className = "marker";
    SiedlcePolandDiv.id = 'SiedlcePolandMarker';
    const SiedlcePolandMarker = new mapboxgl.Marker(SiedlcePolandDiv)
        .setLngLat([ 22.2635107,  52.1679498])
        .addTo(map);
    SiedlcePolandDiv.addEventListener('click', (e) => {
        switchLayer('SiedlcePoland-layer','SiedlcePolandZoom-layer');
        switchBtnPower(1);
        map.flyTo({
            center: [ 22.2712044,  52.1629492],
            zoom: 15,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    //hover pin place text
    const placeNameText = document.getElementById('placeName');

    ArctowskiDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Arctowski';
    });
        
    NorthSentinelDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'North Sentinel';
    });
        
    GoldenGateDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Golden Gate';
    });
        
    DallolEthiopiaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Dallol Ethiopia';
    });
        
    HeydarAliyevAirportDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Heydar Aliyev Airport';
    });
        
    MumbaiAirportDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Mumbai Airport';
    });
        
    CuatroTorresDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Cuatro Torres';
    });
        
    AlumbreraDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Alumbrera';
    });
        
    PetronasDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Petronas';
    });
        
    VolcanPoruñitaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Volcan Poru ñita';
    });
        
    EixampleDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Eixample';
    });
        
    HungaTongaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Hunga Tonga';
    });
    
    BeijingDaxingDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Beijing Daxing';
    });
        
    VolcanJoteDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Volcan Jote';
    });
        
    SantaCruzdeIsloteDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Santa Cruzde Islote';
    });
        
    HuntsvilleAlabamaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Huntsville Alabama';
    });
        
    DongdaemunDesignPlazaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Dongdaemun Design Plaza';
    });
        
    // const CostaConcordiaSwitchText = document.createElement('p');
    // CostaConcordiaSwitchText.className = 'switchText';
    // CostaConcordiaSwitchText.textContent = "Click this pin to toggle between 2013-07-12 and 2013-09-17 (testing)";
    CostaConcordia20130917Div.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Costa Concordia';
        //CostaConcordia20130712Name.appendChild(CostaConcordiaSwitchText);
    });
        
    GreatBlueHoleDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Great Blue Hole';
    });
        
    // const GomaSwitchText = document.createElement('p');
    // GomaSwitchText.className = 'switchText';
    // GomaSwitchText.textContent = "Click this pin to toggle between natural colour and NIR (testing)";
    GomaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Goma';
        //GomaName.appendChild(GomaSwitchText);
    });
        
    DowntownDubaiDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Downtown Dubai';
    });
        
    HotelRyugyongPyongyangDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Hotel Ryugyong Pyongyang';
    });
        
    JudgeHarryPregersonInterchangeDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Judge Harry Pregerson Interchange';
    });
        
    BarringerCraterDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Barringer Crater';
    });
        
    EritreaHalabaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Eritrea Halaba';
    });
        
    MalborkCastleDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Malbork Castle';
    });
        
    LuboszówPolandDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Luboszów Poland';
    });
        
    KuwaitAirportDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Kuwait Airport';
    });

    AlverniaMarkerDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Alvernia';
    });

    NewYauMaTeishelterHongkongDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'New Yau Ma Teishelter Hongkong';
    });

    PortCamilleRayonGolfeJuanDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Port Camille Rayon Golfe-Juan';
    });

    PyramidsOfGizaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Pyramids Of Giza';
    });

    SealandDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Sealand';
    });

    ShenzhenBaoanInternationalAirportDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Shenzhen Bao\'an International Airport';
    });

    SiedlcePolandDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Siedlce Poland';
    });

    SiedlcePolandZoomDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Siedlce Poland Zoom';
    });

}
