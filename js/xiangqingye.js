var cover = document.getElementsByClassName('cover')[0];
		window.onscroll = function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if(st>180){
				cover.style.position = 'fixed'
			}else{
				cover.style.position = 'static'
			}
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