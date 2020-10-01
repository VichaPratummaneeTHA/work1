var navbar = document.querySelector('.navbar');
var scrolled = false;

window.onscroll = function(){

  if(window.pageYOffset>100){
    navbar.classList.remove('top');
    if(!scrolled){
      navbar.style.transform = 'translateY(-100px)';
    }
    setTimeout(function(){
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  }
  else{
    navbar.classList.add('top');
    scrolled = false;
  }
}

// Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $('#navber a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

