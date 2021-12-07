// Add console.log to check to see if code is working.
console.log("working");
// Create the map object with a center at SFO.
let map = L.map('mapid').setView([37.6213, -122.3970], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

//Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: "4",
    opacity: ".5",


}).addTo(map);
//tile layer that'll be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
streets.addTo(map);