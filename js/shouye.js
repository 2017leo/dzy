var cover = document.getElementsByClassName('cover')[0];
		window.onscroll = function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if(st>180){
				cover.style.position = 'fixed'
			}else{
				cover.style.position = 'static'
			}
		}

function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer=setInterval(
			function(){
				var isStop=true;
				for(var attr in json){
					if(attr=='opacity'){
						var now=parseInt(getStyle(obj,attr)*100);
					}else{
						var now=parseInt(getStyle(obj,attr));
					}
					var speed=(json[attr]-now)/5;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);
						if(attr=='opacity'){
							obj.style[attr]=(now+speed)/100;
						}else{
							obj.style[attr]=now+speed+'px';
						}

					var current=now+speed;
					if(json[attr]!==current){
						isStop=false;
					}
				}
				if(isStop){
					clearInterval(obj.timer);
					callback&&callback();
				}
		},100)
	}
function getStyle(obj,style){
    	if(getComputedStyle(obj))
    	return getComputedStyle(obj)[style]
    	else
    		obj.currentStyle[style]
}

	var box=document.getElementById('box')
	var slider= document.getElementById('slider')
	var index=1;
	var left =document.getElementById('left')
	var right =document.getElementById('right')
	var oNavlist =document.getElementById('nav').children
	function next(){
		index++;
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left='-800px'
				index =1;
			}
		})
		navChange();
	}
	var timer =setInterval(function (){
		index++;
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left='-800px'
				index =1;
			}
		})
	},3000)
	//鼠标划上，停止轮播
	box.onmouseover = function(){
		clearInterval(timer);
		animate(left,{opacity:50});
		animate(right,{opacity:50});
	}

	box.onmouseout =function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer =setInterval(next,3000)
	}
	right.onclick =next;
	function prev(){
		index--;
		animate(slider,{left:-800*index},function(){
			if(index==0){
				slider.style.left='-4800px'
				index=6
			}
		})
		navChange();
	}

	left.onclick =prev;
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx =i;
		oNavlist[i].onclick =function(){
			index =this.idx+1;
			animate(slider,{left:-800*index})
			navChange();
		}
	}
	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].className =''
		}
		if(index==7){
			oNavlist[0].className ='active'
		}
		else if(index==0){
			oNavlist[5].className ='active'
		}
		else{
			oNavlist[index-1].className ='active'
		}
	}

var money = document.getElementById('money');
var gensui = document.getElementById('gensui');
money.onchange = function(){
	gensui.innerHTML = "¥"+money.value;
}


        var area =document.getElementById('gunbo');
        var gonggao1 = document.getElementById('gonggao1');
        var gonggao2 = document.getElementById('gonggao2');
        gonggao2.innerHTML=gonggao1.innerHTML;
        function scrollUp(){
        if(area.scrollTop>=gonggao1.offsetHeight){
            area.scrollTop=0;
            }else{
            area.scrollTop++;
            }
        }                
        var time = 50;
        var mytimer=setInterval(scrollUp,time);
        area.onmouseover=function(){
            clearInterval(mytimer);
        }
        area.onmouseout=function(){
            mytimer=setInterval(scrollUp,time);
        }