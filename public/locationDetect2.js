
var addition = "DEFAULT LOCATION";
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error, options);
} else {
  console.log("geolocation not supported");
  console.log(addition);
}

function success(position) {
  userLocation = position.coords.latitude + "," + position.coords.longitude;
  
  //var device = document.getElementById("userInfo");
  var displayed = (
    "OS: " + navigator.platform +"\n" +
    "Browser: " + navigator.userAgent +"\n" +
    "Language: " + navigator.language +"\n" +
    "Location: " + userLocation
  )
  
  //document.getElementById("userInfo").innerHTML="Hey";
  //device.innerHTML = 'HEY'

  console.log(displayed)
}

function error(err) {
  console.error(err.message);
}

document.getElementById("userInfo").innerHTML="Hey";