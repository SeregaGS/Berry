const TILE_LAYER = 'https://api.maptiler.com/maps/dataviz-v4/{z}/{x}/{y}.png?key=my5KOkIt5CksOOCacAKQ';
const ATTRIBUTION = '';
const COORDINATES = {
  lat: 59.91352,
  lng: 30.33210,
  view: 13.9,
};
const COORDINATES_PIN = {
  lat: 59.91380,
  lng: 30.33352
};
const PIN_TEXT = "Набережная Обводного канала, 101.";

const customMarkerIcon = L.divIcon({
  className: 'customMarkerIcon',
  iconAnchor: [32, 32],
  popupAnchor: [-15, -24],
  html: `<div style="
    mask-image: url('../icons/stack.svg#leaf-icon');
    width: 32px;
    height: 32px;
    background-color: #6A107A;"></div>`
});

const createMarker = (map, icon, text, props) => {
  const { lat, lng } = props;
  return L.marker(
    {lat: lat, lng: lng},
    {icon: icon}).addTo(map)
    .bindPopup(text);
};
const mapCreate = () => {
  const mapContainer = document.querySelector('.map');
  const map = L.map(mapContainer, {
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false
  }).setView(
    {
      lat: COORDINATES.lat,
      lng: COORDINATES.lng,
    },
    COORDINATES.view);
  L.tileLayer(
    TILE_LAYER,
    {
      attribution: ATTRIBUTION,
    }).addTo(map);
  createMarker(map, customMarkerIcon, PIN_TEXT, COORDINATES_PIN);
  return map;
};

export { mapCreate };
