const options = {
    // Required: API key
    key: '4FiZJHlpN1NHeLzM619Nubi4WNLUynSS', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 19.9975,
    lon: 73.7898,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([19.9975, 73.7898])
        .setContent('Nashik')
        .openOn(map);
});