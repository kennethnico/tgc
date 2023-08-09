let map = L.map('map').setView(41.587148, -85.835456,6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//Marcadores
var mrkr1 = L.marker([41.58423821413766, -85.83468629014831]).addTo(map);
var mrkr2 = L.marker([41.5812928369633, -85.83179183847852]).addTo(map);
var mrkr3 = L.marker([41.57948729254225, -85.82937809055288]).addTo(map);
