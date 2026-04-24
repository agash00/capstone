mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhc2gyOCIsImEiOiJjbW9haTVmaHowNzc1MnFwenA4MGRqYjNjIn0.EmsXtKTofPNUU_D-kM61CA';

  // creates the map, setting the container to the id of the div you added in step 2, and setting the initial center and zoom level of the map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/agash28/cmoaiha48000001s9808i2sl9',
    center: [-175.391644,-20.543546],
    zoom: 18
});

map.on('load', () => {
    map.addSource('test', {
        'type': 'raster',
        'url': 'mapbox://agash28.18ffs00h'
    });
map.addLayer({
        'id': 'agash28.18ffs00h',
        'source': 'test',
        'type': 'raster'
    });
});

map.on('load', () => {
    map.addSource('test1', {
        'type': 'raster',
        'url': 'mapbox://agash28.capstone'
    });
map.addLayer({
        'id': 'agash28.capstone',
        'source': 'test1',
        'type': 'raster'
    });
});

map.on('load', () => {
    map.addSource('HungaTonga', {
        'type': 'image',
        'url': 'https://photos.agash.ca/Hunga+Tonga+2021-04-10+50cm2.jpg',
        'coordinates': [
            [-175.4024156, -20.5344739],
            [-175.3808094, -20.5344739],
            [-175.3808094, -20.5523455],
            [-175.4024156, -20.5523455]
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