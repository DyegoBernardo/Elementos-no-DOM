import {arrayPostagens} from './lista_postagens.js';

const main = document.querySelector('main');

for (let i = 0; i < arrayPostagens.length; i++) {

   // Criar elemento
   const article = document.createElement('article');
   article.id ="post 1"
   console.log(article)
 
   // Popular/modificar elemento
   article.innerHTML = `
   <h3>${arrayPostagens[i].titulo}</h3>
   <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
   <div class="data">${arrayPostagens[i].data}</div>
   <p>${arrayPostagens[i].texto}</p>`
 
   // Adicionar o elemento na DOM
 
   main.appendChild(article);
  }

