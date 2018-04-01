     $(document).ready(function() {
         slideShow();
	 }); 
	 
	 function slideShow() {
		var showing = $('.slider .is-showing');
		var next = showing.next().length ? showing.next(): showing.parent().children(':first'); 
		/*
		  * We could have written the above statement the long way to achieve the same results
		  *
		  * if(showing.next().length {
		  *		 showing.next();
		  * } else {
		  *     showing.parent().children(':first');
		  * }
		  */	
	
	 
	 showing.fadeOut(400, function() { next.fadeIn(400).addClass('is-showing'); }).removeClass('is-showing');
	 
	 setTimeout(slideShow, 5000);
	 
}
