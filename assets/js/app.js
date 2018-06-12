// test code
// game with four stones. 
// every stone must generate a random number 1 - 12
// before the game every single time 
// it is reset (win or lose).

// when clicking on a stone. the value remains the same 
// it should be added to final score until user wins or loses
// if greater than limit score, ends in loss and added to loss count
// if equal to limit score, ends in win etc

var random_limit;
var losses = 0;
var wins = 0;
var counter = 0;

var resetButton = function (){
	$(".stones").empty();
	var images = [
	'assets/images/reality_gem.png',
	'assets/images/soul_gem.png',
	'assets/images/space_gem.png',
	'assets/images/time_gem.png']

	random_limit = Math.floor(Math.random() *40)+10;

	$("#random_limit").html('Target Score: ' + random_limit);

	for(var i = 0; i < 4; i++){

		var rando = Math.floor(Math.random() * 12) + 1;
		console.log(rando);

		var stone = $("<div>");
			stone.attr({"class": 'stone',
				"data-rand": rando
			});
			stone.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover" 
			})
		$(".stones").append(stone);

	}
	
}
resetButton();
$(document).on('click', ".stone", function(){
	var value = parseInt($(this).attr("data-rand"));
    
	counter +=value;

	console.log(counter);
    $("#counter").html("Total Score: " + counter);

	if (counter > random_limit){
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		resetButton();
	}
	else if(counter === random_limit){
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		resetButton();
	}
});