function convertFromRGB(){
    try {
        //Get value from input field
        var r = parseInt(document.getElementById("red").value);
        var g = parseInt(document.getElementById("green").value);
        var b = parseInt(document.getElementById("blue").value);
        alert(rgbToHex(r, g, b));
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
 }

 function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
