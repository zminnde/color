//submit button event listener
window.addEventListener('submit', (e) => {
    e.preventDefault();
    const rgbValue = document.querySelector("input").value;
    const rgbRegex = /^\d{1,3},\d{1,3},\d{1,3}$/; 

    //ensure correct format in input field
    if(!rgbRegex.test(rgbValue)){ 
        alert("Please enter correct RGB value.");
        return;
    }

    const hexValue = convertRGBToHEX(rgbValue);
    const colorDisplay = document.querySelector("h3");

    colorDisplay.innerHTML = hexValue;

    e.target.reset(); //reset input field

});

function convertRGBToHEX(rgbValue){
    //put input String to array containing r,g,b
    let rgbArray = rgbValue.split(",");

    //convert individual r,g,b to hex String
    let r = formatHex(hexColor(rgbArray[0]));
        g = formatHex(hexColor(rgbArray[1])),
        b = formatHex(hexColor(rgbArray[2]));

    //return hex String
    return `#${r}${g}${b}`.toUpperCase();
}

//this function converts individual RGB color component value to HEX (base 16)
function hexColor(c) {
    if(c < 256) {
        return Math.abs(c).toString(16);
    }

    return 'FF'; //if user enters more than 255, return highest color component value
}

//ensure 2 digits in each color component 
function formatHex(hex){
    if(hex.length == 1){
        return 0 + hex;
    }
    return hex;
}

