# JD1 Notícias - Portal de Notícias

Site de notícias desenvolvido em **HTML5 puro + SCSS**, seguindo as melhores práticas de **SEO** e **acessibilidade**.

## 📋 Características

### ✅ HTML5 Semântico
- Tags semânticas (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, etc.)
- Estrutura hierárquica correta de headings (h1, h2, h3)
- Atributos ARIA para melhor acessibilidade
- Microdata Schema.org para rich snippets no Google

### ✅ SEO Otimizado
- Meta tags essenciais (description, keywords, author)
- Open Graph para compartilhamento em redes sociais
- Twitter Cards
- Canonical URL
- Sitemap ready
- Structured Data (JSON-LD)
- Alt text em todas as imagens
- URLs semânticas

### ✅ Acessibilidade (WCAG 2.1)
- Navegação por teclado
- Labels e ARIA attributes
- Contrast ratio adequado
- Focus states visíveis
- Screen reader friendly
- Skip links (pode ser adicionado)

### ✅ Performance
- Lazy loading de imagens
- CSS otimizado
- JavaScript vanilla (sem dependências)
- Imagens responsivas
- Code splitting ready

### ✅ Responsivo
- Mobile-first approach
- Breakpoints: 768px (tablet) e 1024px (desktop)
- Imagens adaptativas

## 📁 Estrutura de Arquivos

```
/
├── index.html              # Página principal
├── styles/
│   ├── main.scss          # Estilos em SCSS (fonte)
│   └── main.css           # CSS compilado (pronto para uso)
├── scripts/
│   └── main.js            # JavaScript vanilla
├── assets/                # Imagens e recursos
│   ├── banner-top.png
│   ├── banner-bottom.png
│   ├── banner-lateral.png
│   ├── noticia-1.jpg ... noticia-8.jpg
│   ├── programa-1.jpg ... programa-3.jpg
│   ├── logo.png
│   ├── favicon.ico
│   └── og-image.jpg
└── README.md
```

## 🚀 Como Usar

### Opção 1: CSS Compilado (Mais Simples)
Se você **não tem** um compilador SCSS, use o arquivo `styles/main.css` que já está pronto.

1. Baixe todos os arquivos
2. Adicione as imagens na pasta `assets/`
3. Abra `index.html` em um navegador

### Opção 2: SCSS (Recomendado)
Se você quer **editar os estilos** usando SCSS:

1. Instale um compilador SCSS:
   ```bash
   npm install -g sass
   ```

2. Compile o SCSS:
   ```bash
   sass styles/main.scss styles/main.css --watch
   ```

3. Ou use um plugin do VS Code como "Live Sass Compiler"

## 🖼️ Imagens Necessárias

Você precisa adicionar as seguintes imagens na pasta `assets/`:

- `banner-top.png` (973x251px) - Banner superior
- `banner-bottom.png` (973x251px) - Banner inferior
- `banner-lateral.png` (300x250px) - Banner lateral
- `noticia-principal.jpg` (480x320px) - Notícia destaque
- `noticia-1.jpg` até `noticia-8.jpg` (256x171px ou 320x180px)
- `programa-1.jpg` até `programa-3.jpg` (352x198px)
- `logo.png` - Logo da empresa
- `favicon.ico` - Favicon do site
- `og-image.jpg` (1200x630px) - Imagem para redes sociais

## 🎨 Customização

### Cores
Edite as variáveis no `styles/main.scss`:

```scss
$color-primary: #1fa0ee;
$color-primary-dark: #1886c8;
$color-text-dark: #021f34;
// ... outras cores
```

### Tipografia
A fonte padrão é **Open Sans** (carregada do Google Fonts). Para mudar:

```scss
$font-family-base: 'Sua Fonte', sans-serif;
```

### Layout
Ajuste os breakpoints em `styles/main.scss`:

```scss
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
```

## 📱 Funcionalidades JavaScript

- **Carousel**: Navegação entre notícias em destaque
- **Lazy Loading**: Carregamento otimizado de imagens
- **Smooth Scroll**: Rolagem suave para âncoras
- **Navegação por Teclado**: Acessibilidade aprimorada
- **Error Handling**: Fallback para imagens quebradas
- **Analytics Ready**: Preparado para Google Analytics

## 🔍 SEO Checklist

- [x] Meta description única
- [x] Title tag otimizado
- [x] Headings hierárquicos (H1 → H2 → H3)
- [x] Alt text em todas as imagens
- [x] Open Graph tags
- [x] Schema.org markup
- [x] URLs semânticas
- [x] Sitemap.xml (criar separadamente)
- [x] robots.txt (criar separadamente)
- [x] Canonical URLs

## 🌐 Compatibilidade

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ iOS Safari
- ✅ Chrome Mobile

## 📝 Próximos Passos

1. **Adicionar as imagens reais** na pasta `assets/`
2. **Criar sitemap.xml** para melhor indexação
3. **Configurar robots.txt**
4. **Integrar Google Analytics** (ID no main.js)
5. **Adicionar Structured Data** para eventos/artigos
6. **Implementar PWA** (service worker já está preparado)
7. **Configurar CDN** para imagens

## 📄 Licença

Este projeto é um template. Use livremente conforme necessário.

## 🤝 Contribuições

Sinta-se à vontade para melhorar este código!

---

**Desenvolvido seguindo os padrões web modernos e best practices de HTML5, CSS3, SEO e Acessibilidade.**
