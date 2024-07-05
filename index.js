
// navbar ---------------

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    document.getElementById('hamburger').onclick = function() {
        document.getElementById('mobile-nav').classList.toggle('active');
    }
});




// // featured crosusel --------------------

let currentIndex_featured = 0;
const track_featured = document.querySelector('.carousel-track-featured');
const images_featured = Array.from(document.querySelectorAll('.carousel-image-featured'));
const totalImages_featured = images_featured.length;
const visibleImages_featured = 4;
const intervalTime_featured = 4000; // 30 seconds

// Clone the first set of images and append them to the end of the track
images_featured.forEach(image => {
    const clone = image.cloneNode(true);
    track_featured.appendChild(clone);
});

const updateCarousel_featured = () => {
    const offset = -currentIndex_featured * (images_featured[0].clientWidth + 10); // 10 is for margin
    track_featured.style.transform = `translateX(${offset}px)`;
    if (currentIndex_featured >= totalImages_featured) {
        setTimeout(() => {
            track_featured.style.transition = 'none';
            currentIndex_featured = 0;
            const resetOffset = -currentIndex_featured * (images_featured[0].clientWidth + 10);
            track_featured.style.transform = `translateX(${resetOffset}px)`;
        }, 500); // Match this duration to your CSS transition duration
        setTimeout(() => {
            track_featured.style.transition = 'transform 0.5s ease';
        }, 600); // Slightly longer than the reset timeout to ensure the transition is re-enabled
    }
};

const nextSlide_featured = () => {
    currentIndex_featured++;
    updateCarousel_featured();
};

const prevSlide_featured = () => {
    if (currentIndex_featured === 0) {
        currentIndex_featured = totalImages_featured;
        const offset = -currentIndex_featured * (images_featured[0].clientWidth + 10);
        track_featured.style.transition = 'none';
        track_featured.style.transform = `translateX(${offset}px)`;
        setTimeout(() => {
            track_featured.style.transition = 'transform 0.5s ease';
            currentIndex_featured--;
            updateCarousel_featured();
        }, 50); // Allow time for the transition to be disabled
    } else {
        currentIndex_featured--;
        updateCarousel_featured();
    }
};

setInterval(nextSlide_featured, intervalTime_featured);

updateCarousel_featured();


// other crousel ----

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        initCarousel(carousel);
    });
});

function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const images = Array.from(carousel.querySelectorAll('.carousel-image'));
    const totalImages = images.length;
    const intervalTime = 1000; // 30 seconds
    let currentIndex = 0;

    // Clone the first set of images and append them to the end of the track
    images.forEach(image => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });

    const updateCarousel = () => {
        const offset = -currentIndex * (images[0].clientWidth + 10); // 10 is for margin
        track.style.transform = `translateX(${offset}px)`;
        if (currentIndex >= totalImages) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                const resetOffset = -currentIndex * (images[0].clientWidth + 10);
                track.style.transform = `translateX(${resetOffset}px)`;
            }, 500); // Match this duration to your CSS transition duration
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
            }, 600); // Slightly longer than the reset timeout to ensure the transition is re-enabled
        }
    };

    const nextSlide = () => {
        currentIndex++;
        updateCarousel();
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            currentIndex = totalImages;
            const offset = -currentIndex * (images[0].clientWidth + 10);
            track.style.transition = 'none';
            track.style.transform = `translateX(${offset}px)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease';
                currentIndex--;
                updateCarousel();
            }, 50); // Allow time for the transition to be disabled
        } else {
            currentIndex--;
            updateCarousel();
        }
    };

    const nextButton = document.querySelector(`.nav-button.right[data-carousel="${carousel.id}"]`);
    const prevButton = document.querySelector(`.nav-button.left[data-carousel="${carousel.id}"]`);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    setInterval(nextSlide, intervalTime);

    updateCarousel();
}

// first section crousel -----------------------


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


// faq section -----------------

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faqQuestion');
  
    questions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          arrow.innerHTML = '&#9660;'; // Down arrow
        } else {
          answer.style.display = 'block';
          arrow.innerHTML = '&#9650;'; // Up arrow
        }
      });
    });
  });

//   how it's work ---------------------------


document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('.text-itemHow');
    const displayImage = document.getElementById('display-imageHow');
    const indicatorBoxes = document.querySelectorAll('.indicator-boxHow');

    textItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all text items and indicator boxes
            textItems.forEach(i => i.classList.remove('active'));
            indicatorBoxes.forEach(box => box.classList.remove('active'));

            // Add active class to the clicked item and the corresponding indicator box
            this.classList.add('active');
            const index = this.getAttribute('data-index');
            indicatorBoxes[index].classList.add('active');

            // Change the image source
            const newImage = this.getAttribute('data-image');
            displayImage.src = newImage;
        });
    });
});

// reviewsection-------------------



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

// scrool up 

const backToTopButton = document.getElementById('back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// When the user clicks on the button, scroll to the top of the document smoothly
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});