


/////////////////////////////////////////////////////////////////////////////////
//
// Get device orientation
//
/////////////////////////////////////////////////////////////////////////////////

if (window.DeviceOrientationEvent) {
    // Listen for the deviceorientation event and handle the raw data
    window.addEventListener('deviceorientation', function(event) {
        console.log(event)
      if(event.webkitCompassHeading) {
        // Apple works only with this, alpha doesn't work
        compassdir = event.webkitCompassHeading;  

        window.compEvent = compassdir;

      }
      else compassdir = event.alpha;
    });
  }
  

//window.document.getElementsByTagName("h1")[0].style.fontSize = "80px";