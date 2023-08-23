let map = L.map('map').setView([41.58472821232003, -85.83402024107362],15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'}).addTo(map);
//Pines
const mainIcon = L.icon({
    iconUrl: '../assets/img/icon_pins/main_Loc.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const restaurantIcon = L.icon({
    iconUrl: '../assets/img/icon_pins/restaurant.png',
    iconSize: [45, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const hospitalIcon = L.icon({
    iconUrl: '../assets/img/icon_pins/hospital.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const parkIcon = L.icon({
    iconUrl: '../assets/img/icon_pins/park.png',
    iconSize: [50, 50], // size of the icon
});
const placesIcon = L.icon({
    iconUrl: '../assets/img/icon_pins/places.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//Marcadores
var ghighSchool = L.marker([41.58106875753688, -85.82311112504013]).addTo(map);
var mrkr1 = L.marker([41.58423821413766, -85.83468629014831]).addTo(map);
var mrkr2 = L.marker([41.5812928369633, -85.83179183847852]).addTo(map);
mrkr2.bindTooltip("Pin Ejemplo");
var mrkr3 = L.marker([41.57948729254225, -85.82937809055288]).addTo(map);
let mainMark = L.marker([41.58472821232003, -85.83402024107362],{icon:mainIcon}).addTo(map);
mainMark.bindTooltip("The Goshen Chronicles");
mainMark.bindPopup("<div class='text-center'><b>Sitio de interés</b><br>Nombre.<br><img class='img-thumbnail' src='../assets/img/cta-bg.jpg' alt='Prueba de imagen'><br><a href='https://www.youtube.com/channel/UCpPMJtSltAmFs_oamw7jEig' target='_blank'>Ver mas...</a></div>").openOn(map);
let restaurantMark = L.marker([41.58682178463862, -85.83352039098216],{icon:restaurantIcon}).addTo(map);
let hospitalMark = L.marker([41.58188682922779, -85.83396473695191],{icon:hospitalIcon}).addTo(map);
hospitalMark.bindPopup("<div class='text-center'><b>Farmacia</b><br>CVS Pharmacy<br><img class='img-thumbnail' src='https://tpc.googlesyndication.com/simgad/4746028788871522326' alt='Prueba de imagen'><br><a href='https://www.cvs.com/minuteclinic/virtual-care/telehealth-options?WT.mc_id=LS_CVSRX_GOOGLE_6472_get_online_care_button' target='_blank'>Ver mas...</a></div>");
//hospitalMark.bindTooltip("Pharmacy");
let parkMark = L.marker([41.587892377488906, -85.84174544989568],{icon:parkIcon}).addTo(map);
parkMark.bindTooltip("Rogers Park");
let placesMark = L.marker([41.57962964261239, -85.83340692716443],{icon:placesIcon}).addTo(map);
placesMark.bindTooltip("Goshen Public Library");
