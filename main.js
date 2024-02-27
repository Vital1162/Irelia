window.addEventListener('scroll', function() {
    var content = document.querySelector('.content');
    var contentPosition = content.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    if (contentPosition < screenHeight) {
        content.classList.add('fade-up');
    }

});

//  scrolling and background movement
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const movingBg = document.querySelector('.background');

    // Adjust the background position based on scroll direction
    if (scrollPosition > this.lastScrollPosition || scrollPosition === 0) {
        // Scrolling down or at the top
        movingBg.style.backgroundPosition = `${scrollPosition/10}px 0`;
    } else {
        // Scrolling up
        movingBg.style.backgroundPosition = `-${(scrollPosition)/10}px 0`;
    }

    // Update last scroll position
    this.lastScrollPosition += scrollPosition;
});

// play sound
const video = document.getElementById('bg-maker');
    const muteButton = document.getElementById('muteButton');
    // const decreaseVolumeButton = document.getElementById('decreaseVolumeButton');
    // const increaseVolumeButton = document.getElementById('increaseVolumeButton');

    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.innerHTML = video.muted ? '<i class="fa-solid fa-volume-off"></i>' : '<i class="fas fa-volume-up"></i>';
    });



// scroll down animation when click into id
document.addEventListener('DOMContentLoaded', function() {
    // Select all links within the navigation menu
    const navLinks = document.querySelectorAll('.global-nav a');

    // Loop through each link
    navLinks.forEach(function(link) {
        // Add click event listener
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href');

            // Scroll smoothly to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


function openVideoPopup(videoUrl) {
    $('#video-popup-iframe').attr('src', videoUrl);
    $('#video-popup').addClass('active');
    $('body').addClass('popup-open');
}

function closeVideoPopup() {
    $('#video-popup-iframe').attr('src', '');
    $('#video-popup').removeClass('active');
    $('body').removeClass('popup-open');
}


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay:true,
    autoplaySpeed:3000,
  });

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect:true,
    // swipeToSlide:true,
    touchMove:true,
    focusOnSelect: true,
    arrows:true,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
});




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
    document.body.classList.add('popup-open'); // Add class to body
}

function closeVideoPopup() {
    var videoPopup = document.getElementById("video-popup");
    var videoIframe = document.getElementById("video-popup-iframe");
    videoIframe.src = ''; // Stop the video when closing the popup
    videoPopup.style.animation = ""; // Remove animation property to reset animation state
    videoPopup.style.animation = "fadeOutAnimation 0.5s ease-out forwards"; // Apply fade-out animation
    document.body.classList.remove('popup-open'); // Remove class from body
    setTimeout(() => { /* Hide the popup after animation completes */
        videoPopup.style.display = "none";
    }, 500); // Adjust the timeout value to match the duration of the fade-out animation
}
// Close video popup when clicked outside the popup content
window.addEventListener('click', function(event) {
    var videoPopup = document.getElementById("video-popup");
    var docPopup = document.getElementById('popup');
    if (event.target == videoPopup) {
        closeVideoPopup();
    }
});



// popup table //
const popupButtons = document.querySelectorAll('.popup-btn');
const popupContainer = document.getElementById('popup-container');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-btn');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup');
        const popup = document.getElementById(popupId + '-popup');
        popupContainer.style.display = 'block';
        popup.style.display = 'block';
        popup.style.opacity = 1;
        document.body.classList.add('popup-open'); 
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupContainer.style.display = 'none';
        popups.forEach(popup => {
            popup.style.display = 'none';
            popup.style.opacity = 0;
            document.body.classList.remove('popup-open'); 
        });

    });
});

popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        closePopup();
    }
});

function closePopup() {
    popupContainer.style.display = 'none';
    popups.forEach(popup => {
        popup.style.display = 'none';
        popup.style.opacity = 0;
        document.body.classList.remove('popup-open');
    });
}
