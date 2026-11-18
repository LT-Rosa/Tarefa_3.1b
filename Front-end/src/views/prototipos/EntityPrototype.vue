<template>
  <main class="page-section" :aria-label="'Gestão de ' + plural">
    <b-container>
      <HeaderPage :title="'Gestão de ' + plural" />
      <nav class="mb-4" aria-label="Navegação administrativa">
        <router-link :to="{name:'admin'}" class="btn btn-outline-info mr-2 mb-2">MENU PRINCIPAL</router-link>
        <router-link :to="{name:otherRoute}" class="btn btn-outline-secondary mb-2">{{otherLabel}}</router-link>
      </nav>
      <b-alert show variant="info">Protótipo académico — os registos ficam apenas neste navegador (localStorage). Não utiliza a API do Animalec.</b-alert>
      <section v-if="mode === 'list'" :aria-label="'Lista de ' + plural">
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <button class="btn btn-outline-success mb-2" type="button" @click="create">+ ADICIONAR {{ singular.toUpperCase() }}</button>
          <label class="mb-2">Pesquisar <input v-model.trim="query" type="search" class="form-control" :aria-label="'Pesquisar ' + plural" /></label>
        </div>
        <div class="table-responsive">
          <table class="table table-striped">
            <caption>Listagem de {{plural}} registados neste protótipo</caption>
            <thead class="thead-dark"><tr><th scope="col">NOME</th><th scope="col">{{subjectHeader}}</th><th scope="col">ESTADO</th><th scope="col">AÇÕES</th></tr></thead>
            <tbody>
              <tr v-for="item in filtered" :key="item.id">
                <td>{{item.name}}</td><td>{{item.subject}}</td><td>{{item.active ? 'Ativo' : 'Inativo'}}</td>
                <td class="actions">
                  <button class="btn btn-sm btn-outline-info mr-1 mb-1" type="button" @click="view(item)">VER</button>
                  <button class="btn btn-sm btn-outline-success mr-1 mb-1" type="button" @click="edit(item)">EDITAR</button>
                  <button class="btn btn-sm btn-outline-danger mb-1" type="button" @click="remove(item)">REMOVER</button>
                </td>
              </tr>
              <tr v-if="!filtered.length"><td colspan="4">Não foram encontrados registos.</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section v-else-if="mode === 'view'" aria-label="Detalhe do registo">
        <h3>{{current.name}}</h3>
        <dl class="row">
          <dt class="col-sm-4">{{subjectHeader}}</dt><dd class="col-sm-8">{{current.subject}}</dd>
          <dt class="col-sm-4">{{descriptionHeader}}</dt><dd class="col-sm-8">{{current.description}}</dd>
          <dt class="col-sm-4">Contacto (email)</dt><dd class="col-sm-8">{{current.email || '—'}}</dd>
          <dt class="col-sm-4">{{urlHeader}}</dt><dd class="col-sm-8"><a v-if="current.url" :href="current.url" target="_blank" rel="noopener noreferrer">{{current.url}}</a><span v-else>—</span></dd>
          <dt class="col-sm-4">Animais associados</dt><dd class="col-sm-8">{{current.animals || '—'}}</dd>
          <dt class="col-sm-4">Estado</dt><dd class="col-sm-8">{{current.active ? 'Ativo' : 'Inativo'}}</dd>
        </dl>
        <button class="btn btn-outline-success mr-2" type="button" @click="edit(current)">EDITAR</button>
        <button class="btn btn-outline-secondary" type="button" @click="cancel">VOLTAR</button>
      </section>
      <section v-else :aria-label="mode === 'create' ? 'Adicionar registo' : 'Editar registo'">
        <h3>{{mode === 'create' ? 'Adicionar ' : 'Editar '}}{{singular}}</h3>
        <form @submit.prevent="save">
          <div class="form-group"><label for="newName">Nome <span aria-hidden="true">*</span></label><input id="newName" v-model.trim="form.name" class="form-control" maxlength="100" required /></div>
          <div class="form-group"><label for="newSubject">{{subjectHeader}} <span aria-hidden="true">*</span></label><input id="newSubject" v-model.trim="form.subject" class="form-control" maxlength="100" required /></div>
          <div class="form-group"><label for="newDescription">{{descriptionHeader}}</label><textarea id="newDescription" v-model.trim="form.description" class="form-control" rows="3" maxlength="600"></textarea></div>
          <div class="form-group"><label for="newEmail">Email de contacto</label><input id="newEmail" v-model.trim="form.email" type="email" class="form-control" maxlength="150" /></div>
          <div class="form-group"><label for="newUrl">{{urlHeader}}</label><input id="newUrl" v-model.trim="form.url" type="url" class="form-control" placeholder="https://" /></div>
          <div class="form-group"><label for="newAnimals">Animais associados</label><input id="newAnimals" v-model.trim="form.animals" class="form-control" placeholder="Ex.: Tigre, Pardal" aria-describedby="animalsNote" /><small id="animalsNote" class="form-text text-muted">Protótipo: nomes separados por vírgulas; sem associação real à API.</small></div>
          <div class="form-check mb-3"><input id="newActive" v-model="form.active" type="checkbox" class="form-check-input" /><label for="newActive" class="form-check-label">Registo ativo</label></div>
          <button class="btn btn-outline-success mr-2" type="submit">GUARDAR</button><button class="btn btn-outline-danger" type="button" @click="cancel">CANCELAR</button>
        </form>
      </section>
      <p v-if="notice" role="status" class="alert alert-success mt-3">{{notice}}</p>
    </b-container>
  </main>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue";
