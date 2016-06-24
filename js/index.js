var Uscore = 0;
var highscore = 10;
var move = 0;
var press = function(){
	Uscore++;
	move+=10;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
	document.getElementById('box').style.marginLeft = move;
	document.getElementsByTagName('')

	if(Uscore > highscore) {
		document.getElementById('highscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};


