  var locations = [
    ['Union South', 43.071812, -89.407802,'1st floor by the help desk'],
    ['Witte Residence Hall', 43.071743, -89.396733,'1st floor lobby'],
    ['Sellery Residence Hall', 43.071678, -89.399979,'1st floor lobby'],
    ['Smith Residence Hall', 43.068958, -89.400258,'1st floor lobby'],
    ['College Library', 43.076796, -89.401020,'Right inside the 1st floor entrance before second set of doors'],
    ['Memorial Library', 43.075426, -89.397899,'1st floor lobby'],
    ['Chadbourne Residence Hall', 43.073864, -89.401224,'The gift-wrapped donation bin is in the first floor lobby near the help desk.'],
    ['Education Building', 43.075820, -89.402208,'There are two donation bins: one on the 2nd floor student lounge and another in the 3rd floor faculty founge'],
    //['Memorial Union', 43.076848, -89.399722,'1st floor'],
    ['Student Activity Center', 43.072444, -89.398562,'1st floor by the help desk']
  ];
  var madison = {lat: 43.0731, lng: -89.4012};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: madison
  });

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    var infowindow = new google.maps.InfoWindow();

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      title: locations[i][0]
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent('<div id="content">'+
            '<b>'+ locations[i][0] +'</b>'+
            '<div id="bodyContent">'+
            '<p>'+ locations[i][3] +'</p>'+
            '</div>'+
            '</div>');
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
