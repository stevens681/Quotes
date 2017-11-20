
var background = ["#FFD180", "#FFAB40", "#FF9100", "#FF6D00", "#616161", "#424242", "#212121", "#B9F6CA", "#69F0AE", "#00E676", "#00C853", "#CCFF90", "#B2FF59", "#76FF03", "#64DD17", "#01579B", "#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"]
var quotes = [];
function generator() {
	var i = Math.floor((Math.random() * 4999) + 1)
    var c = Math.floor((Math.random() * 19) + 1)
	document.getElementById("quote").innerHTML = quotes[i].quoteText;
	document.getElementById("author").innerHTML = "Author: " + quotes[i].quoteAuthor;
	document.body.style.backgroundColor = background[c];
	document.body.style.transition = "all 0.7s"
    
}

$.getJSON("js/quotes.json", function(data){
    quotes = data;
}); 
