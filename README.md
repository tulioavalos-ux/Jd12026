# JD1 Noticias

Homepage estatica em **HTML5 + CSS3**, sem React, sem Vite e sem framework JS.

O projeto tambem pode usar **Tailwind CSS** como camada auxiliar de utilitarios, sem substituir o `main.scss`.

## Estrutura

```text
Jd12026/
├── index.html
├── editoria.html
├── noticia.html
├── assets/
├── package.json
├── styles/
│   └── main.css
│   └── tailwind.css
├── tailwind.config.cjs
├── robots.txt
├── sitemap.xml
├── ATTRIBUTIONS.md
└── README.md
```

## O que ficou no projeto

- `index.html`: pagina principal com estrutura semantica e metadata SEO.
- `styles/main.css`: estilos finais da interface.
- `styles/tailwind.css`: camada opcional de utilitarios Tailwind, carregada depois do CSS principal.
- `assets/`: imagens exportadas e renomeadas para uso da pagina.
- `robots.txt` e `sitemap.xml`: arquivos de indexacao.

## Como usar

1. Abra `index.html` no navegador.
2. Se publicar em servidor, mantenha a estrutura de pastas atual.

## Tailwind como apoio

- O `main.scss` continua sendo a base do projeto.
- O Tailwind entra apenas como apoio para ajustes pontuais.
- O build usa prefixo `tw-` para evitar colisao com classes existentes.
- O `preflight` fica desativado para nao resetar estilos globais.
- Enquanto nenhuma classe `tw-` estiver em uso, o `tailwind.css` permanece vazio e nao altera o layout nem o carregamento da pagina.

### Comandos

1. Entre na pasta do projeto:

```bash
cd Jd12026
```

2. Instale as dependencias:

```bash
npm install
```

3. Gere o CSS do Tailwind:

```bash
npm run tailwind:build
```

4. Para desenvolvimento com recompilacao automatica:

```bash
npm run tailwind:watch
```

### Regras de uso

- Use classes utilitarias no padrao do Tailwind, por exemplo `mt-4` ou `hidden`.
- Evite reescrever componentes inteiros em Tailwind se eles ja existem no `main.scss`.
- Priorize Tailwind para ajustes locais de espacamento, alinhamento, display e pequenas variacoes visuais.

## SEO e acessibilidade

- HTML semantico com `header`, `main`, `section`, `article` e `footer`.
- Hierarquia de titulos adequada.
- Open Graph, Twitter Cards e JSON-LD.
- `alt` nas imagens.
- Link de pular para o conteudo e estados de foco.

## Observacao

Os arquivos antigos de React/Vite foram removidos para deixar o projeto somente com a versao estatica.
