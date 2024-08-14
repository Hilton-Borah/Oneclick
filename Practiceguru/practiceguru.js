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
