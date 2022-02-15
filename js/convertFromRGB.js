function convertFromRGB(){
    try {
        //Get value from input field
        var r = parseInt(document.getElementById("red").value);
        var g = parseInt(document.getElementById("green").value);
        var b = parseInt(document.getElementById("blue").value);

       

        if(r > -1 && b > -1 && g > -1){
            alert(rbgToρɣβL(r, g, b));
        }else{
            alert("Please enter valid numbers");
            window.location.href="/colorConverter.html";
        }
        
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
 }

 function rbgToρɣβL(r, g, b){
     //returns result in ρɣβL
    var total = parseInt(r+b+g); 

     var first = parseFloat((r/total) * 1);
     var second = parseFloat((b/total) * 1);
     var third = parseFloat((g/total) * 1);
     var l = Math.max(first, second, third);
     return "The result of the conversion is '("+first.toFixed(1)+","+ second.toFixed(1)+","+ third.toFixed(1)+","+ l.toFixed(1) +")'";
 }

 function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
