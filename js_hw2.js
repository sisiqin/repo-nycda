// var button1 = document.createElement("button");
// button1.innerHTML = "I am a button";

// var button2 = document.createElement("button");
// button2.innerHTML = "I am another button";

// function show() {
//     document.getElementById("dThreshold").display ="block";
// }

function change1(){
	document.getElementById('fight1').innerHTML = "I AM RIGHT!";
}

function change2(){
	document.getElementById('fight2').innerHTML = "No!I AM RIGHT!";
}

function dontHover(){
	document.getElementById("dontHover").innerHTML = "Hey, I told you not to hover over me!";
}



function myKeyPress(event) {
    var x = event.keyCode;               
    var y = String.fromCharCode(x);
    document.getElementById("reluctantH1").innerHTML = y;
}

function myCheck(){
	var uName = document.getElementById("userName").value;
	var pWord = document.getElementById("passWord").value;

	if((uName.match(/[0-9]/g) != null) && (pWord === "12345678")){
		alert("incorrect");
}	
}
	





