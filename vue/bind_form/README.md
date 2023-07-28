```html

<input type="checkbox" value="Bonieky" v-model="nomes" /> Bonieky<br />

<input type="checkbox" value="Paulo" v-model="nomes" /> Paulo <br />

<input type="checkbox" value="Antônio" v-model="nomes" /> Antônio <br />

<p>Nomes: {{nomes}}</p>
```

```html
<input type="radio" name="grupo" value="sim" v-model="grupo" />

<input type="radio" name="grupo" value="não" v-model="grupo" />

<p>Grupo: {{grupo}}</p>
```
```html
<select v-model="opcao">
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<p>Opção: {{opcao}}</p>
```

```html
<select v-model="opcao">
  <option v-for="item in opcoes" v-bind:value="item.letra">{{item.nome}}</option>
</select>
```

```html
<input type="checkbox"  v-model="marcado" true-value="sim" false-value="não" />
<p>Marcado: {{marcado}}</p>
```

```html
<select v-model="selecionado">
  <option v-bind:value="{name:'Fulano',idade:10}">Opção A</option>
  <option v-bind:value="{name:'Ciclano',idade:30}">Opção B</option>
  <option v-bind:value="{name:'Beltrano',idade:40}">Opção C</option>
</select>
<p>Selecionado: {{selecionado.name}}</p>
```

```html
<input type="number" v-model.number="idade" />
<input type="text" v-model.trim="nome" />
```
