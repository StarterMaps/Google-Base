/*********************************/
/**** Basic Map Functionality ****/
var map;
function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(39.283825, -76.611207),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {style:google.maps.ZoomControlStyle.SMALL}
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);