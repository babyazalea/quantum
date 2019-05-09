const body = document.querySelector("#wrap"),
    einstein = document.querySelector(".einstein"),
    title = document.querySelector(".titleBox");

const ON_CN = "on",
    HIDE_CN= "hide";

function clear(){
    body.classList.remove("einsteinHover");
}


function einsteinClick(){
    body.classList.toggle("einsteinClicked");
    einstein.classList.toggle(ON_CN);
    title.classList.toggle(HIDE_CN);
};


function einsteinWating(){
    einstein.addEventListener('click',einsteinClick);
};

einsteinWating();
