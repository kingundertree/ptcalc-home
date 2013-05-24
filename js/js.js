window.onload = function screenHeight(){
	var main = document.getElementById('main');
	var bottom = document.getElementById('bottom');
	var con = document.getElementById('con');
	var bodyHeight = document.documentElement.clientHeight;


	if (bodyHeight <= 700) {
		main.style.height = 500 + "px";
		bottom.style.height = 200 + "px";
		con.style.top = 0 + "px";
	}else if (bodyHeight > 700) {
		main.style.height = 5*bodyHeight/7 + "px";
		bottom.style.height = 2*bodyHeight/7 + "px";
		con.style.top = (bodyHeight - 700)/2 + "px";
	};
}

window.onresize = function screenHeight(){
	var main = document.getElementById('main');
	var bottom = document.getElementById('bottom');
	var con = document.getElementById('con');
	var bodyHeight = document.documentElement.clientHeight;


	if (bodyHeight <= 700) {
		main.style.height = 500 + "px";
		bottom.style.height = 200 + "px";
		con.style.top = 0 + "px";
	}else if (bodyHeight > 700) {
		main.style.height = 5*bodyHeight/7 + "px";
		bottom.style.height = 2*bodyHeight/7 + "px";
		con.style.top = (bodyHeight - 700)/2 + "px";
	};
}