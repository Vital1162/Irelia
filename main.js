window.addEventListener('scroll', function() {
    var content = document.querySelector('.content');
    var contentPosition = content.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    if (contentPosition < screenHeight) {
        content.classList.add('fade-up');
    }

});





// playusound

// // Create an Audio object
// var sound = new Audio('audio/maker.mp3');


// // Call toggleSound() when the page loads to play the audio
// window.onload = function() {
//     sound.play();
// };


// // Function to toggle sound play/pause
// function toggleSound() {
//     if (sound.paused) {
//         sound.play();
//     } else {
//         sound.pause();
//         sound.currentTime = 0; // Reset sound to beginning
//     }
// }


// // Event listener for the button
// document.getElementById('toggleSoundButton').addEventListener('click', toggleSound);

// play sound
const video = document.getElementById('bg-maker');
    const muteButton = document.getElementById('muteButton');
    // const decreaseVolumeButton = document.getElementById('decreaseVolumeButton');
    // const increaseVolumeButton = document.getElementById('increaseVolumeButton');

    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.innerHTML = video.muted ? '<i class="fa-solid fa-volume-off"></i>' : '<i class="fas fa-volume-up"></i>';
    });

    // decreaseVolumeButton.addEventListener('click', () => {
    //     if (video.volume > 0) {
    //         video.volume -= 0.1; // Decrease volume by 10%
    //     }
    //     updateMuteButton();
    // });

    // increaseVolumeButton.addEventListener('click', () => {
    //     if (video.volume < 1) {
    //         video.volume += 0.1; // Increase volume by 10%
    //     }
    //     updateMuteButton();
    // });

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



// popup table
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContainer = document.getElementById('popup-container');
    const closeButtons = document.querySelectorAll('.close-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(`${popupId}-popup`);
            popupContainer.style.display = 'block';
            popup.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            popupContainer.style.display = 'none';
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
        });
    });
});
