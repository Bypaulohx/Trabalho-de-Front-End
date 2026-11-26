# Trabalho de Front-End

Trabalho de front-end com duas páginas: um portfólio pessoal e uma tela de login. Ambas foram reestruturadas para usar a mesma paleta, funcionar no celular e ter interações reais no navegador.

## Páginas

- `index.html` — portfólio com sobre mim, projetos, hobbies, séries e formulário de contato.
- `login.html` — tela de login com validação, botão para mostrar/ocultar senha e mensagens de retorno.

## O que mudou

- Caminhos de imagens e do PDF corrigidos: agora tudo está em `assets/` e funciona tanto localmente quanto no GitHub Pages.
- Projetos e séries renderizados a partir de `js/data.js`.
- Formulários validados no cliente, com mensagens claras para cada erro.
- Menu responsivo, foco visível, rótulos para leitores de tela e link de voltar ao topo.
- CSS compartilhado entre as páginas, com variáveis de cor e componentes reaproveitados.

## Rodando localmente

Abra o `index.html` no navegador. Para servir via HTTP:

```bash
npx serve .
```

Depois acesse `http://localhost:3000`. A tela de login fica em `http://localhost:3000/login.html`.

## Publicando no GitHub Pages

No repositório, abra **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e `/ (root)`, e salve. O site ficará disponível em `https://bypaulohx.github.io/Trabalho-de-Front-End/`.

## Estrutura

```
.
├── assets/
│   ├── files/              apresentação em PDF
│   └── images/             logo, ilustrações e miniaturas
├── css/
│   ├── base.css            variáveis, reset e componentes compartilhados
│   ├── portfolio.css       layout do portfólio
│   └── login.css           layout da tela de login
├── js/
│   ├── data.js             projetos e séries
│   ├── portfolio.js        renderização e formulário do portfólio
│   └── login.js            validação e ações da tela de login
├── index.html
└── login.html
```

## Tecnologias

HTML semântico, CSS com variáveis e media queries, JavaScript com DOM API. Ícones do Bootstrap Icons e fontes do Google Fonts.

Trabalho feito para estudo. As ilustrações pertencem aos seus respectivos autores.

---

Paulo Henrique · [GitHub](https://github.com/Bypaulohx)
