function convertToRGB(){
    try {
        //Get value from input field
        var r = parseInt(document.getElementById("red").value);
        var g = parseInt(document.getElementById("green").value);
        var b = parseInt(document.getElementById("blue").value);
        var l = parseInt(document.getElementById("lum").value);

        alert("You will be converting to RGB from ρɣβL");
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
 }
