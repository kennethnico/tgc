let map = L.map('map').setView([41.58098170748805, -85.82310817483332],12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'}).addTo(map);
//Pines
const restaurantIcon = L.icon({
    iconUrl: '../assets/img/icon_pins/main_Loc.png',
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//Marcadores
var mrkr1 = L.marker([41.58423821413766, -85.83468629014831]).addTo(map);
mrkr1.bindPopup("<div class='text-center'><b>Sitio de interés</b><br>Nombre.<br><img class='img-thumbnail' src='../assets/img/cta-bg.jpg' alt='Prueba de imagen'><br><a href='https://www.youtube.com/channel/UCpPMJtSltAmFs_oamw7jEig' target='_blank'>Ver mas...</a></div>");
var mrkr2 = L.marker([41.5812928369633, -85.83179183847852]).addTo(map);
var mrkr3 = L.marker([41.57948729254225, -85.82937809055288]).addTo(map);
let mainMark = L.marker([41.58472821232003, -85.83402024107362],{icon:restaurantIcon}).addTo(map);
