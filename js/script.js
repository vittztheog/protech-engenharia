document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Menu Mobile ---
    const botaoMenu = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    
    if (botaoMenu) {
        botaoMenu.addEventListener('click', () => {
            navMobile.classList.toggle('ativo');
            botaoMenu.innerHTML = navMobile.classList.contains('ativo') ? '✕' : '☰';
        });
        
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMobile.classList.remove('ativo'));
        });
    }

    // --- 2. Elementos dos Modais ---
    const modalServico = document.getElementById('modalServico');
    const modalContato = document.getElementById('modalContato');
    
    const imgModal = document.getElementById('imgModal');
    const tituloModal = document.getElementById('tituloModal');
    const descModal = document.getElementById('descModal');
    const btnContratarEspecifico = document.getElementById('btnContratarEspecifico');
    
    const selectServico = document.getElementById('selectServico');

    // --- 3. Dados dos Serviços ---
    const dadosServicos = {
        'mapeamento': {
            titulo: 'Mapeamento 3D e Topografia',
            desc: 'Utilizamos fotogrametria avançada para criar modelos digitais de terreno (MDT) e superfície (MDS). Ideal para acompanhamento de obras, cálculo de volumes e planejamento urbano com precisão centimétrica. Entregamos nuvem de pontos, ortomosaicos e curvas de nível.',
            img: 'assets/MDT.png', 
            valorFormulario: 'Mapeamento'
        },
        'inspecao': {
            titulo: 'Inspeção Predial e Fachadas',
            desc: 'Identificamos fissuras, desplacamentos e patologias em locais de difícil acesso sem riscos humanos. Relatórios fotográficos em 4K prontos para laudos técnicos, reduzindo custos com andaimes e balancins.',
            img: 'assets/Estrutura.JPG',
            valorFormulario: 'Inspecao'
        },
        'termografia': {
            titulo: 'Inspeção Termográfica',
            desc: 'Detectamos infiltrações ocultas, falhas em isolamento e superaquecimento em componentes elétricos (painéis solares, linhas de transmissão) através de câmeras radiométricas de última geração. Prevenção de sinistros e aumento de eficiência.',
            img: 'assets/Termografia.png',
            valorFormulario: 'Termografia'
        }
    };

    // --- 4. Abrir Modal de Detalhes ---
    document.querySelectorAll('.btn-saiba-mais').forEach(btn => {
        btn.addEventListener('click', () => {
            const chave = btn.getAttribute('data-servico');
            const dados = dadosServicos[chave];

            if(dados) {
                tituloModal.textContent = dados.titulo;
                descModal.textContent = dados.desc;
                imgModal.src = dados.img; 
                btnContratarEspecifico.setAttribute('data-valor-alvo', dados.valorFormulario);
                modalServico.style.display = 'block';
            }
        });
    });

    // --- 5. Botão Contratar (dentro do modal) ---
    if(btnContratarEspecifico) {
        btnContratarEspecifico.addEventListener('click', () => {
            const valorAlvo = btnContratarEspecifico.getAttribute('data-valor-alvo');
            modalServico.style.display = 'none';
            modalContato.style.display = 'block';
            
            if(valorAlvo && selectServico) {
                selectServico.value = valorAlvo;
            }
        });
    }

    // --- 6. Botões Gerais de Orçamento ---
    document.querySelectorAll('.btn-abrir-contato').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalServico.style.display = 'none';
            modalContato.style.display = 'block';
            if(selectServico) selectServico.value = ""; // Reseta seleção
        });
    });

    // --- 7. Fechar Modais ---
    document.querySelectorAll('.fechar-modal').forEach(span => {
        span.addEventListener('click', () => {
            modalServico.style.display = 'none';
            modalContato.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target == modalServico) modalServico.style.display = 'none';
        if (e.target == modalContato) modalContato.style.display = 'none';
    });

    // --- 8. Animação Scroll ---
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => { 
            if (entrada.isIntersecting) entrada.target.classList.add('ativo'); 
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.revelar').forEach(el => observador.observe(el));

    // --- 9. Ano Rodapé ---
    const spanAno = document.getElementById('ano');
    if(spanAno) spanAno.textContent = new Date().getFullYear();

    // --- 10. Formulário (Visual) ---
    const formContato = document.getElementById('formContato');
    if (formContato) {
        // Se usar Formspree, remova este bloco para que o envio seja real
        // Caso contrário, mantenha para teste visual:
        /*
        formContato.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = formContato.querySelector('button');
            const textoOriginal = btn.textContent;
            btn.textContent = 'Enviando...'; btn.disabled = true;
            setTimeout(() => {
                alert('Solicitação enviada!');
                formContato.reset();
                modalContato.style.display = 'none';
                btn.textContent = textoOriginal; btn.disabled = false;
            }, 1500);
        });
        */
    }
});