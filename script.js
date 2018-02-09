let map;



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: -33.865427, lng: 151.196123},
    mapTypeId: 'terrain'
  });


  array.forEach(json => {
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
    });
    marker.setMap(map);  
  });

}

function get () {
    function reqListener () {
      console.log( this.response );
    }
    var newXHR = new XMLHttpRequest();
    newXHR.addEventListener( 'load', reqListener );
    newXHR.open( 'GET', 'http://requestb.in/1k6rql51' );
    newXHR.send();
};

