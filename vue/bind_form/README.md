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
<p>Opção: {{opcao}}
```

```html
<select v-model="opcao">
  <option v-for="item in opcoes" v-bind:value="item.letra">{{item.nome}}</option>
</select>
