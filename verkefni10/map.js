var panorama;
      function initialize() {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
              position: {lat: 64.3270716, lng: -20.119947799999977},
              pov: {heading: 0, pitch: -20},
              zoom: 1
            });
      }
      // Toggles between map and panorama view
function togglePanorama(){
    if(isPanorama){
        map.streetView.setVisible(false);
        $('#message').empty().append('Click here to take a tour of our office.');
        isPanorama = 0;
    } else{
        map.streetView.setVisible(true);
        $('#message').empty().append('Back to the map.');
        isPanorama = 1;
    }
}