const fs=require('fs');const path=require('path');const root=path.join(__dirname,'..');
function read(p){return fs.readFileSync(path.join(root,p),'utf8')}
function check(b,msg){if(!b)throw new Error(msg);console.log('OK:',msg)}
const admin=read('src/views/Admin.vue'),router=read('src/router/index.js'),view=read('src/views/prototipos/EntityPrototype.vue');
for(const ent of ['Sponsors','Experts']){check(admin.includes('list'+ent),'Admin inclui '+ent);check(router.includes('name: "list'+ent+'"'),'Rota '+ent);check(fs.existsSync(path.join(root,'src/views/prototipos/'+ent+'.vue')),'Componente '+ent)}
for(const tag of ['<main','<nav','<section','<form','<label','<table','<caption','<th scope="col"'])check(view.includes(tag),'HTML semântico '+tag);
for(const action of ['create()','view(item)','edit(item)','remove(item)','save()'])check(view.includes(action),'Operação '+action);
console.log('Verificações estáticas concluídas.');
