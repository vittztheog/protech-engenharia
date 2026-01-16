document.addEventListener('DOMContentLoaded', function() {
    
    // --- MENU MOBILE ---
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMobile.classList.toggle('ativo');
            menuToggle.innerHTML = navMobile.classList.contains('ativo') ? '✕' : '☰';
        });
        // Fechar ao clicar em link
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('ativo');
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // --- MODAL DE CONTATO ---
    const modalContato = document.getElementById('modalContato');
    const selectServicoModal = document.getElementById('selectServicoModal');

    // 1. Botões genéricos (ex: Header) abrem sem seleção específica
    document.querySelectorAll('.btn-abrir-contato').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalContato) {
                modalContato.style.display = 'block';
                if(selectServicoModal) selectServicoModal.value = ""; // Reseta
            }
        });
    });

    // 2. Botões específicos (Cards de Serviço) selecionam a opção
    document.querySelectorAll('.btn-contratar-servico').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const servicoAlvo = btn.getAttribute('data-service'); // Pega o valor do HTML
            
            if (modalContato) {
                modalContato.style.display = 'block';
                if (selectServicoModal && servicoAlvo) {
                    selectServicoModal.value = servicoAlvo; // Seleciona automaticamente
                }
            }
        });
    });

    // Fechar modal
    document.querySelectorAll('.fechar-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if (modalContato) modalContato.style.display = 'none';
        });
    });

    // Clique fora fecha
    window.addEventListener('click', (e) => {
        if (e.target == modalContato) modalContato.style.display = 'none';
    });

    // --- ANIMAÇÃO SCROLL (REVELAR) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
            }
        });
    }, { threshold: 0.1 }); // Dispara quando 10% do elemento aparece

    document.querySelectorAll('.revelar').forEach(el => observer.observe(el));

    // ANO FOOTER
    const ano = document.getElementById('ano');
    if(ano) ano.textContent = new Date().getFullYear();
});