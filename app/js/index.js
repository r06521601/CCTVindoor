


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


/////////////////////////////////////////////////////////////////////////////////
//
// image upload zone
//
/////////////////////////////////////////////////////////////////////////////////


function readURL(input) {
    console.log(input)
    if (input.files && input.files[0]) {
        
        var reader = new FileReader();
        reader.onload = function(e) {
            var parameters = { 
              photo :e.target.result.split(',')[1],
              compass :window.compEvent
            };
            jQuery.ajax({
                url: '/user/insert',
                async: false,
                dataType: "json",
                cache: false, 
                contentType: "application/json",
                
                type:"POST",
                data: JSON.stringify(parameters),
                
                success: function (result) {
                
                    $("#result").html(result);
                  
                  
                },
                error: function(xhr) {
                    console.log(xhr);
                  },
              });
        }
        reader.readAsDataURL(input.files[0]);
    }
}
