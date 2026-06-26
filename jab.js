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


function hidePages() {
    const main = document.querySelector('main');
    const sections = main.querySelectorAll('section');
    const pageToShow = document.getElementById('contract-us');

    sections.forEach(section => {
        section.classList.remove('hideElement');

    });


    pageToShow.classList.add('hideElement');
}