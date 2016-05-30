$(function() {

$("#gc-slideshow > div:gt(0)").hide();

setInterval(function() { 
	 $('#gc-slideshow > div:first')
	      .fadeOut(1000)
	      .next()
	      .fadeIn(1000)
	      .end()
	      .appendTo('#gc-slideshow');
},  4000);
});
