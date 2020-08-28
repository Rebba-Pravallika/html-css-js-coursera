(function(window){
var goodbyeSpeaker ={};
var speakWord="Good Bye";
goodbyeSpeaker.Speak= function(name){
	console.log(speakWord+" "+name)
}
window.goodbyeSpeaker=goodbyeSpeaker;
})(window);