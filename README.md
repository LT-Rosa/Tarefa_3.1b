# Tarefa 3.1 b) — Prototipagem Animalec

Extensão académica do **Front-end Animalec original** (Vue 2 + BootstrapVue), preservando os quatro módulos originais e acrescentando **Sponsors** e **Experts** ao ecrã de Administração.

## Entregáveis

* `wireframes/sponsors/` e `wireframes/experts/` — quatro ficheiros `.drawio` editáveis (`desktop.drawio` e `mobile.drawio` por entidade), de baixa fidelidade.
* `mockups/sponsors/` e `mockups/experts/` — quatro ficheiros `.drawio` editáveis (`desktop.drawio` e `mobile.drawio` por entidade), com proposta gráfica.
* `prototipos/index.html`, `sponsors.html` e `experts.html` — **protótipos HTML5 autónomos**, com listagem, detalhe, formulários, pesquisa, edição, remoção e navegação entre entidades (abrem diretamente no browser).
* `Front-end/` — projeto original com novas rotas e protótipos interativos Vue/HTML5 integrados no Back-office.
* `DOCUMENTACAO.md` — decisões de planeamento, percursos e critérios de teste.

## Consultar os protótipos (terceiro artefacto)

Abrir `prototipos/index.html` num browser e escolher **Sponsors** ou **Experts**. Os dois ficheiros HTML são navegáveis e responsivos, sem instalação de dependências. Existem registos demonstrativos predefinidos nas páginas HTML autónomas. Esses registos são locais e **não fazem parte da API original**. Na integração Vue, a lista inicia vazia até serem criados registos no navegador.

## Execução

```bash
cd Front-end
npm ci
npm run serve
```

Abrir o endereço indicado pelo Vue CLI e entrar em `/admin`; usar **Sponsors** ou **Experts**. As novas rotas também podem ser testadas diretamente em `/admin/sponsors` e `/admin/experts`.

**Atenção:** os módulos históricos do Animalec dependem dos serviços/API originais. Os novos módulos são protótipos locais, com dados de demonstração criados pelo utilizador e persistência em `localStorage`, para testar a navegação e as operações sem alterar a API ou MongoDB. Isto **não** constitui autenticação, controlo de acesso ou persistência de produção. Não utilizar dados reais/sensíveis.

### Testes

```bash
node tests/verificacao-estatica.js
npm run build
```

## Edição dos wireframes e mockups no diagrams.net

Os diretórios `wireframes/` e `mockups/` incluem ficheiros **`.drawio` editáveis** para Sponsors e Experts, em versões desktop e mobile.



## Limites do âmbito

As ligações a `/admin`, `/admin/sponsors` e `/admin/experts` existem no router



