function generateDiv(){
	var container = document.getElementById('divContainer');
	for (var i = 0; i <15; i++) {	
		for (var j = 0; j < 30; j++) {
		var nbRand = Math.floor((Math.random() * 4) + 1); 
	    container.innerHTML+= "<div class=\"cell"+nbRand+"\"></div>";
		}
		"<br>"
	};
}
function triggerBtn(){
	var circle = document.getElementById('circle');
	var arrow1 = document.getElementById('arrow1');
	var arrow2 = document.getElementById('arrow2');
	var arrow3 = document.getElementById('arrow3');
	var star1 = document.getElementById('star1_sub_container');
	var star2 = document.getElementById('star2_sub_container');
	var flower1 = document.getElementById('flower1_sub_container');
	var flower2 = document.getElementById('flower2_sub_container');
	var tv_screen = document.getElementById('tv_screen');

	document.getElementById('tvBtn').onclick=function(){
		circle.className="circleBig";	
		arrow1.className="arrow1Anim";	
		arrow2.className="arrow2Anim";	
		arrow3.className="arrow3Anim";	
		star1.className="star1Anim";	
		star2.className="star2Anim";	
		flower1.className="flower1Anim";	
		flower2.className="flower2Anim";	
		tv_screen.style.opacity="0";
	};
}
generateDiv();
triggerBtn();
