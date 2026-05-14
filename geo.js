//let defaultText = 'Hover or click a pin on the map';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhc2gyOCIsImEiOiJjbW9haTVmaHowNzc1MnFwenA4MGRqYjNjIn0.EmsXtKTofPNUU_D-kM61CA';
let viewNum = 0;
let viewHowNum = 0;
let switchLayerNum = 0;
let flySpeed = 10000;
let flySpeedNum = 0;
let layerName1 = '';
let layerName2 = '';
let trueName = '';
let oldLayerName = '';
let dropdown = document.getElementById('dropdown-content');
let dropdownBtns = Array.from(dropdown.children);
let newDropdownBtns = [];
let addedLayers = {};
const imageDateList = 'ArctowskiStation2021-09-07, NorthSentinel2021-02-06, GoldenGate2020-09-20, DallolEthiopia2019-02-26, AlverniaPlanet2021-10-25, HeydarAliyevAirport2021-12-01, MumbaiAirport2021-11-26, CuatroTorres2021-11-16, Alumbrera2016-04-10, Petronas2020-02-13, VolcanPoruñita2016-03-19, EixampleNoDateFound, HungaTonga2021-04-10, BeijingDaxing2021-10-26, VolcanJote2018-12-02, SantaCruzdeIsloteNoDateFound, HuntsvilleAlabama2018-12-24, DongdaemunDesignPlaza2021-12-04, CostaConcordia201309172013-09-17, CostaConcordia201307122013-07-12, Goma2021-08-01, GomaNIR2021-08-01, HotelRyugyongPyongyang2021-10-17, JudgeHarryPregersonInterchange2021-07-21, BarringerCrater2019-11-14, EritreaHalaba2018-01-19, MalborkCastle2019-08-03, LuboszówPoland2018-08-07, KuwaitAirport2019-04-02, NewYauMaTeishelterHongkong2021-11-10, PortCamilleRayonGolfeJuan2020-11-17, PyramidsOfGiza2021-11-03, Sealand2020-04-05, ShenzhenBaoanInternationalAirport2021-05-16, SiedlcePoland2017-01-11, GreatBlueHole2021-05-30, DowntownDubai2019-10-31, VolcanNegroArgentina2018-12-15, TokaimachiTokai2020-04-27, TianfuIntlAirport2021-05-17, ThridrangarLighthouseNoDateFound, SymphonyOfTheSeas2016-05-04, SuloszowaNoDateFound, BahamaDunes2021-06-23';
//const placesList = ['ArctowskiStation', 'NorthSentinel', 'GoldenGate', 'DallolEthiopia', 'AlverniaMarker', 'HeydarAliyevAirport', 'MumbaiAirport', 'CuatroTorres', 'Alumbrera', 'Petronas', 'VolcanPoruÃ±ita', 'Eixample', 'HungaTonga', 'BeijingDaxing', 'VolcanJote', 'SantaCruzdeIslote', 'HuntsvilleAlabama', 'DongdaemunDesignPlaza', 'CostaConcordia20130917', 'CostaConcordia20130712', 'GreatBlueHole', 'Goma', 'GomaNIR', 'DowntownDubai', 'HotelRyugyongPyongyang', 'JudgeHarryPregersonInterchange', 'BarringerCrater', 'EritreaHalaba', 'MalborkCastle', 'LuboszÃ³wPoland', 'KuwaitAirport', 'NewYauMaTeishelterHongkong', 'PortCamilleRayonGolfeJuan', 'PyramidsOfGiza', 'Sealand', 'ShenzhenBaoanInternationalAirport', 'SiedlcePoland', 'VolcanNegroArgentina', 'TokaimachiTokai', 'TianfuIntlAirport', 'ThridrangarLighthouse', 'SymphonyOfTheSeas', 'Suloszowa', 'BahamaDunes'];
const placesList = ['ArctowskiStation', 'NorthSentinel', 'GoldenGate', 'DallolEthiopia', 'AlverniaPlanet', 'HeydarAliyevAirport', 'MumbaiAirport', 'CuatroTorres', 'Alumbrera', 'Petronas', 'VolcanPoruñita', 'Eixample', 'HungaTonga', 'BeijingDaxing', 'VolcanJote', 'SantaCruzdeIslote', 'HuntsvilleAlabama', 'DongdaemunDesignPlaza', 'CostaConcordia20130917', 'GreatBlueHole', 'Goma', 'DowntownDubai', 'HotelRyugyongPyongyang', 'JudgeHarryPregersonInterchange', 'BarringerCrater', 'EritreaHalaba', 'MalborkCastle', 'LuboszówPoland', 'KuwaitAirport', 'NewYauMaTeishelterHongkong', 'PortCamilleRayonGolfeJuan', 'PyramidsOfGiza', 'Sealand', 'ShenzhenBaoanInternationalAirport', 'SiedlcePoland', 'VolcanNegroArgentina', 'TokaimachiTokai', 'TianfuIntlAirport', 'ThridrangarLighthouse', 'SymphonyOfTheSeas', 'Suloszowa', 'BahamaDunes'];
const placesDesc = ['Henryk Arctowski Polish Antarctic Station (Polish: Polska Stacja Antarktyczna im. Henryka Arctowskiego) is a Polish research station on King George Island, off the coast of Antarctica.', 'North Sentinel Island is one of the Andaman Islands, an Indian archipelago in the Bay of Bengal that also includes South Sentinel Island. A protected area of India, it is home to the Sentinelese, an indigenous tribe in voluntary isolation who have defended—often with force—their protected isolation from the outside world.', 'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean in California, United States. The structure links San Francisco—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait.', '"Dallol is a cinder cone volcano in the Danakil Depression, although its unique geology means it lacks any of the archetypal volcanic looks." (brilliant-ethiopia.com) Dallol currently holds the official record for record high average temperature for an inhabited location on Earth, and an average annual temperature of 35 °C (95 °F) was recorded between 1960 and 1966.', "Alvernia Planet is a prominent edutainment park and multi-functional architectural complex located in Nieporaz, Poland, approximately 30 km (18.6 mi) west of Kraków. Originally established as one of Europe's most technologically advanced film production hubs, the facility was repurposed in 2017 following its acquisition by the Gremi International group, led by Polish entrepreneur Greg (Grzegorz) Hajdarowicz.", "Heydar Aliyev International Airport (Azerbaijani: Heydər Əliyev adına Beynəlxalq Hava Limanı; IATA: GYD, ICAO: UBBB) is an airport serving Azerbaijan's capital, Baku, and one of the seven international airports of Azerbaijan. It is the busiest airport both in Azerbaijan and in the South Caucasus as well as one of the busiest in the post-Soviet countries.", 'Chhatrapati Shivaji Maharaj International Airport (IATA: BOM, ICAO: VABB) is the international airport serving Mumbai, the capital of the Indian state of Maharashtra, and one of two airports serving the Mumbai Metropolitan Region, the other being the Navi Mumbai International Airport. It is the second-busiest airport in India in terms of total and international passenger traffic after Delhi, the 14th-busiest airport in Asia, and the 31st-busiest airport in the world by passenger traffic in 2024.', 'The Cuatro Torres Business Area (CTBA), also known as the Área de Negocios de las Cuatro Torres (Spanish for "Four Towers Business Area"), is a business district located in the Paseo de la Castellana in Madrid, Spain, on the former Ciudad Deportiva of Real Madrid. The area contains the four tallest skyscrapers in Spain, and four of the ten tallest in the European Union: the Torre Emperador, Torre de Cristal, Torre PwC and Torre Cepsa.', 'Antofagasta de la Sierra is a volcanic field in Argentina. The main type of volcanic edifice in the area are scoria cones, formed by the La Laguna, Jote and Alumbrera volcanoes. The first and last of these form a sub-group which is better researched. Various dating methods have yielded ages from several million to several hundred thousand years ago, but some vents appear to be of Holocene age. ', 'The Petronas Towers (Malay: Menara Berkembar Petronas), also known as the Petronas Twin Towers and colloquially the KLCC Twin Towers, are an interlinked pair of 88-storey supertall skyscrapers in Kuala Lumpur, Malaysia, standing at 451.9 m (1,483 ft). From 1996 to 2004, they were the tallest buildings in the world until they were surpassed by the Taipei 101 building.', 'Porunita is an inactive volcano in Chile.\nIt is a cinder cone which rises 90 metres (300 ft) above the surrounding plain and has a diameter of 800 metres (2,600 ft).', "The Eixample (Catalan: [əˈʃamplə] 'Expansion'; Spanish: Ensanche [enˈsantʃe]) is a district of Barcelona between the old city (Ciutat Vella) and what were once surrounding small towns (Sants, Gràcia, Sant Andreu, etc.), constructed in the 19th and early 20th centuries. Its population was 262,000 at the last census (2005).", "Hunga Tonga–Hunga Haʻapai () is a submarine volcano in the South Pacific located about 30 km (19 mi) south of the submarine volcano of Fonuafoʻou and 65 km (40 mi) north of Tongatapu, Tonga's main island. It is part of the highly active Kermadec-Tonga subduction zone and its associated volcanic arc, which extends from New Zealand north-northeast to Fiji, and is formed by the subduction of the Pacific Plate under the Indo-Australian Plate.", 'Beijing Daxing International Airport (IATA: PKX, ICAO: ZBAD) is one of two international airports serving Beijing, the capital of China (the other being the busier Beijing Capital International Airport).\nThe airport is located on the border of Beijing and Langfang, Hebei.', 'Antofagasta de la Sierra is a volcanic field in Argentina. The main type of volcanic edifice in the area are scoria cones, formed by the La Laguna, Jote and Alumbrera volcanoes.', "Santa Cruz del Islote (Spanish for 'Holy Cross of the Islet') is an artificial island located off the coast of Bolívar Department in Colombia, close to Tolú and Coveñas. It is a part of the Archipelago of San Bernardo.", 'The U.S. Space & Rocket Center in Huntsville, Alabama is a museum operated by the government of Alabama, showcasing rockets, achievements, and artifacts of the U.S. space program. Sometimes billed as "Earth\'s largest space museum", astronaut Owen Garriott described the place as, "a great way to learn about space in a town that has embraced the space program from the very beginning."  The city is nicknamed "The Rocket City" for its close association with U.S. space missions.', 'Dongdaemun Design Plaza (DDP; Korean: 동대문 디자인 플라자) is a major urban development landmark in Seoul, South Korea, designed by Zaha Hadid and Samoo, with a distinctively neofuturistic design characterized by the "powerful, curving forms of elongated structures." The landmark is the centerpiece of South Korea\'s fashion hub and popular tourist destination, Dongdaemun, featuring a walkable park on its roofs, large global exhibition spaces, futuristic retail stores, and restored parts of the Seoul fortress.\nThe DDP has been one of the main reasons for Seoul\'s designation as the World Design Capital in 2010.', 'On 13 January 2012, the seven-year-old Costa Cruises vessel Costa Concordia was on the first leg of a cruise around the Mediterranean Sea when the cruise ship deviated from her planned route at Isola del Giglio, Italy in order to perform a sail-by salute and struck a rock formation on the sea floor. This caused the ship to list and then to partially sink, landing unevenly on an underwater ledge. On 16 September 2013, the parbuckle salvage of the ship began, and by the early hours of 17 September, the ship was set upright on her underwater cradle.', 'The Great Blue Hole is a large marine sinkhole off the coast of Belize. It lies near the center of Lighthouse Reef, a small atoll 70 km (43 mi) from the mainland and Belize City.', 'Goma is a city in the eastern Democratic  Republic of the Congo. It is the capital and largest city of the North Kivu Province; it is located on the northern shore of Lake Kivu and shares borders with the Bukumu Chiefdom to the north, Rwanda to the east and the Masisi Territory to the west.', 'Downtown Dubai or The Dubai Downtown is a large-scale, mixed-use complex in Dubai, United Arab Emirates. It was developed by the Emaar real estate development company.', 'The Ryugyong Hotel (Korean: 류경호텔; sometimes spelled as Ryu-Gyong Hotel), or Yu-Kyung Hotel, is a 330 m (1,080 ft) tall unfinished pyramid-shaped skyscraper in Pyongyang, North Korea. Its name (lit. "capital of willows") is also one of the historical names for Pyongyang.', 'The Judge Harry Pregerson Interchange is a five-level stack interchange near the Athens and Watts communities of Los Angeles, California. It is the interchange of the following routes:\n\n I-105 (Glenn M. Anderson Freeway) – El Segundo, LAX Airport, Norwalk\n I-110 (Harbor Freeway) – San Pedro, Los Angeles\nThe interchange permits traffic entering the interchange in all directions to exit in all directions (unlike, for example, the Hollywood Split and East Los Angeles Interchange).', 'Meteor Crater, or Barringer Crater, is an impact crater about 37 mi (60 km)  east of Flagstaff and 18 mi (29 km) west of Winslow in the desert of northern Arizona,  United States. The site had several earlier names, and fragments of the meteorite are officially called the Canyon Diablo Meteorite, after the adjacent Canyon Diablo.', 'Eritrea, officially the State of Eritrea, is a country in the Horn of Africa region of East Africa. Its capital and largest city is Asmara. The image shows the edge of a lava field.', 'The Castle of the Teutonic Order in Malbork, commonly known as Malbork Castle (Polish: Zamek w Malborku; German: Ordensburg Marienburg), is a Brick Gothic castle complex located in the town of Malbork, Poland, built in the 13th and significantly expanded in the 14th century. It is the largest castle in the world measured by land area and a UNESCO World Heritage Site.', 'Luboszów [luˈbɔʂuf] is a village in the administrative district of Gmina Osiecznica, within Bolesławiec County, Lower Silesian Voivodeship, in south-western Poland.\nIt is one of the smallest villages in Poland with only one household and two people registered.', 'Kuwait International Airport (Arabic: مطار الكويت الدولي, IATA: KWI, ICAO: OKKK) is an international airport located in the Farwaniya Governorate, Kuwait, 15.5 kilometers (9.6 mi) south of the centre of Kuwait City, spread over an area of 37.7 square kilometres (14.6 sq mi). As of 2025 it is the 12th busiest airport in the Middle East.', 'Yau Ma Tei Typhoon Shelter (Chinese: 油麻地避風塘) is a typhoon shelter located near Yau Ma Tei, Kowloon, Hong Kong.\n\n\n== History ==\nThe Government of Hong Kong planned for the construction of a second typhoon shelter after (the old) Causeway Bay Typhoon Shelter in late 1906.', 'Golfe-Juan (French pronunciation: [ɡɔlf ʒɥɑ̃]; Occitan: Lo Gorg Joan, Lo Golfe Joan) is a seaside resort on France\'s Côte d\'Azur. The distinct local character of Golfe-Juan is indicated by the existence of a demonym, "Golfe-Juanais", which is applied to its inhabitants.', 'The Great Pyramid of Giza is the largest of the Egyptian pyramids and the most famous landmark of the Giza pyramid complex in Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact.', 'The Principality of Sealand () is an unrecognised micronation on HM Fort Roughs (also known as Roughs Tower), an offshore platform in the North Sea. It is situated on Rough Sands, a sandbar located approximately 11 kilometres (6 nmi) from the coast of Suffolk and 13 kilometres (7 nmi) from the coast of Essex.', "Shenzhen Bao'an International Airport (IATA: SZX, ICAO: ZGSZ) — formerly Shenzhen Huangtian Airport (until 2001) — is an international airport serving the city of Shenzhen in South Central China's Guangdong province. It is on the east bank of the Pearl River in Bao'an District, 32 km (20 mi) northwest of the city centre.", "Siedlce (Polish pronunciation: ['ɕɛdlt͡sɛ] ) (Yiddish: שעדליץ Shedlits) is a city in the Masovian Voivodeship in eastern Poland with 74,780 inhabitants (as of 2024).\nThe city is situated between two small rivers, the Muchawka and the Helenka, around 90 kilometres (56 mi) east of Warsaw.", 'The Negro is a small volcano currently active, which is located in the Argentine province of Catamarca (Department of Tinogasta). It is 5 373 meters high.', 'Tōkai (東海市, Tōkai-shi) is a city located in Aichi Prefecture, Japan. As of 1 October 2019, the city had an estimated population of 113,698 in 51,035 households, and a population density of 2,618 persons per km2.', 'Chengdu Tianfu International Airport (IATA: TFU, ICAO: ZUTF; also known as Tianfu Airport) is one of two international airports serving Chengdu, the capital of Sichuan province in Southwestern China. It was planned in 2013 and opened in 2021, after Chengdu Shuangliu Airport had been exceeding its designed maximum passenger capacity for years.', 'Þrídrangaviti Lighthouse (transliterated as Thrídrangaviti) is an active lighthouse 7.2 kilometres (4.5 miles) off the southwest coast of Iceland, in the archipelago of Vestmannaeyjar. It is often described as one of the most isolated lighthouses in the world.', "Symphony of the Seas is an Oasis-class cruise ship owned and operated by Royal Caribbean International. She was built in 2018 in the Chantiers de l'Atlantique shipyard in Saint-Nazaire, France, the fourth in Royal Caribbean's Oasis class of cruise ships.", 'Sułoszowa [suwɔˈʂɔva] is a village in Kraków County, Lesser Poland Voivodeship, in southern Poland. It serves as the seat of an administrative district called Gmina Sułoszowa.', 'The Bahamas are a group of about 700 islands and cays in the western Atlantic Ocean, of which only between 30 and 40 are inhabited. The largest of the islands is Andros Island, located north of Cuba and 200 kilometres (120 miles) southeast of Florida.'];
const switchBtn = document.getElementById('switch');
const toggleViewBtn = document.getElementById('toggleViewBtn');
const toggleHowBtn = document.getElementById('toggleHowBtn');
const flySpeedBtn = document.getElementById('toggleSpeedBtn');
const intro = document.getElementById('intro');
const start = document.getElementById('start');
const update = document.getElementById('update');
const startBtn = document.getElementById('startBtn');
const updatebg = document.getElementById('updatebg');
const updateText = document.getElementById('updateText');
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
        style: 'mapbox://styles/agash28/cmoaiha48000001s9808i2sl9',
        zoom: 1
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
        addHowLayer(map);
        viewNum = 0;
        switchLayerNum = 0;
    });
    satBtn = document.getElementById('sat')
    standBtn = document.getElementById('stand')
    standBtn.addEventListener('click', () => {
        map.setStyle('mapbox://styles/agash28/cmoaiha48000001s9808i2sl9');
        satBtn.style.display = 'inline-block';
        standBtn.style.display = 'none';
        switchLayerNum = 0;
        viewNum = 0;
        setReady(map);
        if (layerName1 != '' && layerName1 != 'none'){
            viewLayer(layerName1.replace("-layer", "Marker"), 1);
            switchBtn.disabled = false;
            switchBtnPower(1);
        }
    });

    satBtn = document.getElementById('sat')
    satBtn.addEventListener('click', () => {
        map.setStyle('mapbox://styles/agash28/cmoj53vb5002l01s45wgy4s2s');
        satBtn.style.display = 'none';
        standBtn.style.display = 'inline-block';
        toggleViewBtn.style.backgroundImage = 'url("images/view.png")';
        if (layerName1 != '' && layerName1 != 'none'){
            viewLayer(layerName1.replace("-layer", "Marker"), 1);
            switchBtn.disabled = false;
            switchBtnPower(1);
        }
        switchLayerNum = 0;
        viewNum = 0;
        setReady(map);
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
    toggleHowBtn.addEventListener('click', () => {
        if (viewHowNum == 0){
            if (typeof map.getLayer(viewLayer('get').concat('HOW')) == 'undefined'){
                addLayers(viewLayer('get').replace('-layer', 'Marker'), 1);
            }
            map.setLayoutProperty(viewLayer('get').replace('-layer', '-layerHOW'), 'visibility', 'visible');
            viewHowNum = 1;
            toggleHowBtn.style.backgroundImage = 'url("images/howView.png")';
        }
        else {
            map.setLayoutProperty(viewLayer('get').replace('-layer', '-layerHOW'), 'visibility', 'none');
            viewHowNum = 0;
            toggleHowBtn.style.backgroundImage = 'url("images/howHide.png")';
        }
    });
    flySpeedBtn.addEventListener('click', () => {
        if (flySpeedNum == 0){
            flySpeed = flySpeed/2;
            flySpeedBtn.style.backgroundImage = 'url(images/superhero2x.png)';
            flySpeedNum = 1;
        }
        else if (flySpeedNum == 1) {
            flySpeed = flySpeed/2;
            flySpeedBtn.style.backgroundImage = 'url(images/superhero3x.png)';
            flySpeedNum = 2;
        }
        else if (flySpeedNum == 2) {
            flySpeed = flySpeed*8;
            flySpeedBtn.style.backgroundImage = 'url(images/superhero05x.png)';
            flySpeedNum = 3;
        }
        else if (flySpeedNum == 3) {
            flySpeed = flySpeed/2;
            flySpeedBtn.style.backgroundImage = 'url(images/superhero1x.png)';
            flySpeedNum = 0;
        }
    });
    return map;
}

//starts the map
map = addMap();
//checks when map is loaded
setReady(map);


//check if map is loaded (testing)
function setReady(map){
    if (startBtn.style.display == 'none'){
        update.style.display = 'block';
        updatebg.style.display = 'block';
        updateText.style.display = 'block';
    }
    else {
        start.style.display = 'block';
    }
    let readyInterval = setInterval(isReady, 500, map);
    function isReady(map) {
        if (map.loaded()){
            console.log("Ready");
            if (start.style.display == 'none'){
                update.style.display = 'none';
                updatebg.style.display = 'none';
                updateText.style.display = 'none';
                //document.getElementById(viewLayer('get').replace('-layer', 'Marker')).click();
                if (layerName1 != '' && layerName1 != 'none'){
                    addLayers(layerName1.replace('-layer', 'Marker'), 0);
                    addLayers(layerName2.replace('-layer', 'Marker'), 0);
                    switchLayer(layerName1, layerName2);
                }
                else{
                    addLayers(viewLayer('get').replace('-layer', 'Marker'), 0);
                }
            }
            //added button to start the map instead of auto load at each refresh
            else {
                startBtn.style.pointerEvents = 'auto';
                startBtn.addEventListener('click', () => {
                    start.style.display = 'none';
                    startBtn.style.display = 'none';
                    start.style.display = 'none';
                });
                startBtn.textContent = 'Explore Map';
            }
            clearInterval(readyInterval);
        }
        else{
            console.log("Not Ready");
        }
    }
}

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

    //Add GomaHOW image
    map.addSource('GomaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/GomaHOW.png',
        'coordinates': [
            [ 29.2362327,  -1.6336956],
            [ 29.2431734,  -1.6336956],
            [ 29.2431734,  -1.6479425],
            [ 29.2362327,  -1.6479425]
        ]
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

    //Add PetronasNIR2 image
    map.addSource('PetronasNIR', {
        'type': 'image',
        'url': 'https://photos.agash.ca/PetronasNIR2.png',
        'coordinates': [
            [101.7081938,   3.1611142],
            [101.7177900,   3.1611142],
            [101.7177900,   3.1522316],
            [101.7081938,   3.1522316]
        ]
    });

    //Add VolcanNegroArgentina image

    map.addSource('VolcanNegroArgentina', {
        'type': 'image',
        'url': 'https://photos.agash.ca/VolcanNegroArgentina2018-12-15.png',
        'coordinates': [
            [-68.3878686, -27.0935421],
            [-68.3734976, -27.0935421],
            [-68.3734976, -27.1056759],
            [-68.3878686, -27.1056759]
        ]
    });
    
    //Add TokaimachiTokai image

    map.addSource('TokaimachiTokai', {
        'type': 'image',
        'url': 'https://photos.agash.ca/TokaimachiTokai2020-04-27.png',
        'coordinates': [
            [136.8642456,  35.0359244],
            [136.8808648,  35.0359244],
            [136.8808648,  35.0228234],
            [136.8642456,  35.0228234]
        ]
    });

    //Add TianfuIntlAirport image

    map.addSource('TianfuIntlAirport', {
        'type': 'image',
        'url': 'https://photos.agash.ca/TianfuIntlAirport2021-05-17.png',
        'coordinates': [
            [104.4338811,  30.3218315],
            [104.4506464,  30.3218315],
            [104.4506464,  30.3068772],
            [104.4338811,  30.3068772]
        ]
    });

    //Add ThridrangarLighthouse image

    map.addSource('ThridrangarLighthouse', {
        'type': 'image',
        'url': 'https://photos.agash.ca/ThridrangarLighthouse.png',
        'coordinates': [
            [-20.3254558,  63.3917799],
            [-20.3147765,  63.3917799],
            [-20.3147765,  63.3860927],
            [-20.3254558,  63.3860927]
        ]
    });

    //Add SymphonyOfTheSeas image

    map.addSource('SymphonyOfTheSeas', {
        'type': 'image',
        'url': 'https://photos.agash.ca/SymphonyOfTheSeas2016-05-04.png',
        'coordinates': [
            [ -2.1907679,  47.2851343],
            [ -2.1854617,  47.2851343],
            [ -2.1854617,  47.2809112],
            [ -2.1907679,  47.2809112]
        ]
    });

    //Add Suloszowa image

    map.addSource('Suloszowa', {
        'type': 'image',
        'url': 'https://photos.agash.ca/Suloszowa.png',
        'coordinates': [
            [ 19.6870535,  50.2827341],
            [ 19.7335579,  50.2827341],
            [ 19.7335579,  50.2619479],
            [ 19.6870535,  50.2619479]
        ]
    });

    //Add BahamaDunes image

    map.addSource('BahamaDunes', {
        'type': 'image',
        'url': 'https://photos.agash.ca/BahamaDunes2021-06-23.png',
        'coordinates': [
            [-78.6063309,  25.4888037],
            [-78.5465979,  25.4888037],
            [-78.5465979,  25.4453043],
            [-78.6063309,  25.4453043]
        ]
    });

}

function addHowLayer(map){

    //Add Alumbrera HOW image
    
    map.addSource('AlumbreraHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/AlumbreraHOW.png',
        'coordinates': [
            [-67.3785227, -26.2072537],
            [-67.3644373, -26.2072537],
            [-67.3644373, -26.2198949],
            [-67.3785227, -26.2198949]
        ]
    });
    
    //Add ArctowskiStation HOW image
    
    map.addSource('ArctowskiStationHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/ArctowskiStationHOW.png',
        'coordinates': [
            [-58.4778433, -62.1571386],
            [-58.4631916, -62.1571386],
            [-58.4631916, -62.1613135],
            [-58.4778433, -62.1613135]
        ]
    });
    
    //Add BahamaDunes2021-06-23 HOW image
    
    // map.addSource('BahamaDunes2021-06-23HOW', {
    //     'type': 'image',
    //     'url': 'https://photos.agash.ca/BahamaDunes2021-06-23HOW.png',
    //     'coordinates': [
    //         [-78.6063309,  25.4888037],
    //         [-78.5465979,  25.4888037],
    //         [-78.5465979,  25.4453043],
    //         [-78.6063309,  25.4453043]
    //     ]
    // });

    // map.addLayer({
    //     'id': 'BahamaDunes2021-06-23-layerHOW',
    //     'source': 'BahamaDunes2021-06-23HOW',
    //     'type': 'raster',
    //     'paint': {
    //         'raster-fade-duration': 0,
    //         'raster-emissive-strength': 1
    //     },
    //     'layout': {
    //         'visibility': 'none'
    //     }
    // });
    
    //Add BeijingDaxing HOW image
    
    map.addSource('BeijingDaxingHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/BeijingDaxingHOW.png',
        'coordinates': [
            [116.4018903,  39.5170206],
            [116.4202720,  39.5170206],
            [116.4202720,  39.5029632],
            [116.4018903,  39.5029632]
        ]
    });
    
    //Add CostaConcordia20130917 HOW image
    
    map.addSource('CostaConcordia20130917HOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/CostaConcordia20130917HOW.png',
        'coordinates': [
            [ 10.9174804,  42.3686645],
            [ 10.9253973,  42.3686645],
            [ 10.9253973,  42.3629957],
            [ 10.9174804,  42.3629957]
        ]
    });
    
    //Add DallolEthiopia HOW image
    
    map.addSource('DallolEthiopiaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/DallolEthiopiaHOW.png',
        'coordinates': [
            [ 40.2925530,  14.2456428],
            [ 40.3047819,  14.2456428],
            [ 40.3047819,  14.2343546],
            [ 40.2925530,  14.2343546]
        ]
    });
    
    //Add DongdaemunDesignPlaza HOW image
    
    map.addSource('DongdaemunDesignPlazaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/DongdaemunDesignPlazaHOW.png',
        'coordinates': [
            [127.0069694,  37.5695652],
            [127.0136913,  37.5695652],
            [127.0136913,  37.5644117],
            [127.0069694,  37.5644117]
        ]
    });
    
    //Add EixampleBarcelona1 HOW image
    
    map.addSource('EixampleBarcelonaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/EixampleBarcelonaHOW.png',
        'coordinates': [
            [ 2.1448189,  41.3891015],
            [ 2.1632097,  41.3891015],
            [ 2.1632097,  41.3752473],
            [ 2.1448189,  41.3752473]
        ]
    });
    
    //Add GoldenGate HOW image
    
    map.addSource('GoldenGateHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/GoldenGateHOW.png',
        'coordinates': [
            [-122.4830624,  37.8276392],
            [-122.4748248,  37.8276392],
            [-122.4748248,  37.8090037],
            [-122.4830624,  37.8090037]
        ]
    });
    
    //Add HuntsvilleAlabama1 HOW image
    
    map.addSource('HuntsvilleAlabamaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/HuntsvilleAlabamaHOW.png',
        'coordinates': [
            [-86.6579534,  34.7128656],
            [-86.6537377,  34.7128656],
            [-86.6537377,  34.7095405],
            [-86.6579534,  34.7095405]
        ]
    });
    
    //Add HeydarAliyevAirport HOW image
    
    map.addSource('HeydarAliyevAirportHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/HeydarAliyevAirportHOW.png',
        'coordinates': [
            [ 50.0460162,  40.4684786],
            [ 50.0590599,  40.4684786],
            [ 50.0590599,  40.4630003],
            [ 50.0460162,  40.4630003]
        ]
    });
    
    //Add HungaTonga2 HOW image
    
    map.addSource('HungaTongaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/HungaTongaHOW.png',
        'coordinates': [
            [-175.4003250, -20.5386411],
            [-175.3840448, -20.5386411],
            [-175.3840448, -20.5506065],
            [-175.4003250, -20.5506065]
        ]
    });

    
    //Add MumbaiAirport HOW image
    
    map.addSource('MumbaiAirportHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/MumbaiAirportHOW.png',
        'coordinates': [
            [ 72.8689918,  19.1004393],
            [ 72.8793063,  19.1004393],
            [ 72.8793063,  19.0925417],
            [ 72.8689918,  19.0925417]
        ]
    });

    
    //Add NorthSentinel HOW image
    
    map.addSource('NorthSentinelHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/NorthSentinelHOW.png',
        'coordinates': [
            [ 92.2098629,  11.5957307],
            [ 92.2149598,  11.5957307],
            [ 92.2149598,  11.5919797],
            [ 92.2098629,  11.5919797]
        ]
    });

    
    //Add Petronas HOW image
    
    map.addSource('PetronasHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/PetronasHOW.png',
        'coordinates': [
            [101.7080049,   3.1611789],
            [101.7181758,   3.1611789],
            [101.7181758,   3.1520013],
            [101.7080049,   3.1520013]
        ]
    });
    
    //Add SantaCruzdeIslote HOW image
    
    map.addSource('SantaCruzdeIsloteHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/SantaCruzdeIsloteHOW.png',
        'coordinates': [
            [-75.8611806,   9.7877409],
            [-75.8569911,   9.7877409],
            [-75.8569911,   9.7839457],
            [-75.8611806,   9.7839457]
        ]
    });
    
    //Add VolcanJote HOW image
    
    map.addSource('VolcanJoteHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/VolcanJoteHOW.png',
        'coordinates': [
            [-67.3390564, -26.2892999],
            [-67.3195360, -26.2892999],
            [-67.3195360, -26.3017716],
            [-67.3390564, -26.3017716]
        ]
    });
    
    //Add VolcanPoruñita HOW image
    
    map.addSource('VolcanPoruñitaHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/VolcanPoruñitaHOW.png',
        'coordinates': [
            [-68.3014837, -21.3113368],
            [-68.2854558, -21.3113368],
            [-68.2854558, -21.3246358],
            [-68.3014837, -21.3246358]
        ]
    });

    
    map.addSource('GreatBlueHoleHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/GreatBlueHoleHOW.png',
        'coordinates': [
            [-87.5392281,  17.3202921],
            [-87.5298469,  17.3202921],
            [-87.5298469,  17.3114092],
            [-87.5392281,  17.3114092]
        ]
    });

    
    //Add Alvernia Planet HOW  image
    map.addSource('AlverniaPlanetHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/Alvernia+Planet+2021-10-25+50cmHOW.png',
        'coordinates': [
            [19.5439031, 50.1047289],
            [19.5511056, 50.1047289],
            [19.5511056, 50.1005226],
            [19.5439031, 50.1005226]
        ]
    });


       //Add CuatroTorres HOW image
    map.addSource('CuatroTorresHOW', {
        'type': 'image',
        'url': 'https://photos.agash.ca/CuatroTorresHOW.png',
        'coordinates': [
            [ -3.6939235,  40.4842540],
            [ -3.6824920,  40.4842540],
            [ -3.6824920,  40.4752324],
            [ -3.6939235,  40.4752324]
        ]
    });

}

