var r="https://api.maptiler.com/maps/dataviz-v4/{z}/{x}/{y}.png?key=my5KOkIt5CksOOCacAKQ";var a={lat:59.91352,lng:30.3321,view:13.9},s={lat:59.9138,lng:30.33352},i="\u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430\u044F \u041E\u0431\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0430\u043D\u0430\u043B\u0430, 101.",m=L.divIcon({className:"customMarkerIcon",iconAnchor:[32,32],popupAnchor:[-15,-24],html:`<div style="
    mask-image: url('../icons/stack.svg#leaf-icon');
    width: 32px;
    height: 32px;
    background-color: #6A107A;"></div>`}),p=(t,o,n,e)=>{let{lat:c,lng:l}=e;return L.marker({lat:c,lng:l},{icon:o}).addTo(t).bindPopup(n)},d=()=>{let t=document.querySelector(".map"),o=L.map(t,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,touchZoom:!1}).setView({lat:a.lat,lng:a.lng},a.view);return L.tileLayer(r,{attribution:""}).addTo(o),p(o,m,i,s),o};export{d as mapCreate};
