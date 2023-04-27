window.onload = init;

function init () {
    let points = JSON.parse(localStorage.getItem('points'))
    var L = window.L;
    if (points !== undefined) {
        console.log(points[0].geometry.coordinates);
        var map = L.map('map').setView([59.345, 18.08], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        points.forEach(point => {
            var marker = L.marker([point.geometry.coordinates[1], point.geometry.coordinates[0]]).addTo(map);
        });
    }
    
}
