const toggleIconBtn = document.querySelectorAll('.works-list i');

toggleIconBtn.forEach(element => {
    element.addEventListener('click', function () {
        const details = this.parentElement.querySelector('.work-details');
        const setaCuidada = this;

        const jaEstaAberto = details.style.display === 'block';

        const todosOsDetalhes = document.querySelectorAll('.work-details');
        const todasAsSetas = document.querySelectorAll('.icone-seta');

        todosOsDetalhes.forEach(div => {
            div.style.display = 'none';
        });

        todasAsSetas.forEach(seta => {
            seta.classList.remove('ativo');
        });

        if (!jaEstaAberto) {
            details.style.display = 'block';
            setaCuidada.classList.add('ativo');
        }
    });
});

function showPage() {
    const pagesToHide = document.querySelectorAll('main');
    const pageToShow = document.getElementById('contract-us');

    if (pageToShow.style.display === 'none') {
        pagesToHide.style.display = 'block';
    } else {
        pagesToHide.style.display = 'block';
        pageToShow.style.display = 'none';
    }
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const pagesToHide = document.querySelectorAll(
            '.homepage, .services-page, .specialties-page, .about-jab-page, .jab-leaders-page'
        );
    })
})
