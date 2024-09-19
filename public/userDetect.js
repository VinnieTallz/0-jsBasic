const userDetect = () => {
  const userinfo = document.querySelector(".userInfo");

  const success = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapApiUrl = "http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localitylanguage=en"
    
    fetch (mapApiUrl)
    
    userinfo.innerHTML =
      "Your OS: " +
      navigator.platform +
      "<p>" +
      "Your Keyboard Language: " +
      navigator.language +
      "<p>" +
      "Your Location: " +
      "<p>" +
      position;

    };

    const error = () => {
    userinfo.innerHTML =
      "Your OS: " +
      navigator.platform +
      "<p>" +
      "Your Keyboard Language: " +
      navigator.language +
      "<p>" +
      "Unable to retrieve Your Location";
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

userDetect();
