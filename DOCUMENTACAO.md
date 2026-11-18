# Documentação de planeamento — Tarefa 3.1 b)

## Requisitos do enunciado

Incluir duas entidades novas (`sponsors` e `experts`) no Back-office Animalec; planear atributos; produzir wireframes e mockups para browser e mobile; integrar protótipos com estrutura HTML5 na Administração; verificar a navegação e visualização; colocar artefactos em Git `Tarefa\_3.1b`.

## Análise do código original

* `src/views/Admin.vue`: quatro caixas de administração.
* `src/components/AdminOptionBox.vue`: caixa clicável com `routeName`.
* `src/router/index.js`: rotas nomeadas da aplicação.
* `src/views/animals/ListAnimals.vue`: padrão de listagem e operações VER/EDITAR/REMOVER.
* Front-end original utiliza Vue 2, Vue Router 3, Vuex 3 e BootstrapVue 2.

## Modelo de informação decidido para o protótipo

|Campo|Sponsor|Expert|Justificação|
|-|-|-|-|
|`id`|sim|sim|Identificação interna local|
|`name`|nome institucional|nome do especialista|Identificar entidade|
|`subject`|tipo de patrocínio|especialidade científica|Caracterização|
|`description`|descrição do apoio|instituição e biografia|Contexto|
|`email`|contacto|contacto|Comunicação, com validação nativa|
|`url`|website|perfil científico|Informação adicional, com validação nativa|
|`animals`|nomes dos animais associados|nomes dos animais de especialidade|Relação conceptual com Animalec|
|`active`|ativo/inativo|ativo/inativo|Estado do registo|

**Limitação consciente:** `animals` é texto livre, não corresponde a chaves estrangeiras nem garante consistência com o catálogo. A associação real exige extensão posterior da API e base de dados.

## Percursos funcionais

1. `/admin` → selecionar Sponsors ou Experts → listagem.
2. `+ ADICIONAR` → formulário HTML5 → guardar → regressar à listagem.
3. `VER` → consultar detalhe → voltar.
4. `EDITAR` → modificar informação → guardar.
5. `REMOVER` → confirmação → retirar da listagem.
6. Pesquisar na listagem; alternar entre Sponsors/Experts; regressar ao menu.
7. Recarregar a página e confirmar que os registos se mantêm no mesmo navegador.

## Semântica e desenho responsivo

* `<main>` indica a área de conteúdo principal; `<nav>` identifica a navegação administrativa; `<section>` agrupa funcionalidades; tabela com `<caption>`, `<thead>`, `<th scope="col">`; formulários com `<form>`, `<label>`, tipos `email`, `url`, `search`, `required`.
* Os protótipos usam componentes Vue que produzem HTML; mantêm a grelha BootstrapVue e utilizam `.table-responsive` para ecrãs pequenos.
* Os wireframes não usam identidade visual final; mockups aplicam cores coerentes com o cabeçalho e ações do Animalec.

## Plano de testes manuais (pendente de execução)

|Teste|Passos|Resultado esperado|
|-|-|-|
|T1|Abrir `/admin`|Apresenta seis módulos|
|T2|Selecionar Sponsors e Experts|Rotas e listagens corretas|
|T3|Criar registo válido|Registo surge na tabela|
|T4|Guardar formulário sem nome|Browser bloqueia submissão|
|T5|Introduzir email/URL inválidos|Validação HTML5 bloqueia submissão|
|T6|Abrir VER e EDITAR|Mostra os dados guardados|
|T7|Remover e cancelar confirmação|Registo permanece|
|T8|Remover e confirmar|Registo desaparece|
|T9|Recarregar|Registos persistem localmente|
|T10|Testar ecrã estreito (\~375px)|Menu reorganiza-se e listagem permite scroll horizontal|

## Terceiro artefacto: protótipos HTML5

Os protótipos são entregues expressamente em `prototipos/`, distintos dos wireframes e dos mockups. `index.html` é o menu, `sponsors.html` e `experts.html` são as páginas interativas HTML5 autónomas com listagens, pesquisa, detalhe, criação, edição e remoção. O JavaScript usa armazenamento local apenas como simulação. Os componentes Vue em `Front-end/src/views/prototipos/` representam a integração real das mesmas duas áreas no Back-office do Animalec.

## Inventário verificado dos desenhos

* `wireframes/sponsors/{desktop,mobile}.drawio`
* `wireframes/experts/{desktop,mobile}.drawio`
* `mockups/sponsors/{desktop,mobile}.drawio`
* `mockups/experts/{desktop,mobile}.drawio`



