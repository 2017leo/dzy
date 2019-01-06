var cover = document.getElementsByClassName('cover')[0];
		window.onscroll = function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if(st>180){
				cover.style.position = 'fixed'
			}else{
				cover.style.position = 'static'
			}
		}


var money = document.getElementById('money');
var gensui = document.getElementById('gensui');
money.onchange = function(){
	gensui.innerHTML = "¥"+money.value;
 }

 