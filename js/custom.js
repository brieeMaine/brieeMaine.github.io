// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }


// $("nav").find("a").click(function(e) {
//    e.preventDefault();
//    var section = $(this).attr("href");
//    $("html, body").animate({
//        scrollTop: $(section).offset().top
//    });
// });

$('.answerFaq').hide();

$('#q1').click(function(){
	$('#a1').slideToggle();
	$('#a2, #a3, #a4').slideUp();

	// if($('#q1').css('background')
	// $('#q1').css('background', 'purple');

});

$('#q2').click(function(){
	$('#a2').slideToggle();
	$('#a1, #a3, a#4').slideUp();

});

$('#q3').click(function(){
	$('#a3').slideToggle();
	$('#a1, #a2, a#4').slideUp();

});

$('#q4').click(function(){
	$('#a4').slideToggle();
	$('#a2, #a3, #a1').slideUp();

});



