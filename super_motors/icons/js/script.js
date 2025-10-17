// // JavaScript opcional para funcionalidades futuras
// // Este arquivo pode ser usado para adicionar interatividade ao site

// // Função para scroll suave nos links internos
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a[href^="#"]');
    
//     links.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
// });

// // Função para validação de formulário (já implementada no HTML)
// function validarFormulario() {
//     // Esta função já está implementada no cadastro.html
//     // Aqui pode ser expandida para funcionalidades mais complexas
//     return true;
// }

// // Função para animações de entrada dos elementos
// function animarElementos() {
//     const elementos = document.querySelectorAll('.service-card, .gallery-item, .icon-item');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     });
    
//     elementos.forEach(elemento => {
//         elemento.style.opacity = '0';
//         elemento.style.transform = 'translateY(20px)';
//         elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(elemento);
//     });
// }

// // Inicializar animações quando a página carregar
// window.addEventListener('load', animarElementos);

