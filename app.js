var button ;
var display;
var score = 0;
var compteur = 1;
var prix = 50;
var clickauto = 1;

$("#bouton").click(function(){
	score= score+1 * compteur;
	$("#display").html(score);
});

$("#bouton2").click(function incrementer() {
	
		if(score>=prix){
			compteur++;
			score = score - prix;
			prix = prix *2;
			$("#display").html(score);
		}else{
			alert("Vous avez pas assez de COINS!!!")
		}
		$("#bouton2").html("Multiplicateur X " + compteur + " prix " + prix);
});

$("#autoclick").click(function(){
	if(score>=200){
		score = score -200;
		$("#autoclick").attr("disabled", "disabled");
		setInterval(function(){
			score= score + clickauto;
			$("#display").html(score);
		}, 1000)
	}else{
		alert("Vous avez pas assez de COINS!!!")
	}
	$("#display").html(score);

	
});