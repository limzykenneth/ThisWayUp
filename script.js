$(document).ready(function(){
	var count = 0;
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	
	$(document).mousemove(function(e){
      
		var x = e.pageX;
		var y = e.pageY;
		
		var rotateY = (360/winWidth) * y;
		var rotateX = (360/winHeight) * x; 
        if(count===0) {
		
			$('.cube').css({'transform':'rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)'});
		} 
  
    });
    
  
  	$( ".cube" ).click(function() {
		$('#s6 .top, #s6 .left,#s6 .right,#s6 .bottom,#s6 .back,#s6 .front').addClass('flat'); 
		count += 1;
	    
	    $('.cube').css({'transform':'rotateY(' + '0' + 'deg) rotateX(' + '0' + 'deg)','transition':' all 3.3s ease'});
    } );

//   $(window).dblclick(function(){    
// $('.cube, .cube .side').animate({
//   width:"15em",
//   height:"15em"
// }, 500, function(){alert("oo");});

//     $('.cube .top.flat').animate({
//   top:"-14.75em"
// }, 500, function(){alert("oo");});
//     $('.cube .left.flat').animate({
//   left:"-14.75em"
// }, 500, function(){alert("oo");});
//     $('.cube .right.flat').animate({
//   left:"14.75em"
// }, 500, function(){alert("oo");});
//     $('.cube .bottom.flat').animate({
//   top:"14.75em"
// }, 500, function(){alert("oo");});
//         $('.cube .back.flat').animate({
//   top:"14.75em"
// }, 500, function(){alert("oo");});
// });
      
	console.log(count);
});
 
   
 