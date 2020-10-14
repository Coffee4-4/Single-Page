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

}

$(function () {
    initMap();

})