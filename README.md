# Drone Services Pro - Site Estático

Site profissional para empresa de serviços com drones, desenvolvido em **HTML, CSS e JavaScript puro**.

## 📋 Conteúdo

O site inclui as seguintes seções:

- **Header/Navegação** - Menu responsivo com links para todas as seções
- **Hero Section** - Apresentação principal com chamada para ação
- **Serviços** - Três serviços principais (Mapeamento 3D, Inspeção Predial, Inspeção Termográfica)
- **Sobre** - Informações da empresa com estatísticas
- **Portfolio** - Galeria de projetos realizados
- **Contato** - Formulário de contato com validação
- **Footer** - Links rápidos e informações de contato

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Extraia os arquivos em uma pasta
2. Abra o arquivo `index.html` em seu navegador
3. O site funcionará completamente offline

### Opção 2: Hospedar em um Servidor Web
1. Faça upload dos arquivos para seu servidor web (Apache, Nginx, etc.)
2. Acesse o domínio/IP do seu servidor
3. O site estará disponível publicamente

### Opção 3: Usar com Python (Servidor Local)
```bash
# Python 3
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

### Opção 4: Usar com Node.js
```bash
# Instale http-server globalmente
npm install -g http-server

# Execute na pasta do projeto
http-server

# Acesse: http://localhost:8080
```

## 📁 Estrutura de Arquivos

```
drone-services/
├── index.html      # Arquivo principal HTML
├── styles.css      # Estilos CSS
├── script.js       # JavaScript interativo
└── README.md       # Este arquivo
```

## ✨ Funcionalidades

### Interativas
- ✅ Menu responsivo para dispositivos móveis
- ✅ Navegação suave entre seções
- ✅ Formulário de contato com validação
- ✅ Animações ao rolar a página
- ✅ Botão "Voltar ao topo"
- ✅ Links de navegação ativos

### Responsivas
- ✅ Design mobile-first
- ✅ Funciona em todos os dispositivos
- ✅ Otimizado para tablets e desktops
- ✅ Menu hamburger em mobile

## 🎨 Personalização

### Alterar Cores
Edite o arquivo `styles.css` e modifique as variáveis CSS no início:

```css
:root {
    --primary: #3b82f6;           /* Cor principal (azul) */
    --primary-dark: #2563eb;      /* Cor principal escura */
    --background: #ffffff;        /* Cor de fundo */
    --foreground: #1f2937;        /* Cor do texto */
    /* ... outras cores ... */
}
```

### Alterar Textos
Edite o arquivo `index.html` e procure pelos textos que deseja modificar:
- Título do site
- Descrições dos serviços
- Informações da empresa
- Dados de contato

### Adicionar Imagens
Para adicionar imagens aos projetos do portfolio:
1. Crie uma pasta `images` na mesma pasta dos arquivos
2. Adicione suas imagens
3. Modifique o HTML para referenciar as imagens:

```html
<div class="portfolio-image">
    <img src="images/projeto1.jpg" alt="Projeto 1">
</div>
```

## 📝 Modificações Comuns

### Mudar Número de Telefone
Procure por `(11) 99999-9999` no arquivo `index.html` e substitua pelo seu número.

### Mudar Email
Procure por `contato@droneservices.com` e substitua pelo seu email.

### Mudar Localização
Procure por `São Paulo, SP` e substitua pela sua localização.

### Adicionar Mais Serviços
Copie um bloco `<div class="service-card">` e modifique o conteúdo.

### Adicionar Mais Projetos
Copie um bloco `<div class="portfolio-card">` e modifique o conteúdo.

## 🔧 Integração com Backend

O formulário de contato atualmente simula um envio. Para integrar com um servidor real:

1. Modifique a função `handleFormSubmit` em `script.js`:

```javascript
// Enviar dados para um servidor
fetch('/api/contato', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    if (result.success) {
        showMessage(formMessage, 'Mensagem enviada com sucesso!', 'success');
    }
})
.catch(error => {
    showMessage(formMessage, 'Erro ao enviar mensagem', 'error');
});
```

2. Configure um backend (PHP, Node.js, Python, etc.) para processar os dados.

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ IE 11+ (com algumas limitações)

## 🎯 SEO Básico

O site inclui:
- ✅ Meta tags apropriadas
- ✅ Títulos e descrições
- ✅ Estrutura HTML semântica
- ✅ Links internos otimizados

Para melhorar o SEO:
1. Adicione mais conteúdo relevante
2. Crie um `sitemap.xml`
3. Registre em Google Search Console
4. Adicione Schema.org markup

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão na mesma pasta
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Teste em outro navegador
4. Verifique o console do navegador (F12) para erros

## 📄 Licença

Este site é fornecido como está. Você é livre para modificar e usar conforme necessário.

## 🚀 Próximos Passos

1. **Adicionar HTTPS** - Configure um certificado SSL/TLS
2. **Otimizar Imagens** - Comprima as imagens para melhor performance
3. **Adicionar Analytics** - Integre Google Analytics
4. **Criar Blog** - Adicione uma seção de notícias/blog
5. **Integrar Pagamentos** - Configure Stripe ou PayPal para vendas

---

**Desenvolvido com ❤️ para Drone Services Pro**
