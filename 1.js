 $(function(){
 	$('.nutmo').click(function(event) {
 		$(this).animate({
 			left:-50,
 			opacity: 0,
 		});
 		$('.nutdong').animate({
 			left:10,
 			opacity: 1,
 		
 		});
 		$('.nutmo i').removeClass('xoay');
 		$('.nutdong i').addClass('xoay');
 
 	});
 	$('.nutdong').click(function(event) {
 		
 		$(this).animate({
 			left:-50,
 			opacity: 0,
 		});
 		$('.nutmo').animate({
 			left:10,
 			opacity: 1,
 		
 		});
 		$('.nutdong i').removeClass('xoay');
 		$('.nutmo i').addClass('xoay')
 	});

 
})  
 