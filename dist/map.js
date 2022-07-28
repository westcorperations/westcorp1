// Initialize and add the map
function initMap() {
    // The location of Ejike
    const Ejike = { lat: -25.344, lng: 131.031 };
    // The map, centered at Ejike
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Ejike,
    });
    // The marker, positioned at Ejike
    const marker = new google.maps.Marker({
      position: Ejike,
      map: map,
    });
  }
  
  window.initMap = initMap;