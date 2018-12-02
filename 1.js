 $(function(){
 	$('.nutmo').click(function(event) {
 		$(this).animate({
 			left:-50,
 			opacity: 0
 		});
 		$('.nutdong').animate({
 			left:15,
 			opacity:1
 		});
 		$('.nutdong i').addClass('xoay');
 		$('.nutmo i').removeClass('xoay');
 	});
 	$('.nutdong').click(function(event) {
 		$('.nutdong i').removeClass('xoay')
 		$('.nutmo i').addClass('xoay');
 		$(this).animate({
 			left:-50,
 			opacity:0
 		});
 		$('.nutmo').animate({
 			left:15,
 			opacity:1
 		});
 	});
 
})  

 