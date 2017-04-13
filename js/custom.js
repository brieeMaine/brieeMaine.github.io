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
// =========MODAL============



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





