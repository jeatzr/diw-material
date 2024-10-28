```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
</div>
```

Ejemplo de cómo dividiríamos los contenedores de esta parte de la página:

![Ejemplo grid](assets/img/ejemplo-grid.png)

```css
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233 171 88);
  border-radius: 5px;
  background-color: rgb(233 171 88 / 50%);
  padding: 1em;
  color: #d9480f;
}

.wrapper {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 2 / 6;
  grid-row: 1;
}
.two {
  grid-column: 7 / 12;
}
```
