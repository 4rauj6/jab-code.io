const accordionItems = document.querySelectorAll('.works-list li');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('.work-details');
        const siblingItems = item.parentElement.querySelectorAll('i');
        siblingItems.forEach(sibling => {
            if (sibling !== item) {
                sibling.classList.remove('active');
                const siblingDetails = sibling.querySelector('.work-details');
                if (siblingDetails) siblingDetails.style.maxHeight = null;
            }
        });

        item.classList.add('active');
        if (details) {
            details.style.maxHeight = details.scrollHeight + "px";
        }
    });
    item.addEventListener('mouseleave', () => {
        const details = item.querySelector('.work-details');
        item.classList.remove('active');
        if (details) {
            details.style.maxHeight = null;
        }
    });
    
});

function showContractPage(originLocal) {
    const contractPage = document.getElementById('contract-us');
    const pagesToHide = document.querySelector('main');

    if (originLocal === 'links-menu' &&!contractPage.classList.contains('elementAlreadyHide')) {
        return; 
    }

    contractPage.classList.toggle('elementAlreadyHide')
    pagesToHide.classList.toggle('hideElements');
}