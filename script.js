var button = document.getElementById("button");
var darktheme = false

button.style.color = "white";
button.style.background = "black";

function change_background(){
    if (darktheme == false){
        document.body.style.background = "black";
        button.style.background = "white";
        button.style.color = "black";
        darktheme = true;

    } else {document.body.style.background = "white"
        darktheme = false;
        button.style.background = "black";
        button.style.color = "white";
    }
}
