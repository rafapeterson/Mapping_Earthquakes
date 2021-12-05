// Add console.log to check to see if code is working.
console.log("working");
// Create the map object with a center & zoom level/
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add a marker to the map for LA
// Add circle
L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    radius: 300
 }).addTo(map);


//tile layer that'll be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
streets.addTo(map);