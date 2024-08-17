document.addEventListener('DOMContentLoaded', function() {
    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Initialize the hamburger menu functionality
            document.getElementById('hamburger').onclick = function() {
                document.getElementById('mobile-nav').classList.toggle('active');
            };
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});


// review section ------------

let currentIndex_review = 0;
const track_review = document.querySelector('.carousel-track-review');
const images_review = Array.from(document.querySelectorAll('.carousel-image-review'));
const totalImages_review = images_review.length;
const visibleImages_review = 4;
const intervalTime_review = 4000; // 30 seconds

// Clone the first set of images and append them to the end of the track
images_review.forEach(image => {
    const clone = image.cloneNode(true);
    track_review.appendChild(clone);
});

const updateCarousel_review = () => {
    const offset = -currentIndex_review * (images_review[0].clientWidth + 10); // 10 is for margin
    track_review.style.transform = `translateX(${offset}px)`;
    if (currentIndex_review >= totalImages_review) {
        setTimeout(() => {
            track_review.style.transition = 'none';
            currentIndex_review = 0;
            const resetOffset = -currentIndex_review * (images_review[0].clientWidth + 10);
            track_review.style.transform = `translateX(${resetOffset}px)`;
        }, 500); // Match this duration to your CSS transition duration
        setTimeout(() => {
            track_review.style.transition = 'transform 0.5s ease';
        }, 600); // Slightly longer than the reset timeout to ensure the transition is re-enabled
    }
};

const nextSlide_review = () => {
    currentIndex_review++;
    updateCarousel_review();
};

const prevSlide_review = () => {
    if (currentIndex_review === 0) {
        currentIndex_review = totalImages_review;
        const offset = -currentIndex_review * (images_review[0].clientWidth + 10);
        track_review.style.transition = 'none';
        track_review.style.transform = `translateX(${offset}px)`;
        setTimeout(() => {
            track_review.style.transition = 'transform 0.5s ease';
            currentIndex_review--;
            updateCarousel_review();
        }, 50); // Allow time for the transition to be disabled
    } else {
        currentIndex_review--;
        updateCarousel_review();
    }
};

setInterval(nextSlide_review, intervalTime_review);

updateCarousel_review();