document.addEventListener("DOMContentLoaded", function() {
    // Animação dos cards de postagens
    const bookCards = document.querySelectorAll('.book__card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    bookCards.forEach(card => {
        observer.observe(card);
    });

    // Máscara para o campo de telefone
    $('#phone').mask('(00) 0000-0000');
});
