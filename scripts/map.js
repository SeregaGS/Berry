// source/scripts/map.js
var TILE_LAYER = "https://api.maptiler.com/maps/dataviz-v4/{z}/{x}/{y}.png?key=my5KOkIt5CksOOCacAKQ";
var ATTRIBUTION = "";
var COORDINATES = {
  lat: 59.91352,
  lng: 30.3321,
  view: 13.9
};
var COORDINATES_PIN = {
  lat: 59.9138,
  lng: 30.33352
};
var PIN_TEXT = "\u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F \u041E\u0431\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u043D\u0430\u043B\u0430, 101.";
var customMarkerIcon = L.divIcon({
  className: "customMarkerIcon",
  iconAnchor: [32, 32],
  popupAnchor: [-15, -24],
  html: `<div style="
    mask-image: url('../icons/stack.svg#leaf-icon');
    width: 32px;
    height: 32px;
    background-color: #6A107A;"></div>`
});
var createMarker = (map, icon, text, props) => {
  const { lat, lng } = props;
  return L.marker(
    { lat, lng },
    { icon }
  ).addTo(map).bindPopup(text);
};
var mapCreate = () => {
  const mapContainer = document.querySelector(".map");
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
      lng: COORDINATES.lng
    },
    COORDINATES.view
  );
  L.tileLayer(
    TILE_LAYER,
    {
      attribution: ATTRIBUTION
    }
  ).addTo(map);
  createMarker(map, customMarkerIcon, PIN_TEXT, COORDINATES_PIN);
  return map;
};
export {
  mapCreate
};
//# sourceMappingURL=map.js.map
