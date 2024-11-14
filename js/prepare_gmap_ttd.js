// Create a map
const mapbox_pk = 'pk.eyJ1IjoibGxsbGxsdGlhbnRpYW5sbGxsbGwiLCJhIjoiY2w5OXowYzFoM20waDN1bWZ6OTZsMWF5aCJ9.HziR0Wg80_0oFIyrjl18fg';
const mymap_gmapToDo = L.map('gmapToDo').setView([-37.840935, 144.946457], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
       attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
       maxZoom: 18,
       id: 'mapbox/streets-v11',
       tileSize: 512,
       zoomOffset: -1,
       accessToken: mapbox_pk
}).addTo(mymap_gmapToDo);


// Data used for this map
// {
//     title: '',
//     image: '',
//     latitude: -00,
//     longitude: 00,
//     rating: 00,
//     ratingLabel: 'Excellent',
//     reviewsNumber: 16488,
//     briefIntro: '',
// }
const data_gmapToDo = {
    attractions: [{
        title: 'National Gallery of Victoria',
        image: 'https://www.visitmelbourne.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/art-galleries/28a00521a646bfc70a1d6b650516284d_1600x1200.jpeg?ts=20210615280402',
        latitude: -37.8226,
        longitude: 144.9689,
        rating: 4.7,
        ratingLabel: 'Excellent',
        reviewsNumber: 16488,
        briefIntro: 'Australian & international art museum',
        // openTime: []
    }, {
        title: 'Queen Victoria Market',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/see-and-do/shopping-and-fashion/markets/c8d844df766465a5402fde01ce87770a_1600x1200.jpeg?ts=20220901330431',
        latitude: -37.8076,
        longitude: 144.9568,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 40387,
        briefIntro: 'Shops & stalls in a historic venue',
    }, {
        title: 'Royal Botanic Gardens Victoria - Melbourne Gardens',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ee/06/9a/the-rose-collection-in.jpg?w=1200&h=1200&s=1',
        latitude: -37.8304,
        longitude: 144.9796,
        rating: 4.8,
        ratingLabel: 'Excellent',
        reviewsNumber: 12681,
        briefIntro: 'Riverside mix of native & exotic plants',
    }, {
        title: 'Melbourne Skydeck',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/architecture-and-design/90d83c6e13f601e72f7e7d6f8921e2a9_1600x1200.jpeg?ts=20210707300229',
        latitude: -37.8213,
        longitude: 144.9647,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 12131,
        briefIntro: 'Enclosed viewing deck with city vistas',
    }, {
        title: 'Fed Square',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/architecture-and-design/7a1ae6b96050bdb58230be0b3f7db684_1600x1200.jpeg?ts=20210611310500',
        latitude: -37.8180,
        longitude: 144.9691,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 2271,
        briefIntro: 'Contemporary central public space',
    }, {
        title: 'Flinders Street Railway Station',
        image: 'https://www.visitmelbourne.com/-/media/images/melbourne/things-to-do/history-and-heritage/flinders-street-station_mel_r_1460109_1150x863.jpg?ts=20170502390343',
        latitude: -37.8183,
        longitude: 144.9671,
        rating: 4.4,
        ratingLabel: 'Very good',
        reviewsNumber: 1919,
        briefIntro: 'Domed, Edwardian railway & metro hub',
    }, {
        title: 'Melbourne Cricket Ground',
        image: 'https://www.visitvictoria.com/-/media/images/melbourne/things-to-do/entertainment/spectator-sports/melbourne-cricket-ground_mel_r_supplied-pr_1600x900.jpg?ts=20151228481024&c=product&cw=1600&ch=1200',
        latitude: -37.8200,
        longitude: 144.9834,
        rating: 4.7,
        ratingLabel: 'Excellent',
        reviewsNumber: 21731,
        briefIntro: 'Birthplace of Test cricket, built 1853',
    }, {
        title: 'Melbourne Museum',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/see-and-do/art-and-culture/museums/f9b1f27d96ac5052f065a0d3c91f8c07_1600x1200.jpeg?ts=20211206210541',
        latitude: -37.8033,
        longitude: 144.9717,
        rating: 4.6,
        ratingLabel: 'Excellent',
        reviewsNumber: 11792,
        briefIntro: 'Natural history & cultural collections',
    }, {
        title: 'Melbourne Zoo',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/nature-and-wildlife/wildlife-and-zoos/93b35a894f2aa23977a097f40badebee_1600x1200.jpeg?ts=20210628340705',
        latitude: -37.7841,
        longitude: 144.9515,
        rating: 4.4,
        ratingLabel: 'Very good',
        reviewsNumber: 4039,
        briefIntro: 'Victorian-era zoo with over 320 species',
    }, {
        title: 'State Library Victoria',
        image: 'https://www.arup.com/-/media/arup/images/projects/s/state-library-victoria/state-library-victoria-2000x1125.jpg?h=1125&w=2000&hash=CA54C5A17D9852D4AF5A2A58B8BB8637',
        latitude: -37.8098,
        longitude: 144.9652,
        rating: 4.7,
        ratingLabel: 'Excellent',
        reviewsNumber: 2146,
        briefIntro: 'Cultural hub in 19th-century buildings',
    }, {
        title: 'SEA LIFE Melbourne Aquarium',
        image: 'https://whatson.melbourne.vic.gov.au/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWswTXpnM1pERm1NeTFoTXpWbUxUUXhZMkl0T1dKbU5pMHhabUkzTm1VeVpqa3dZVGtHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--04caa7ff8335365f56bf3930360731e91311d5c0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFLdUFta0N6QUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7f9630e3134fed9b847d81e33e693bfd37ddddf1/460df86b-6760-4443-ac07-4620f2d59e7b.jpg',
        latitude: -37.8206,
        longitude: 144.9582,
        rating: 4.3,
        ratingLabel: 'Very good',
        reviewsNumber: 12877,
        briefIntro: 'Exotic marine life & hands-on programs',
    }, {
        title: 'Crown Melbourne',
        image: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Crown-Casino.jpg',
        latitude: -37.8235,
        longitude: 144.9581,
        rating: 4.4,
        ratingLabel: 'Very good',
        reviewsNumber: 42160,
        briefIntro: 'Hotel, entertainment & casino complex',
    }, {
        title: 'Luna Park Melbourne',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/see-and-do/leisure-activities/cb66e0f379895a892e875f41826a742d_1600x1200.jpeg?ts=20211028350542',
        latitude: -37.8678,
        longitude: 144.9769,
        rating: 4.1,
        ratingLabel: 'Very good',
        reviewsNumber: 6857,
        briefIntro: 'Traditional theme park dating from 1912',
    }, {
        title: 'Hosier Lane',
        image: 'https://www.visitvictoria.com/-/media/images/melbourne/destinations/laneways/hosier-lane_mel_r_credit-robert-blackburn-2016_1470310_1600x900.jpg?ts=20161207341107&c=product&cw=1600&ch=1200',
        latitude: -37.8165, 
        longitude: 144.9688,
        rating: 4.3,
        ratingLabel: 'Very good',
        reviewsNumber: 163,
        briefIntro: 'Landmark boulevard with street art',
    }, {
        title: 'Shrine of Remembrance',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/see-and-do/art-and-culture/architecture-and-design/original__9284039_ay51_wojtek_gurak_cxei75t_1600x1200.jpg?ts=20220610400129',
        latitude: -37.8305,
        longitude: 144.9734,
        rating: 4.8,
        ratingLabel: 'Excellent',
        reviewsNumber: 6159,
        briefIntro: 'World War I shrine & memorial complex',
    }, {
        title: 'Old Melbourne Gaol',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/history-and-heritage/d7910e9bd9f15094c0c420b9607c23e2_1600x1200.jpeg?ts=20210618530716',
        latitude: -37.8078,
        longitude: 144.9653,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 2409,
        briefIntro: 'Museum & former prison with guided tours',
    }, {
        title: 'ACMI',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/art-galleries/5233e8fa705721608549ab39f7756128_1600x1200.jpeg?ts=20210525300236',
        latitude: -37.8176,
        longitude: 144.9687,
        rating: 4.7,
        ratingLabel: 'Excellent',
        reviewsNumber: 3295,
        briefIntro: 'Arts centre showcasing the moving image',
    }, {
        title: 'St Kilda beach',
        image: 'https://www.visitvictoria.com/-/media/images/melbourne/things-to-do/nature-and-wildlife/beaches/st-kilda-beach_mel_r_132611_1600x900.jpg?ts=20170901001245&c=product&cw=1600&ch=1200',
        latitude: -37.8679,
        longitude: 144.9740,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 1771,
        briefIntro: 'Famed beach with a pier & water sports',
    }, {
        title: 'Healesville Sanctuary',
        image: 'https://www.visitvictoria.com/-/media/atdw/yarra-valley-and-dandenong-ranges/things-to-do/nature-and-wildlife/wildlife-and-zoos/3320df5c34c982b55c769e6a517c670b_1600x1200.jpeg?ts=20210430311242',
        latitude: -37.6816,
        longitude: 145.5299,
        rating: 4.6,
        ratingLabel: 'Excellent',
        reviewsNumber: 8046,
        briefIntro: 'Zoo with animals native to Australia',
    }, {
        title: 'Werribee Open Range Zoo',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/see-and-do/nature-and-wildlife/sanctuaries-zoos-and-farms/original__9282629_ba17_20130423worz36_nla9sdy_1600x1200.jpg?ts=20220608340649',
        latitude: -37.9227,
        longitude: 144.6672,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 10522,
        briefIntro: 'Zoo with African-style safari tours',
    }, {
        title: 'Royal Exhibition Building',
        image: 'https://www.visitvictoria.com/-/media/images/melbourne/things-to-do/history-and-heritage/royal-exhibition-building-autumn_mel_r_credit-roberto-seba_1413882_1900x600.jpg?ts=20170502390343&c=product&cw=1600&ch=1200',
        latitude: -37.8047,
        longitude: 144.9717,
        rating: 4.6,
        ratingLabel: 'Excellent',
        reviewsNumber: 4616,
        briefIntro: 'Iconic Victorian centre for events',
    }, {
        title: 'The Ian Potter Centre: NGV Australia',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/art-galleries/421a1103b20010a49292ddc992e0b9e9_1600x1200.jpeg?ts=20210615380456',
        latitude: -37.8171,
        longitude: 144.9697,
        rating: 4.6,
        ratingLabel: 'Excellent',
        reviewsNumber: 1617,
        briefIntro: 'Vast gallery of historic & modern art',
    }, {
        title: 'Scienceworks',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/museums/13a727002b331930b6a2cf482470b2ea_1600x1200.jpeg?ts=20210615271225',
        latitude: -37.8316,
        longitude: 144.8932,
        rating: 4.4,
        ratingLabel: 'Very good',
        reviewsNumber: 5256,
        briefIntro: 'Interactive science museum & planetarium',
    }, {
        title: 'Puffing Billy Railway',
        image: 'https://www.visitvictoria.com/-/media/atdw/yarra-valley-and-dandenong-ranges/see-and-do/art-and-culture/history-and-heritage/8facbedd8b543519f0a5698a19ff36e0_1600x1200.jpeg?ts=20220329311126',
        latitude: -37.9077,
        longitude: 145.3566,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 6219,
        briefIntro: 'Open-air train for rainforest views',
    }, {
        title: 'Brighton Bathing Boxes',
        image: 'https://www.visitvictoria.com/-/media/images/melbourne/things-to-do/history-and-heritage/bathing-boxes-at-brighton-beach_mel_r_1328984_1600x900.jpg?ts=20170502390342&c=product&cw=1600&ch=1200',
        latitude: -37.9177,
        longitude: 144.9866,
        rating: 4.4,
        ratingLabel: 'Very good',
        reviewsNumber: 8951,
        briefIntro: 'Colourful, Victorian-era bathing boxes',
    }, {
        title: 'Immigration Museum',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/see-and-do/art-and-culture/museums/original__9290444_ag51_front_museum_high_res_7ukoz0j_1600x1200.jpg?ts=20211103310437',
        latitude: -37.8192,
        longitude: 144.9605,
        rating: 4.4,
        ratingLabel: 'Very good',
        reviewsNumber: 2179,
        briefIntro: 'Multimedia exhibits, a cafe & gift shop',
    }, {
        title: 'Peninsula Hot Springs',
        image: 'https://www.visitmelbourne.com/-/media/atdw/mornington-peninsula/see-and-do/spa-and-wellbeing/4cefeb5e9f6f9edcfc327059d6b88461_1600x1200.jpeg?ts=20220809311256',
        latitude: -38.4069,
        longitude: 144.8427,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 9417,
        briefIntro: 'Variety of pools & day spa services',
    }, {
        title: 'Fitzroy Gardens',
        image: 'https://ak.jogurucdn.com/media/image/p25/place-2015-12-24-5-Fitzroygardens3e77f807f977b59ed8c0e62a29ed37f5.jpg',
        latitude: -37.8127,
        longitude: 144.9801,
        rating: 4.7,
        ratingLabel: 'Excellent',
        reviewsNumber: 5398,
        briefIntro: 'Urban green space since 1848 with trails',
    }, {
        title: 'Heide Museum of Modern Art',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/art-theatre-and-culture/art-galleries/original__9418427_bc67_emily_floyd_abstract_labour_2014_heide_museum_of_modern_art_765kmkv_1600x1200.jpg?ts=20210721430629',
        latitude: -37.7582,
        longitude: 145.0832,
        rating: 4.5,
        ratingLabel: 'Excellent',
        reviewsNumber: 1182,
        briefIntro: 'Galleries, gardens & a sculpture park',
    }, {
        title: 'St Kilda Pier',
        image: 'https://www.visitvictoria.com/-/media/atdw/melbourne/things-to-do/history-and-heritage/heritage-buildings/original__9071513_tvic_visionsofvictoria1141221833_5jaqjc3_1600x1200.jpg?ts=20210621291002',
        latitude: -37.8640,
        longitude: 144.9820,
        rating: 4.6,
        ratingLabel: 'Excellent',
        reviewsNumber: 3628,
        briefIntro: 'Marina wall with bay & city views',
    }]
}

