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
function moreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
window.onload = function(){mydetail()};