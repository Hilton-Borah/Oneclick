
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    document.getElementById('hamburger').onclick = function() {
        document.getElementById('mobile-nav').classList.toggle('active');
    }
});

let currentIndex_firstSection = 0;
const track_firstSection = document.querySelector('.carousel-track-firstSection');
const images_firstSection = Array.from(document.querySelectorAll('.carousel-image-firstSection'));
const totalImages_firstSection = images_firstSection.length;
const visibleImages_firstSection = 4;
const intervalTime_firstSection = 4000; // 30 seconds

// Clone the first set of images and append them to the end of the track
images_firstSection.forEach(image => {
    const clone = image.cloneNode(true);
    track_firstSection.appendChild(clone);
});

const updateCarousel_firstSection = () => {
    const offset = -currentIndex_firstSection * (images_firstSection[0].clientWidth + 10); // 10 is for margin
    track_firstSection.style.transform = `translateX(${offset}px)`;
    if (currentIndex_firstSection >= totalImages_firstSection) {
        setTimeout(() => {
            track_firstSection.style.transition = 'none';
            currentIndex_firstSection = 0;
            const resetOffset = -currentIndex_firstSection * (images_firstSection[0].clientWidth + 10);
            track_firstSection.style.transform = `translateX(${resetOffset}px)`;
        }, 500); // Match this duration to your CSS transition duration
        setTimeout(() => {
            track_firstSection.style.transition = 'transform 0.5s ease';
        }, 600); // Slightly longer than the reset timeout to ensure the transition is re-enabled
    }
};

const nextSlide_firstSection = () => {
    currentIndex_firstSection++;
    updateCarousel_firstSection();
};

const prevSlide_firstSection = () => {
    if (currentIndex_firstSection === 0) {
        currentIndex_firstSection = totalImages_firstSection;
        const offset = -currentIndex_firstSection * (images_firstSection[0].clientWidth + 10);
        track_firstSection.style.transition = 'none';
        track_firstSection.style.transform = `translateX(${offset}px)`;
        setTimeout(() => {
            track_firstSection.style.transition = 'transform 0.5s ease';
            currentIndex_firstSection--;
            updateCarousel_firstSection();
        }, 50); // Allow time for the transition to be disabled
    } else {
        currentIndex_firstSection--;
        updateCarousel_firstSection();
    }
};

setInterval(nextSlide_firstSection, intervalTime_firstSection);

updateCarousel_firstSection();