// const reviewStar = {
//     Excellent: `
//         <svg id = "svgelem" width = "19" height = "19">
//             <polygon points="10,1 4,18 19,6 1,6 16,18" fill="#fed976"/>
//         </svg>`,
//     Verygood: `
//         <svg id = "svgelem" width = "19" height = "19">
//             <polygon points="10,1 4,18 19,6 1,6 16,18" style="fill:white; stroke:#fed976; stroke-width:2"/>
//         </svg>`,
// };

const reviewStar = {
    Excellent: `
        <img height="12" src="./img/star_excellent.png"}>`,
    Verygood: `
        <img height="12" src="./img/star_verygood.png"}> &nbsp;`,
};



// Add marker
// https://cdn-icons-png.flaticon.com/512/1828/1828614.png
// https://cdn-icons-png.flaticon.com/512/1985/1985879.png
// https://cdn-icons-png.flaticon.com/512/1985/1985836.png
// https://cdn-icons-png.flaticon.com/512/2107/2107890.png
// https://cdn-icons-png.flaticon.com/512/2107/2107957.png
// https://cdn-icons-png.flaticon.com/512/8358/8358826.png
// https://cdn-icons-png.flaticon.com/512/4874/4874769.png
// https://cdn-icons-png.flaticon.com/512/61/61935.png
// https://cdn-icons-png.flaticon.com/512/6801/6801175.png
// https://cdn-icons-png.flaticon.com/512/2584/2584606.png
var starIcon = L.icon({
    iconUrl: './img/1828614.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 38], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [5, -30] // point from which the popup should open relative to the iconAnchor
});
// const marker = L.marker([40.748708, -73.985433]).addTo(mymap_gmapToDo);
// var marker = L.marker([-37.840935, 144.946457], {icon: starIcon}).addTo(mymap_gmapToDo);


