var myVar;
var detailData='0';

function mydetail() {
    myVar = setInterval(detailFunc, 3500);
}
  
function detailFunc() {
    if(detailData == 1){
        document.getElementById("detail").innerHTML ="Web Developer.";
        detailData = 0;
    }
    else{
        document.getElementById("detail").innerHTML ="Web Designer.";
        detailData = 1;
    }
}
window.onload = function(){mydetail()};