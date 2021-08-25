var upvoteempty =
  '<img style="height: 50px; width: auto;" src="arrow-up.svg" />';

var upvotefull =
  '<img style="height: 50px; width: auto;" src="arrow-up-fill.svg" />';


var upvotes1 = 0;

var upvotes2 = 0;

var upvotes3 = 0;

var upvotes4 = 0;

function Up1 () {
	if (upvotes1 === 0) {
	upvotes1 = upvotes1 + 1;
    
	document.getElementById("upvotes1").innerHTML = upvotes1;
	
	document.getElementById("Upbutton1").innerHTML = upvotefull;
	
      } else if (upvotes1 === 1) {
	upvotes1 = upvotes1 - 1;
    
	document.getElementById("upvotes1").innerHTML = upvotes1;
	
	document.getElementById("Upbutton1").innerHTML = upvoteempty;}}
function Up2 () { if (upvotes2 === 0) {
	upvotes2 = upvotes2 + 1;
    
	document.getElementById("upvotes2").innerHTML = upvotes2;
	
	document.getElementById("Upbutton2").innerHTML = upvotefull;
	;
      } else if (upvotes2 === 1) {
	upvotes2 = upvotes2 - 1;
    
	document.getElementById("upvotes2").innerHTML = upvotes2;
	
	document.getElementById("Upbutton2").innerHTML = upvoteempty; }}
function Up3 () {
	if (upvotes3 === 0) {
		upvotes3 = upvotes3 + 1;
	    
		document.getElementById("upvotes3").innerHTML = upvotes3;
		
		document.getElementById("Upbutton3").innerHTML = upvotefull;
		
	      } else if (upvotes3 === 1) {
		upvotes3 = upvotes3 - 1;
	    
		document.getElementById("upvotes3").innerHTML = upvotes3;
		
		document.getElementById("Upbutton3").innerHTML = upvoteempty; }
}
function Up4 () {
	if (upvotes4 === 0) {
		upvotes4 = upvotes4 + 1;
	    
		document.getElementById("upvotes4").innerHTML = upvotes4;
		
		document.getElementById("Upbutton4").innerHTML = upvotefull;
		;
	      } else if (upvotes4 === 1) {
		upvotes4 = upvotes4 - 1;
	    
		document.getElementById("upvotes4").innerHTML = upvotes4;
		
		document.getElementById("Upbutton4").innerHTML = upvoteempty;	
}  }