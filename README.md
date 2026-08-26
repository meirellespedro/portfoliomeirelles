# Portfólio — Pedro Meirelles

Site pessoal de Pedro Meirelles, desenvolvedor Full-Stack e estudante de Análise e Desenvolvimento de Sistemas (UERJ).

**Live:** https://meirellespedro.github.io/portfoliomeirelles/

## Sobre

Vitrine dos projetos, stack e experiência de Pedro Meirelles, com download direto do currículo e contato via WhatsApp/LinkedIn.

## Funcionalidades

- Apresentação com destaques (hero) e resumo de diferenciais
- Grid de projetos com descrição, tecnologias usadas e links para código/demo
- Seção de stack organizada por nível de domínio (sólido, em construção)
- Linha do tempo de experiência profissional e formação acadêmica
- Download do currículo em PDF
- Layout responsivo, com animações de revelação ao rolar a página (`data-reveal`)
- Respeita `prefers-reduced-motion` para quem pediu menos movimento

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, media queries)
- JavaScript (vanilla, sem framework/bundler)
- Bootstrap Icons (CDN)
- Google Fonts (Montserrat)
- Deploy: GitHub Pages

## Arquitetura

Site estático simples, sem build step: `index.html` + `style.css` + `script.js`, servidos diretamente pelo GitHub Pages. O JS cuida apenas de comportamento de interface (menu mobile, reveal-on-scroll); não há back-end nem chamadas a API neste repositório.

## Como executar localmente

Não há dependências nem passo de build — basta abrir o arquivo:

```bash
git clone https://github.com/meirellespedro/portfoliomeirelles.git
cd portfoliomeirelles
```

Depois abra `index.html` no navegador, ou sirva a pasta com qualquer servidor estático (ex.: extensão Live Server do VS Code).

## Estrutura do projeto

```
├── index.html          # Marcação e conteúdo das seções
├── style.css           # Estilos e responsividade
├── script.js           # Menu mobile, reveal-on-scroll
├── img/                # Imagens de projetos e fotos
└── curriculo-pedro-meirelles.pdf
```

## Autor

Pedro Meirelles — [LinkedIn](https://www.linkedin.com/in/pedro-meirelles-almeida) · [GitHub](https://github.com/meirellespedro)
