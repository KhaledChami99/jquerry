window.addEventListener('load', function(){
//code here when the page is loaded using javascript
})
$(document).ready( function(){
    //code here when the page is loaded using j querry
})
//selector in js
document.getElementById("idName")
document.getElementsByClassName('className')
document.getElementsByTagName('p')
//selector in jQuery
$('classname')
$('p')
$('#idName')
//click handler js
var button = document.getElementById('idName')
button.addEventListener('click',function(){
    //code here
})
$('#idName').click(function(){
    //code here
})
//js css
document.getElementsByTagName('p').style.display = 'none';
document.getElementsByTagName('p').style.background = 'white';
//jQuery .css
$('p').css({"background color": "white", "display":"none" })
$('.className').hide();
//<img src="img.png"/>
$('img').attr("src", "img2.png");
$('img').attr("width","100");
$(".className").height(50);
$(".className").text("daniel's car");
$(".className").text('daniel/s car');

//what user Selected it can be lebanon,cyprus
var userSelect = "lebanon";
var wikiURL = "https://en.wikipedia.org/wiki/"+userSelect