function addLayers(divID, howNum) {
    const layers = {
        CuatroTorres: {
            'id': 'CuatroTorres-layer',
            'source': 'CuatroTorres',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },
        ArctowskiStation: {
            'id': 'ArctowskiStation-layer',
            'source': 'ArctowskiStation',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        NorthSentinel: {
            'id': 'NorthSentinel-layer',
            'source': 'NorthSentinel',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        GoldenGate: {
            'id': 'GoldenGate-layer',
            'source': 'GoldenGate',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        DallolEthiopia: {
            'id': 'DallolEthiopia-layer',
            'source': 'DallolEthiopia',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        AlverniaPlanet: {
            'id': 'AlverniaPlanet-layer',
            'source': 'AlverniaPlanet',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        HeydarAliyevAirport: {
            'id': 'HeydarAliyevAirport-layer',
            'source': 'HeydarAliyevAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        MumbaiAirport: {
            'id': 'MumbaiAirport-layer',
            'source': 'MumbaiAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        CuatroTorres: {
            'id': 'CuatroTorres-layer',
            'source': 'CuatroTorres',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        Alumbrera: {
            'id': 'Alumbrera-layer',
            'source': 'Alumbrera',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        Petronas: {
            'id': 'Petronas-layer',
            'source': 'Petronas',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        PetronasNIR: {
            'id': 'PetronasNIR-layer',
            'source': 'PetronasNIR',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },
        VolcanPoruñita: {
            'id': 'VolcanPoruñita-layer',
            'source': 'VolcanPoruñita',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        Eixample: {
            'id': 'Eixample-layer',
            'source': 'Eixample',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        HungaTonga: {
            'id': 'HungaTonga-layer',
            'source': 'HungaTonga',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        BeijingDaxing: {
            'id': 'BeijingDaxing-layer',
            'source': 'BeijingDaxing',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        VolcanJote: {
            'id': 'VolcanJote-layer',
            'source': 'VolcanJote',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        SantaCruzdeIslote: {
            'id': 'SantaCruzdeIslote-layer',
            'source': 'SantaCruzdeIslote',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        HuntsvilleAlabama: {
            'id': 'HuntsvilleAlabama-layer',
            'source': 'HuntsvilleAlabama',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        DongdaemunDesignPlaza: {
            'id': 'DongdaemunDesignPlaza-layer',
            'source': 'DongdaemunDesignPlaza',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        CostaConcordia20130917: {
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
        },
        
        CostaConcordia20130712: {
            'id': 'CostaConcordia20130712-layer',
            'source': 'CostaConcordia20130712',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        GreatBlueHole: {
            'id': 'GreatBlueHole-layer',
            'source': 'GreatBlueHole',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        Goma: {
            'id': 'Goma-layer',
            'source': 'Goma',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        GomaNIR: {
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
        },

        DowntownDubai: {
            'id': 'DowntownDubai-layer',
            'source': 'DowntownDubai',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        HotelRyugyongPyongyang: {
            'id': 'HotelRyugyongPyongyang-layer',
            'source': 'HotelRyugyongPyongyang',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        JudgeHarryPregersonInterchange: {
            'id': 'JudgeHarryPregersonInterchange-layer',
            'source': 'JudgeHarryPregersonInterchange',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        BarringerCrater: {
            'id': 'BarringerCrater-layer',
            'source': 'BarringerCrater',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        EritreaHalaba: {
            'id': 'EritreaHalaba-layer',
            'source': 'EritreaHalaba',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        MalborkCastle: {
            'id': 'MalborkCastle-layer',
            'source': 'MalborkCastle',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        LuboszówPoland: {
            'id': 'LuboszówPoland-layer',
            'source': 'LuboszówPoland',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        KuwaitAirport: {
            'id': 'KuwaitAirport-layer',
            'source': 'KuwaitAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        NewYauMaTeishelterHongkong: {
            'id': 'NewYauMaTeishelterHongkong-layer',
            'source': 'NewYauMaTeishelterHongkong',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        PortCamilleRayonGolfeJuan: {
            'id': 'PortCamilleRayonGolfeJuan-layer',
            'source': 'PortCamilleRayonGolfeJuan',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        PyramidsOfGiza: {
            'id': 'PyramidsOfGiza-layer',
            'source': 'PyramidsOfGiza',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        Sealand: {
            'id': 'Sealand-layer',
            'source': 'Sealand',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        ShenzhenBaoanInternationalAirport: {
            'id': 'ShenzhenBaoanInternationalAirport-layer',
            'source': 'ShenzhenBaoanInternationalAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        SiedlcePoland: {
            'id': 'SiedlcePoland-layer',
            'source': 'SiedlcePoland',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        SiedlcePolandZoom: {
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
        },

        VolcanNegroArgentina: {
            'id': 'VolcanNegroArgentina-layer',
            'source': 'VolcanNegroArgentina',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        TokaimachiTokai: {
            'id': 'TokaimachiTokai-layer',
            'source': 'TokaimachiTokai',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        TianfuIntlAirport: {
            'id': 'TianfuIntlAirport-layer',
            'source': 'TianfuIntlAirport',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        ThridrangarLighthouse: {
            'id': 'ThridrangarLighthouse-layer',
            'source': 'ThridrangarLighthouse',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        SymphonyOfTheSeas: {
            'id': 'SymphonyOfTheSeas-layer',
            'source': 'SymphonyOfTheSeas',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        Suloszowa: {
            'id': 'Suloszowa-layer',
            'source': 'Suloszowa',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        },

        BahamaDunes: {
            'id': 'BahamaDunes-layer',
            'source': 'BahamaDunes',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            }
        }
    };

    const howLayers = {
        ArctowskiStationHOW: {
            'id': 'ArctowskiStation-layerHOW',
            'source': 'ArctowskiStationHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        NorthSentinelHOW: {
            'id': 'NorthSentinel-layerHOW',
            'source': 'NorthSentinelHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        GoldenGateHOW: {
            'id': 'GoldenGate-layerHOW',
            'source': 'GoldenGateHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        DallolEthiopiaHOW: {
            'id': 'DallolEthiopia-layerHOW',
            'source': 'DallolEthiopiaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        AlverniaPlanetHOW: {
            'id': 'AlverniaPlanet-layerHOW',
            'source': 'AlverniaPlanetHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        HeydarAliyevAirportHOW: {
            'id': 'HeydarAliyevAirport-layerHOW',
            'source': 'HeydarAliyevAirportHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        MumbaiAirportHOW: {
            'id': 'MumbaiAirport-layerHOW',
            'source': 'MumbaiAirportHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        CuatroTorresHOW: {
            'id': 'CuatroTorres-layerHOW',
            'source': 'CuatroTorresHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        AlumbreraHOW: {
            'id': 'Alumbrera-layerHOW',
            'source': 'AlumbreraHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        PetronasHOW: {
            'id': 'Petronas-layerHOW',
            'source': 'PetronasHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        PetronasNIRHOW: {
            'id': 'PetronasNIR-layerHOW',
            'source': 'PetronasHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        VolcanPoruñitaHOW: {
            'id': 'VolcanPoruñita-layerHOW',
            'source': 'VolcanPoruñitaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        EixampleHOW: {
            'id': 'Eixample-layerHOW',
            'source': 'EixampleBarcelonaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        HungaTongaHOW: {
            'id': 'HungaTonga-layerHOW',
            'source': 'HungaTongaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        BeijingDaxingHOW: {
            'id': 'BeijingDaxing-layerHOW',
            'source': 'BeijingDaxingHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        VolcanJoteHOW: {
            'id': 'VolcanJote-layerHOW',
            'source': 'VolcanJoteHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        SantaCruzdeIsloteHOW: {
            'id': 'SantaCruzdeIslote-layerHOW',
            'source': 'SantaCruzdeIsloteHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        HuntsvilleAlabamaHOW: {
            'id': 'HuntsvilleAlabama-layerHOW',
            'source': 'HuntsvilleAlabamaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        DongdaemunDesignPlazaHOW: {
            'id': 'DongdaemunDesignPlaza-layerHOW',
            'source': 'DongdaemunDesignPlazaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        CostaConcordia20130917HOW: {
            'id': 'CostaConcordia20130917-layerHOW',
            'source': 'CostaConcordia20130917HOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        CostaConcordia20130712HOW: {
            'id': 'CostaConcordia20130712-layerHOW',
            'source': 'CostaConcordia20130917HOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        GreatBlueHoleHOW: {
            'id': 'GreatBlueHole-layerHOW',
            'source': 'GreatBlueHoleHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        GomaHOW: {
            'id': 'Goma-layerHOW',
            'source': 'GomaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        GomaNIRHOW: {
            'id': 'GomaNIR-layerHOW',
            'source': 'GomaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        DowntownDubaiHOW: {
            'id': 'DowntownDubai-layerHOW',
            'source': 'DowntownDubaiHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        HotelRyugyongPyongyangHOW: {
            'id': 'HotelRyugyongPyongyang-layerHOW',
            'source': 'HotelRyugyongPyongyangHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        JudgeHarryPregersonInterchangeHOW: {
            'id': 'JudgeHarryPregersonInterchange-layerHOW',
            'source': 'JudgeHarryPregersonInterchangeHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        BarringerCraterHOW: {
            'id': 'BarringerCrater-layerHOW',
            'source': 'BarringerCraterHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        EritreaHalabaHOW: {
            'id': 'EritreaHalaba-layerHOW',
            'source': 'EritreaHalabaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        MalborkCastleHOW: {
            'id': 'MalborkCastle-layerHOW',
            'source': 'MalborkCastleHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        LuboszówPolandHOW: {
            'id': 'LuboszówPoland-layerHOW',
            'source': 'LuboszówPolandHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        KuwaitAirportHOW: {
            'id': 'KuwaitAirport-layerHOW',
            'source': 'KuwaitAirportHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        NewYauMaTeishelterHongkongHOW: {
            'id': 'NewYauMaTeishelterHongkong-layerHOW',
            'source': 'NewYauMaTeishelterHongkongHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        PortCamilleRayonGolfeJuanHOW: {
            'id': 'PortCamilleRayonGolfeJuan-layerHOW',
            'source': 'PortCamilleRayonGolfeJuanHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        PyramidsOfGizaHOW: {
            'id': 'PyramidsOfGiza-layerHOW',
            'source': 'PyramidsOfGizaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        SealandHOW: {
            'id': 'Sealand-layerHOW',
            'source': 'SealandHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        ShenzhenBaoanInternationalAirportHOW: {
            'id': 'ShenzhenBaoanInternationalAirport-layerHOW',
            'source': 'ShenzhenBaoanInternationalAirportHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        SiedlcePolandHOW: {
            'id': 'SiedlcePoland-layerHOW',
            'source': 'SiedlcePolandHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        VolcanNegroArgentinaHOW: {
            'id': 'VolcanNegroArgentina-layerHOW',
            'source': 'VolcanNegroArgentinaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        TokaimachiTokaiHOW: {
            'id': 'TokaimachiTokai-layerHOW',
            'source': 'TokaimachiTokaiHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        TianfuIntlAirportHOW: {
            'id': 'TianfuIntlAirport-layerHOW',
            'source': 'TianfuIntlAirportHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        ThridrangarLighthouseHOW: {
            'id': 'ThridrangarLighthouse-layerHOW',
            'source': 'ThridrangarLighthouseHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        SymphonyOfTheSeasHOW: {
            'id': 'SymphonyOfTheSeas-layerHOW',
            'source': 'SymphonyOfTheSeasHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        SuloszowaHOW: {
            'id': 'Suloszowa-layerHOW',
            'source': 'SuloszowaHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        },

        BahamaDunesHOW: {
            'id': 'BahamaDunes-layerHOW',
            'source': 'BahamaDunesHOW',
            'type': 'raster',
            'paint': {
                'raster-fade-duration': 0,
                'raster-emissive-strength': 1
            },
            'layout': {
                'visibility': 'none'
            }
        }
    };

    if (howNum == 0){
        let layerID = divID.replace('Marker', '');
        map.addLayer(layers[layerID]);
        //Object.assign(addedLayers, layers[layerID]);
    }
    else {
        let layerHOWID = divID.replace('Marker', 'HOW');
        console.log(howLayers[layerHOWID]);
        map.addLayer(howLayers[layerHOWID]);
        howNum = 0;
    }
}

function viewLayer(layerName, num){
    if (toggleViewBtn.style.backgroundImage == 'url("images/hide.png")'){
        toggleViewBtn.style.backgroundImage = 'url("images/view.png")';
    }
    if (layerName != 'get'){
        trueName = layerName.replace("Marker", "-layer");
        if (trueName != oldLayerName && oldLayerName != '' && num != 1){
            map.setLayoutProperty(oldLayerName, 'visibility', 'visible');
            if (typeof map.getLayer(oldLayerName.replace('-layer', '-layerHOW')) != 'undefined'){
                map.setLayoutProperty(oldLayerName.replace('-layer', '-layerHOW'), 'visibility', 'none');
            }
            viewNum = 0;
            switchLayerNum = 0;
            viewHowNum = 0;
            toggleHowBtn.style.backgroundImage = 'url("images/howHide.png")';
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
        switchBtn.disabled = false;
    }
    if (layer1 == 'off') {
        viewLayer(viewLayerName2);
        map.setLayoutProperty(layerName1, 'visibility', 'none');
        map.setLayoutProperty(layerName2, 'visibility', 'visible');
        addImageDate(viewLayerName2);
    }
    else if (layer1 == 'on') {
        viewLayer(viewLayerName1);
        map.setLayoutProperty(layerName1, 'visibility', 'visible');
        map.setLayoutProperty(layerName2, 'visibility', 'none');
        addImageDate(viewLayerName1);
    }
}

function addImageDate(divName) {
    const imageDateText = document.getElementById('imageDate1');
    divName = divName.replace("Marker", "");
    let imageDateValue = imageDateList.search(divName);
    let imageDate = imageDateList.substring(imageDateValue+divName.length, imageDateValue+divName.length+10);
    if (imageDate == 'NoDateFoun'){
        imageDate = 'Unavailable';
    }
    imageDateText.textContent = imageDate;
}

function getImgCoor() {
    let temp = 0;
    let imageCoor = document.getElementById('imageCoor1');
    imageCoor.textContent = 'Coming in hot';
    map.on('moveend', () => {
        if (temp == 0){
            imageCoor.textContent = JSON.stringify(map.getCenter().lat) + ', ' + JSON.stringify(map.getCenter().lng);
            temp = 1;
        }
    });
}

function getPlaceDesc(placeDescName){
    let place = placeDescName.replace("Marker", "");
    let pos = placesList.indexOf(place);
    let desc = placesDesc[pos];
    let placeDesc = document.getElementById('imageDesc1');
    placeDesc.textContent = desc;
}

function wait(){
    updateText.style.display = 'none';
    update.style.display = 'block';
    updatebg.style.display = 'block';
    map.on('moveend', () => {
        update.style.display = 'none';
        updatebg.style.display = 'none';
    });
}

//add markers
function addMarkers(map) {
    const ArctowskiDiv = document.createElement('div');
    ArctowskiDiv.className = "station-marker";
    //station
    ArctowskiDiv.id = 'ArctowskiStationMarker';
    const ArctowskiStationMarker = new mapboxgl.Marker(ArctowskiDiv)
        .setLngLat([-58.4778433, -62.1571386])
        .addTo(map);
    ArctowskiDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-58.4705175, -62.1592260],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });
	
	const NorthSentinelDiv = document.createElement('div');
    NorthSentinelDiv.className = "ship-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });
	
	const GoldenGateDiv = document.createElement('div');
    GoldenGateDiv.className = "bridge-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });
	
	const DallolEthiopiaDiv = document.createElement('div');
    DallolEthiopiaDiv.className = "volcano-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });
	
    const AlverniaMarkerDiv = document.createElement('div');
    AlverniaMarkerDiv.className = "exhibition-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait(); 
    });

    const HeydarAliyevAirportDiv = document.createElement('div');
    HeydarAliyevAirportDiv.className = "airport-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const MumbaiAirportDiv = document.createElement('div');
    MumbaiAirportDiv.className = "airport-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const CuatroTorresDiv = document.createElement('div');
    CuatroTorresDiv.className = "city-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const AlumbreraDiv = document.createElement('div');
    AlumbreraDiv.className = "volcano-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const PetronasDiv = document.createElement('div');
    PetronasDiv.className = "city-marker";
    PetronasDiv.id = 'PetronasMarker';
    const PetronasMarker = new mapboxgl.Marker(PetronasDiv)
        .setLngLat([101.7080049,   3.1611789])
        .addTo(map);
    PetronasDiv.addEventListener('click', (e) => {
        addLayers(e.srcElement.id, 0);
        addLayers('PetronasNIRMarker', 0);
        switchLayer('Petronas-layer', 'PetronasNIR-layer');
        switchBtnPower(1);
        map.flyTo({
            center: [101.7130903,   3.1565901],
            zoom: 16,
            essential: true,
            duration: flySpeed
        });
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const VolcanPoruñitaDiv = document.createElement('div');
    VolcanPoruñitaDiv.className = "volcano-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const EixampleDiv = document.createElement('div');
    EixampleDiv.className = "city-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const HungaTongaDiv = document.createElement('div');
    HungaTongaDiv.className = "volcano-marker";
    HungaTongaDiv.id = 'HungaTongaMarker';
    const HungaTongaMarker = new mapboxgl.Marker(HungaTongaDiv)
        .setLngLat([-175.3921849, -20.5386411])
        //.setLngLat([-175.4003250, -20.5386411])
        .addTo(map);
    HungaTongaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        map.flyTo({
            center: [-175.3921849, -20.5446238],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const BeijingDaxingDiv = document.createElement('div');
    BeijingDaxingDiv.className = "airport-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const VolcanJoteDiv = document.createElement('div');
    VolcanJoteDiv.className = "volcano-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const SantaCruzdeIsloteDiv = document.createElement('div');
    SantaCruzdeIsloteDiv.className = "island-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const HuntsvilleAlabamaDiv = document.createElement('div');
    HuntsvilleAlabamaDiv.className = "exhibition-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const DongdaemunDesignPlazaDiv = document.createElement('div');
    DongdaemunDesignPlazaDiv.className = "exhibition-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });
    
    let costaSwitch = 0;
    const CostaConcordia20130917Div = document.createElement('div');
    CostaConcordia20130917Div.className = "ship-marker";
    CostaConcordia20130917Div.id = 'CostaConcordia20130917Marker';
    const CostaConcordia20130917Marker = new mapboxgl.Marker(CostaConcordia20130917Div)
        .setLngLat([ 10.9174804,  42.3686645])
        .addTo(map);
    CostaConcordia20130917Div.addEventListener('click', (e) => {
        switchBtnPower(1);
        map.flyTo({
            center: [ 10.9214388,  42.3658301],
            zoom: 16,
            essential: true,
            duration: flySpeed
        });
        addLayers('CostaConcordia20130917Marker', 0);
        addLayers('CostaConcordia20130712Marker', 0);
        map.setLayoutProperty('CostaConcordia20130917-layer', 'visibility', 'none');
        map.setLayoutProperty('CostaConcordia20130712-layer', 'visibility', 'visible');
        switchLayer('CostaConcordia20130712-layer', 'CostaConcordia20130917-layer');
        addImageDate('CostaConcordia20130712Marker');
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });


    const GreatBlueHoleDiv = document.createElement('div');
    GreatBlueHoleDiv.className = "hole-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const GomaDiv = document.createElement('div');
    GomaDiv.className = "city-marker";
    GomaDiv.id = 'GomaMarker';
    const GomaMarker = new mapboxgl.Marker(GomaDiv)
        .setLngLat([ 29.2362327,  -1.6336956])
        .addTo(map);
    GomaDiv.addEventListener('click', (e) => {
        switchBtnPower(1);
        map.flyTo({
            center: [ 29.2397031,  -1.6408191],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
        addLayers('GomaMarker', 0);
        addLayers('GomaNIRMarker', 0);
        map.setLayoutProperty('Goma-layer', 'visibility', 'visible');
        map.setLayoutProperty('GomaNIR-layer', 'visibility', 'none');
        switchLayer('Goma-layer', 'GomaNIR-layer');
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const DowntownDubaiDiv = document.createElement('div');
    DowntownDubaiDiv.className = "city-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const HotelRyugyongPyongyangDiv = document.createElement('div');
    HotelRyugyongPyongyangDiv.className = "city-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const JudgeHarryPregersonInterchangeDiv = document.createElement('div');
    JudgeHarryPregersonInterchangeDiv.className = "highway-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const BarringerCraterDiv = document.createElement('div');
    BarringerCraterDiv.className = "hole-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const EritreaHalabaDiv = document.createElement('div');
    EritreaHalabaDiv.className = "volcano-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const MalborkCastleDiv = document.createElement('div');
    MalborkCastleDiv.className = "castle-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const LuboszówPolandDiv = document.createElement('div');
    LuboszówPolandDiv.className = "village-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const KuwaitAirportDiv = document.createElement('div');
    KuwaitAirportDiv.className = "airport-marker";
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
            essential: true,
            duration: flySpeed
        });
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const NewYauMaTeishelterHongkongDiv = document.createElement('div');
    NewYauMaTeishelterHongkongDiv.className = "ship-marker";
    NewYauMaTeishelterHongkongDiv.id = 'NewYauMaTeishelterHongkongMarker';
    const NewYauMaTeishelterHongkongMarker = new mapboxgl.Marker(NewYauMaTeishelterHongkongDiv)
        .setLngLat([114.1460610,  22.3170465])
        .addTo(map);
    NewYauMaTeishelterHongkongDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [114.1538840,  22.3106996],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const PortCamilleRayonGolfeJuanDiv = document.createElement('div');
    PortCamilleRayonGolfeJuanDiv.className = "ship-marker";
    PortCamilleRayonGolfeJuanDiv.id = 'PortCamilleRayonGolfeJuanMarker';
    const PortCamilleRayonGolfeJuanMarker = new mapboxgl.Marker(PortCamilleRayonGolfeJuanDiv)
        .setLngLat([ 7.0699998,  43.5707001])
        .addTo(map);
    PortCamilleRayonGolfeJuanDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [ 7.0776466,  43.5662384],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const PyramidsOfGizaDiv = document.createElement('div');
    PyramidsOfGizaDiv.className = "pyramids-marker";
    PyramidsOfGizaDiv.id = 'PyramidsOfGizaMarker';
    const PyramidsOfGizaMarker = new mapboxgl.Marker(PyramidsOfGizaDiv)
        .setLngLat([ 31.1257876,  29.9813191])
        .addTo(map);
    PyramidsOfGizaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [ 31.1330343,  29.9761265],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const SealandDiv = document.createElement('div');
    SealandDiv.className = "island-marker";
    SealandDiv.id = 'SealandMarker';
    const SealandMarker = new mapboxgl.Marker(SealandDiv)
        .setLngLat([ 1.4797713,  51.8998809])
        .addTo(map);
    SealandDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [ 1.4830906,  51.8964390],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const ShenzhenBaoanInternationalAirportDiv = document.createElement('div');
    ShenzhenBaoanInternationalAirportDiv.className = "airport-marker";
    ShenzhenBaoanInternationalAirportDiv.id = 'ShenzhenBaoanInternationalAirportMarker';
    const ShenzhenBaoanInternationalAirportMarker = new mapboxgl.Marker(ShenzhenBaoanInternationalAirportDiv)
        .setLngLat([113.7976525,  22.6376172])
        .addTo(map);
    ShenzhenBaoanInternationalAirportDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [113.8067645,  22.6305183],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const SiedlcePolandDiv = document.createElement('div');
    SiedlcePolandDiv.className = "city-marker";
    SiedlcePolandDiv.id = 'SiedlcePolandMarker';
    const SiedlcePolandMarker = new mapboxgl.Marker(SiedlcePolandDiv)
        .setLngLat([ 22.2635107,  52.1679498])
        .addTo(map);
    SiedlcePolandDiv.addEventListener('click', (e) => {
        addLayers('SiedlcePolandMarker', 0);
        addLayers('SiedlcePolandZoomMarker', 0);
        switchLayer('SiedlcePoland-layer','SiedlcePolandZoom-layer');
        switchBtnPower(1);
        map.flyTo({
            center: [ 22.2712044,  52.1629492],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
    });

    const VolcanNegroArgentinaDiv = document.createElement('div');
    VolcanNegroArgentinaDiv.className = "volcano-marker";
    VolcanNegroArgentinaDiv.id = 'VolcanNegroArgentinaMarker';
    const VolcanNegroArgentinaMarker = new mapboxgl.Marker(VolcanNegroArgentinaDiv)
        .setLngLat([-68.3878686, -27.0935421])
        .addTo(map);
    VolcanNegroArgentinaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [-68.3806831, -27.0996090],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const TokaimachiTokaiDiv = document.createElement('div');
    TokaimachiTokaiDiv.className = "industrial-marker";
    TokaimachiTokaiDiv.id = 'TokaimachiTokaiMarker';
    const TokaimachiTokaiMarker = new mapboxgl.Marker(TokaimachiTokaiDiv)
        .setLngLat([136.8642456,  35.0359244])
        .addTo(map);
    TokaimachiTokaiDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [136.8725552,  35.0293739],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const TianfuIntlAirportDiv = document.createElement('div');
    TianfuIntlAirportDiv.className = "airport-marker";
    TianfuIntlAirportDiv.id = 'TianfuIntlAirportMarker';
    const TianfuIntlAirportMarker = new mapboxgl.Marker(TianfuIntlAirportDiv)
        .setLngLat([104.4338811,  30.3218315])
        .addTo(map);
    TianfuIntlAirportDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [104.4422638,  30.3143543],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const ThridrangarLighthouseDiv = document.createElement('div');
    ThridrangarLighthouseDiv.className = "lighthouse-marker";
    ThridrangarLighthouseDiv.id = 'ThridrangarLighthouseMarker';
    const ThridrangarLighthouseMarker = new mapboxgl.Marker(ThridrangarLighthouseDiv)
        .setLngLat([-20.3254558,  63.3917799])
        .addTo(map);
    ThridrangarLighthouseDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [-20.3201161,  63.3889363],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const SymphonyOfTheSeasDiv = document.createElement('div');
    SymphonyOfTheSeasDiv.className = "ship-marker";
    SymphonyOfTheSeasDiv.id = 'SymphonyOfTheSeasMarker';
    const SymphonyOfTheSeasMarker = new mapboxgl.Marker(SymphonyOfTheSeasDiv)
        .setLngLat([ -2.1907679,  47.2851343])
        .addTo(map);
    SymphonyOfTheSeasDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [ -2.1881148,  47.2830228],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const SuloszowaDiv = document.createElement('div');
    SuloszowaDiv.className = "village-marker";
    SuloszowaDiv.id = 'SuloszowaMarker';
    const SuloszowaMarker = new mapboxgl.Marker(SuloszowaDiv)
        .setLngLat([ 19.6870535,  50.2827341])
        .addTo(map);
    SuloszowaDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [ 19.7103057,  50.2723410],
            zoom: 15,
            essential: true,
            duration: flySpeed
        });
    });

    const BahamaDunesDiv = document.createElement('div');
    BahamaDunesDiv.className = "marker";
    //
    BahamaDunesDiv.id = 'BahamaDunesMarker';
    const BahamaDunesMarker = new mapboxgl.Marker(BahamaDunesDiv)
        .setLngLat([-78.6063309,  25.4888037])
        .addTo(map);
    BahamaDunesDiv.addEventListener('click', (e) => {
        switchLayer('none');
        switchBtnPower(0);
        addLayers(e.srcElement.id, 0);
        viewLayer(e.srcElement.id);
        addImageDate(e.srcElement.id);
        getImgCoor();
        getPlaceDesc(e.srcElement.id);
        wait();
        map.flyTo({
            center: [-78.5764644,  25.4670540],
            zoom: 15,
            essential: true,
            duration: flySpeed
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
        placeNameText.textContent = 'Volcan Poruñita';
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
        placeNameText.textContent = 'Santa Cruz del Islote';
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
        placeNameText.textContent = 'Alvernia Planet';
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

        VolcanNegroArgentinaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Volcan Negro Argentina';
    });

    TokaimachiTokaiDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Tokaimachi Tokai';
    });


    TianfuIntlAirportDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Tianfu Intl Airport';
    });


    ThridrangarLighthouseDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Thridrangar Lighthouse';
    });


    SymphonyOfTheSeasDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Symphony Of The Seas';
    });


    SuloszowaDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Suloszowa';
    });


    BahamaDunesDiv.addEventListener('mouseover', () => {
        placeNameText.textContent = 'Bahama Dunes';
    });

}
