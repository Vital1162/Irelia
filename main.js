window.addEventListener('scroll', function() {
    var content = document.querySelector('.content');
    var contentPosition = content.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    if (contentPosition < screenHeight) {
        content.classList.add('fade-up');
    }

});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

$(document).ready(function(){
    $(".sidebar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
});

function openVideoPopup(videoURL) {
    var videoPopup = document.getElementById("video-popup");
    var videoIframe = document.getElementById("video-popup-iframe");
    videoIframe.src = videoURL;
    videoPopup.style.display = "block";
    videoPopup.style.animation = ""; // Remove animation property to reset animation state
    videoPopup.style.animation = "fadeInAnimation 0.5s ease-in forwards"; // Apply fade-in animation
}

function closeVideoPopup() {
    var videoPopup = document.getElementById("video-popup");
    var videoIframe = document.getElementById("video-popup-iframe");
    videoIframe.src = ''; // Stop the video when closing the popup
    videoPopup.style.animation = ""; // Remove animation property to reset animation state
    videoPopup.style.animation = "fadeOutAnimation 0.5s ease-out forwards"; // Apply fade-out animation
    setTimeout(() => { /* Hide the popup after animation completes */
        videoPopup.style.display = "none";
    }, 500); // Adjust the timeout value to match the duration of the fade-out animation
}
// Close video popup when clicked outside the popup content
window.addEventListener('click', function(event) {
    var videoPopup = document.getElementById("video-popup");
    if (event.target == videoPopup) {
        closeVideoPopup();
    }
});