// Add popup
let popup_templet = `
<div class="mapPopup">
    <h4>Restaurant</h4>
    <img class="mapPopupImg" src="https://cdn.vox-cdn.com/thumbor/aG2fzOeOzoymhbJCqEKX_gKn4u8=/0x0:2000x1333/1670x1253/filters:focal(840x507:1160x827):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71209194/2022_06_22_Dunsmoore_039.0.jpg"/>
</div>
`;
//<svg id = "svgelem" width = "300" height = "300" xmlns = "http://www.w3.org/2000/svg">
//    <polygon points="100,10 40,180 190,60 10,60 160,180" fill="blue"/>
//</svg>

// marker.bindPopup(popup_templet).openPopup();
// marker.bindPopup(popup_templet);



for (var i = 0; i < data_gmapToDo.attractions.length; i++) {
    var a = data_gmapToDo.attractions[i];
    var marker = L.marker([a.latitude, a.longitude], {icon: starIcon}).addTo(mymap_gmapToDo);
    let popup_templet = `
    <div class="mapPopup">
        <h4>${a.title}</h4>
        <img class="mapPopupImg" src=${a.image}/>
        <h6>${a.briefIntro}</h6>
        <p style="font-size:12px;">
        Reviews: 
        ${reviewStar[a.ratingLabel.split(' ').join('')]}
        ${a.rating}
        </p>
    </div>
    `;
    marker.bindPopup(popup_templet);
};

