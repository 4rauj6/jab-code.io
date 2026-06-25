const toggleIconBtn = document.querySelectorAll('.works-list i');

toggleIconBtn.forEach(element => {
    element.addEventListener('click', function () {
        const details = this.parentElement.querySelector('.work-details');

        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});

const contracUsBtn = document.querySelectorAll('.contract-us-btn');

contracUsBtn.forEach(pages => {
    pages.addEventListener('click', function () {
        const pagesToHide = document.querySelectorAll(
            '.homepage, .services-page, .specialties-page, .about-jab-page, .jab-leaders-page'
        );
        const pageToShow = document.querySelector('.contract-page');

        if (pageToShow.style.display === 'block') {
            pageToShow.style.display = 'none';
            pagesToHide.forEach(page => page.style.display = 'block');
        } else {
            pageToShow.style.display = 'block';
            pagesToHide.forEach(page => page.style.display = 'none');
        }
    });
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const pagesToHide = document.querySelectorAll(
            '.homepage, .services-page, .specialties-page, .about-jab-page, .jab-leaders-page'
        );
    })
})
