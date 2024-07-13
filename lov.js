function clicked(){
    

        // Replace the current location
        // with new location
        let newloc = "res.html";
        window.location.replace(newloc);
}

function No(){
    let newloc = "lov1.html";
        window.location.replace(newloc);
}
function No2(){
    let newloc = "lov2.html";
        window.location.replace(newloc);
}


const b = document.getElementById("btn7")
b.addEventListener("mouseover", movehover)
function movehover(){
    const i = Math.floor(Math.random()*500) + 1;
    const j = Math.floor(Math.random()*500) + 1;

     b.style.left = i + "px"
     b.style.right = j + "px"
}
// Get the button element
var button = document.getElementById("btn7");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Hide the button when it's clicked
  this.style.display = "none";
});
 