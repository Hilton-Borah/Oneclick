// document.addEventListener("DOMContentLoaded", function () {
//   // Your code here
//   document.getElementById("hamburger").onclick = function () {
//     document.getElementById("mobile-nav").classList.toggle("active");
//   };
// });
// import {x} from "../"

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

// localStorage.setItem('popupClosed', false);

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("temporaryImage");
  const closeButton = document.getElementById("closeButton");

  // Check local storage to see if the image should be shown
  const hasClosedPopup = localStorage.getItem("popupClosed");
//   console.log(hasClosedPopup);
  // Check if the screen size is small or medium
  if (!hasClosedPopup && window.innerWidth < 768) {
    // Show the image
    image.classList.add("visible");

    // Hide the image after 10 seconds
    setTimeout(() => {
      image.classList.remove("visible");
      setTimeout(() => {
        image.style.display = "none";
        closeButton.style.display = "none";
      }, 1000); // Wait for the opacity transition to finish
    }, 10000); // 10 seconds in milliseconds
  }

  closeButton.addEventListener("click", () => {
    image.style.display = "none";
    closeButton.style.display = "none";
    localStorage.setItem("popupClosed", true);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fixedSection = document.querySelector(".fixedSection");
  const closeButton = document.querySelector(".closeButton");

  // Check local storage to see if the user has already closed the section
  if (!localStorage.getItem("sectionClosed")) {
    // Show the section if not closed previously
    fixedSection.style.display = "block";

    // Show the section for 10 seconds on page load
    //   setTimeout(() => {
    // }, 10000); // 10 seconds
  }

  // Add click event listener to the close button
  closeButton.addEventListener("click", function () {
    fixedSection.style.display = "none";
    // Hide the section and set a flag in local storage
    fixedSection.style.display = "none";
    localStorage.setItem("sectionClosed", "true");
  });
});


function moveLatestArticles() {
  const mainBlogPart = document.querySelector('.secondSection');
  const latestArticles = document.querySelector('.latestArticle');

  if (window.innerWidth <= 768) {
      mainBlogPart.appendChild(latestArticles);
  } else {
      const thirdSection = document.querySelector('.thirdSection');
      thirdSection.appendChild(latestArticles);
  }
}

window.addEventListener('resize', moveLatestArticles);
window.addEventListener('load', moveLatestArticles);

function moveThirdSectionFirst() {
  const mainBlogPart = document.querySelector('.secondSection');
  const thirdSection = document.querySelector('.thirdSection');
  const mainquestionpart = document.querySelector('.questionpart');
  const thirdSectionFirst = document.querySelector('.thirdSectionFirst');

  if (window.innerWidth <= 768) {
      // mainquestionpart.appendChild(thirdSectionFirst);
      thirdSection.style.display="none"
  } else {
      const thirdSection = document.querySelector('.thirdSection');
      // thirdSection.prepend(thirdSectionFirst);
      thirdSection.style.display="block"
  }
}

window.addEventListener('resize', moveThirdSectionFirst);
window.addEventListener('load', moveThirdSectionFirst);

