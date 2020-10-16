var map;
function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(-22.8821912,-49.2383956),
        zoom:14,
        scrollwheel: false,
        styles: [{
            stylers: [{
                saturation: -100
            }]
        }],
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    map=new google.maps.Map(document.getElementById("map"),mapProp);

    function addMarker(lat,long,icon,content,showInfoWindow,openInfoWindow){
       var myLatLng = {lat:lat,lng:long};

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon:icon
        });
    

    var infoWindow = new google.maps.InfoWindow({
        content: content,
        maxWidth:200
    });

    
 google.maps.event.addListener(infoWindow, 'domready', function() {

        
        var iwBackground = iwOuter.prev();

        // Remove the background shadow DIV
        iwBackground.children(':nth-child(2)').css({'background' : 'rgb(255,255,255)'}).css({'border-radius':'0px'});

        // Remove the white background DIV
        iwBackground.children(':nth-child(4)').css({'background' : 'rgb(255,255,255)'}).css({'border-radius':'0px'});

        // Moves the shadow of the arrow 76px to the left margin
        iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'display:none;'});

        // Moves the arrow 76px to the left margin
        iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'display:none;'});

    });

    if(showInfoWindow == undefined){
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
    }else if(openInfoWindow == true){
        infoWindow.open(map, marker);
    }

        

    }
    addMarker(-22.8821912,-49.2383956,'',"Teste",undefined, false);


}

