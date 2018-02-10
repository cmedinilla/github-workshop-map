let map;
let info;




function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 23.6447985, lng: -99.8093893},
    mapTypeId: 'terrain'
  });
  data.forEach(i => {
    var ltlg = new google.maps.LatLng(i.lt,i.lg);
    marker = new google.maps.Marker({
      position: ltlg,
      title:"Hello World!"
    });
    marker.setMap(map);
  });  
}