const emptyForm = () => ({id:null,name:"",subject:"",description:"",email:"",url:"",animals:"",active:true});
export default {
  name: "EntityPrototype",
  components: {HeaderPage},
  props: { entity: {type:String,required:true} },
  data() { return {items:[],mode:"list",query:"",form:emptyForm(),current:null,notice:""}; },
  computed: {
    isSponsor() { return this.entity === 'sponsors'; },
    singular() { return this.isSponsor ? 'Sponsor' : 'Expert'; },
    plural() { return this.isSponsor ? 'Sponsors' : 'Experts'; },
    otherLabel() { return this.isSponsor ? 'EXPERTS' : 'SPONSORS'; },
    otherRoute() { return this.isSponsor ? 'listExperts' : 'listSponsors'; },
    subjectHeader() { return this.isSponsor ? 'Tipo de patrocinador' : 'Especialidade científica'; },
    descriptionHeader() { return this.isSponsor ? 'Descrição do patrocínio' : 'Instituição e biografia'; },
    urlHeader() { return this.isSponsor ? 'Website' : 'Perfil científico (URL)'; },
    storageKey() { return 'animalec-tarefa-3.1b-' + this.entity; },
    filtered() { const q=this.query.toLocaleLowerCase('pt'); return this.items.filter(i=>(i.name+' '+i.subject+' '+i.animals).toLocaleLowerCase('pt').includes(q)); }
  },
  created() { this.load(); },
  methods: {
    load() { try { const value=JSON.parse(localStorage.getItem(this.storageKey)); this.items=Array.isArray(value)?value:[]; } catch(e) {this.items=[];} },
    persist() { try {localStorage.setItem(this.storageKey,JSON.stringify(this.items));return true;} catch(e) {this.notice='O navegador não permitiu guardar os dados localmente.';return false;} },
    create() {this.form=emptyForm();this.mode='create';this.notice='';},
    view(item) {this.current={...item};this.mode='view';this.notice='';},
    edit(item) {this.form={...item};this.mode='edit';this.notice='';},
    cancel() {this.mode='list';this.notice='';},
    save() {
      const item={...this.form};
      if(this.mode==='create') {item.id=Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9);this.items.push(item);}
      else {const idx=this.items.findIndex(i=>i.id===item.id);if(idx<0)return;this.$set(this.items,idx,item);}
      const saved=this.persist();this.mode='list';if(saved)this.notice='Registo guardado neste navegador.';
    },
    remove(item) {if(!window.confirm('Remover '+item.name+' do protótipo?'))return;this.items=this.items.filter(i=>i.id!==item.id);const saved=this.persist();if(saved)this.notice='Registo removido.';}
  }
};
</script>
<style scoped>
.actions {min-width:190px}
.table caption {caption-side:top;text-align:left}
@media(max-width:575px){.page-section{padding-top:1rem}.actions{min-width:150px}}
</style>
