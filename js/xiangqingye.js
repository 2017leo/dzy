var cover = document.getElementsByClassName('cover')[0];
		window.onscroll = function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if(st>180){
				cover.style.position = 'fixed'
			}else{
				cover.style.position = 'static'
			}
		}

var fxiaotu2=document.getElementById('fxiaotu2');
var fxiaotu3=document.getElementById('fxiaotu3');

fxiaotu2.onmouseover = function(){
	fxiaotu2.setAttribute('border', '1px solid #ff4d04');

 }
fxiaotu2.onmouseout = function(){
	fxiaotu2.setAttribute('border', 'none');
 			
 }



function tips(num,price){
    var html = '<div class="mask"></div><div class="alertBox"><div class="altext">商品已加入购物车！</div> <div class="albtn"><br><br><br><br><a href="" style="color:#ff0754; "class="carbtn">继续购物</a><a href="" class="carbtn bg">去购物车结算</a></div></div>';  
      $(document.body).append(html);
}
 
function showBox(){ 
    var width = document.body.scrollWidth;  
    var height = document.body.scrollHeight; 
    var vH = $(window).height(); 
    var boxW = $(".alertBox").width();  
    var boxH = $(".alertBox").height();   
    var boxLeft = (width-boxW)/2;   
    var boxTop = (vH-boxH)/2;   
    $(".mask").height(height);
    $(".mask").width(width);    
    $(".mask").fadeIn(200); 
    $(".alertBox").show();  
    $(".alertBox").stop().animate({left:boxLeft+210,top:boxTop,opacity:1},300);
}
 
function alertbox(){
    tips(1,10);
    showBox();
}


 var img11=document.getElementById('img11');
 var img22=document.getElementById('img22');
 var slider = document.getElementById('slider');
 var Bimg = document.getElementById('Bimg');
 var bbo = document.getElementById('bbo');

 Bimg.style.height="800px";
 Bimg.style.width="800px";

 img11.onmouseover = function(){
 	slider.style.display = 'block';
 	bbo2.style.display = 'block';

 }
 img11.onmouseout = function(){
 	slider.style.display = 'none';
 	bbo2.style.display = 'none';
 			
 }
 img11.onmousemove = function(){
 	var ev=ev || window.event;

 	var oL = ev.clientX-bbo.offsetLeft-slider.offsetWidth/2;
 	var oT = ev.clientY-bbo.offsetTop-slider.offsetHeight/2;
 
 	var oMaxw = img11.offsetWidth-slider.offsetWidth;
 	var oMaxh = img11.offsetHeight-slider.offsetHeight;

 	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
 			
 	slider.style.left = oL+'px';
 	slider.style.top = oT+'px';

 	var scale = Bimg.offsetHeight/img11.offsetHeight;
 	Bimg.style.left=-oL*scale+'px';
 	Bimg.style.top=-oT*scale+'px';
 }

