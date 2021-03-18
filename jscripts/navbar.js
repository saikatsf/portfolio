var data='1';

function iconchange(){
    document.getElementById("navbar").className = "colornav";
    document.getElementById("logo").className = "colorlogo";
    if(data == 1){
        document.getElementById("menuicon").className = "fas fa-window-close";
        data = 0;
    }
    else{
        document.getElementById("menuicon").className = "fas fa-bars";
        data = 1;
    }
}

window.onscroll = function() {navcolor()};

function navcolor() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").className = "colornav";
        document.getElementById("logo").className = "colorlogo";
    }
    else{
        document.getElementById("navbar").className = "noncolornav";
        document.getElementById("logo").className = "noncolorlogo";
    }
}

function checkifcheck(){
    if(document.getElementById("ham").checked == true){
        document.getElementById("ham").checked = false;
        document.getElementById("menuicon").className = "fas fa-bars";
        data = 1;
    }
}
