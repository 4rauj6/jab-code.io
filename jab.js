const toggleIconBtn = document.querySelectorAll('.works-list i');

toggleIconBtn.forEach(element => {
    element.addEventListener('click', function () {
        const details = this.parentElement.querySelector('.work-details');

        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    })
});

