const einstein = document.querySelector(".einstein");

const body = document.querySelector("#wrap");

function clear(){
    body.classList.remove("einsteinHover");
}


function einsteinClick(){
    body.classList.toggle("einsteinClicked");
};


function einsteinWating(){
    einstein.addEventListener('click',einsteinClick);
};

einsteinWating();
