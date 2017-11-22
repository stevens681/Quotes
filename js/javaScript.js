var background = ["#FFD180", "#ff4040", "#ceff00", "#FF6D00", "#616161", "#424242", "#212121", "#B9F6CA", "#4d8e6e", "#00E676", "#02382d", "#CCFF90", "#adbe99", "#76FF03", "#d4d6d3", "#01579B", "#ce00ff", "#40C4FF", "#004eff", "#e100ea"]
var quotes = [];
var randonNum;

function generator() {
	var i = Math.floor((Math.random() * 4999) + 1)
	var c = Math.floor((Math.random() * 19) + 1)
	randonNum = i;
	document.getElementById("quote").innerHTML = "\"" + quotes[i].quoteText + "\"";
	document.getElementById("author").innerHTML = "Author: " + quotes[i].quoteAuthor;
	document.body.style.backgroundColor = background[c];
	document.body.style.transition = "all 0.7s"
}

function twitter() {
	var text = "\"" + quotes[randonNum].quoteText + "\"" + "\n" + "Author: " + quotes[randonNum].quoteAuthor;
	window.open('http://twitter.com/share?text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}
$.getJSON("js/quotes.json", function(data) {
	quotes = data;
});