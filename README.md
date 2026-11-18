# Tarefa 3.1 b) — Prototipagem Animalec

Extensão académica do **Front-end Animalec original** (Vue 2 + BootstrapVue), preservando os quatro módulos originais e acrescentando **Sponsors** e **Experts** ao ecrã de Administração.

## Entregáveis

- `wireframes/sponsors|experts/desktop.svg` e `mobile.svg` — estrutura, baixa fidelidade (4 ficheiros).
- `mockups/sponsors|experts/desktop.svg` e `mobile.svg` — proposta gráfica, alta fidelidade (4 ficheiros).
- `prototipos/index.html`, `sponsors.html` e `experts.html` — **protótipos HTML5 autónomos**, com listagem, detalhe, formulários, pesquisa, edição, remoção e navegação entre entidades (abrem diretamente no browser).
- `Front-end/` — projeto original com novas rotas e protótipos interativos Vue/HTML5 integrados no Back-office.
- `DOCUMENTACAO.md` — decisões de planeamento, percursos e critérios de teste.

Os SVG são vetoriais, editáveis, abrem num browser e podem ser importados no diagrams.net/draw.io. Representam a **listagem e pré-visualização do formulário**; os formulários completos estão no protótipo funcional.

## Consultar os protótipos (terceiro artefacto)

Abrir `prototipos/index.html` num browser e escolher **Sponsors** ou **Experts**. Os dois ficheiros HTML são navegáveis e responsivos, sem instalação de dependências. Os registos demonstrativos são locais e **não fazem parte da API original**.

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

O teste estático confirma a integração dos novos ficheiros, rotas e elementos essenciais; o teste de compilação requer dependências npm instaladas. Testar ainda manualmente os percursos descritos em `DOCUMENTACAO.md` em desktop e mobile.

## Git

Criar, na área individual, um repositório **`Tarefa_3.1b`** e carregar o conteúdo desta pasta. A pasta `Front-end/node_modules` e ficheiros compilados não devem ser versionados.

## Crédito

Base: código original de apoio ao livro *Desenvolvimento Avançado para a Web*, Ricardo Queirós e Filipe Portela, FCA (2020). Alterações para a UC 22285: prototipagem das novas entidades Sponsors e Experts.


## Edição dos wireframes e mockups no diagrams.net

Os diretórios `wireframes/` e `mockups/` incluem ficheiros **`.drawio` editáveis** para Sponsors e Experts, em versões desktop e mobile, além das versões SVG. Abre os ficheiros em https://app.diagrams.net/ através de **Ficheiro > Abrir de > Dispositivo**. Cada retângulo e cada texto são objetos independentes e podem ser alterados diretamente.
