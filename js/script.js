let windows = document.getElementsByClassName('window');
let color = "yellow";

function day() {
    document.body.style.backgroundColor = "SkyBlue";
    document.getElementById("seah").style.backgroundColor = "RoyalBlue";
    document.getElementById("build").style.backgroundColor = "WhiteSmoke";
    document.getElementById("build2").style.backgroundColor = "DarkGrey";
    document.getElementById("build3").style.backgroundColor = "Gainsboro";
    document.getElementById("build4").style.backgroundColor = "SeaShell";
    document.getElementById("build5").style.backgroundColor = "White";
    document.getElementById("build6").style.backgroundColor = "LightGrey";
    document.getElementById("build7").style.backgroundColor = "Gainsboro";
    document.getElementById("build8").style.backgroundColor = "LightGrey";
    document.getElementById("build1").style.backgroundColor = "White";

    document.getElementById("sole").style.backgroundColor = "Gold";
    document.getElementById("cover").style.backgroundColor = "Navy";
    
}

function night() {
    document.body.style.backgroundColor = "MidnightBlue";
    document.getElementById("seah").style.backgroundColor = "Midnightblue";
    document.getElementById("build").style.backgroundColor = "black";
    document.getElementById("build2").style.backgroundColor = "black";
    document.getElementById("build3").style.backgroundColor = "black";
    document.getElementById("build4").style.backgroundColor = "black";
    document.getElementById("build5").style.backgroundColor = "black";
    document.getElementById("build6").style.backgroundColor = "black";
    document.getElementById("build7").style.backgroundColor = "black";
    document.getElementById("build8").style.backgroundColor = "black";
    document.getElementById("build1").style.backgroundColor = "black";

    document.getElementById("sole").style.backgroundColor = "white";
    document.getElementById("cover").style.backgroundColor = "rgba(13, 0, 129, 0)";
 
}
// let displayButton = event => {
//     console.log(event.target);
//     let windows = document.getElementsByClassName('window');
//       windows.innerHTML = event.target.style.backgroundColor="Red";
         
//   }
// window.addEventListener("click", printHello);
// function printHello(){
//     console.log("Hello");
// }
// windows.addEventListener("click", changeColor);
