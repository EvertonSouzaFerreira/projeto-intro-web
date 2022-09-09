//Primeira semana...

const nomeLivro01 = 'Diario de um banana';
const Livro01 = 16;
const recomendaLivro01 = true;
const nomeDasTresPrimeirasColecoes01 = ['Turophobia ', 'Rodrick Rules ', 'The Last Straw ']

const nomeLivro02 = 'Percy Jackson e os Olimpianos'
const Livro02 = 8;
const recomendaLivro02 = true
const nomeDasTresPrimeirasColecoes02 = ['Lightning Thief ', 'Sea of Monsters ', "Titan's Curse "]

const nomeLivro03 = 'World of Warcraft';
const Livro03 = 10;
const recomendaLivro03 = true;
const nomeDasTresPrimeirasColecoes03 = ['Of Blood and Honor ', 'Day of the dragon ', 'Lord of the Clans ']


const mediaColecoes = (Livro01 + Livro02 + Livro03)/ 3;
const verificarRecomendacoes = recomendaLivro01 && recomendaLivro02 && recomendaLivro03

console.log(Math.round(mediaColecoes))
console.log(verificarRecomendacoes)


console.log(` Titulo: ${nomeLivro01.toLocaleUpperCase()}\n Coleções: ${Livro01 }\n Recomendado: ${recomendaLivro01 }\n Os tres primeiros Livros: ${nomeDasTresPrimeirasColecoes01 }`)
