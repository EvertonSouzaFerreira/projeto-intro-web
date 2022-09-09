//Primeira semana...

// const nomeLivro01 = 'Diario de um banana';
// const Livro01 = 16;
// const recomendaLivro01 = true;
// const nomeDasTresPrimeirasColecoes01 = ['Turophobia ', 'Rodrick Rules ', 'The Last Straw ']

// const nomeLivro02 = 'Percy Jackson e os Olimpianos'
// const Livro02 = 8;
// const recomendaLivro02 = true
// const nomeDasTresPrimeirasColecoes02 = ['Lightning Thief ', 'Sea of Monsters ', "Titan's Curse "]

// const nomeLivro03 = 'World of Warcraft';
// const Livro03 = 10;
// const recomendaLivro03 = true;
// const nomeDasTresPrimeirasColecoes03 = ['Of Blood and Honor ', 'Day of the dragon ', 'Lord of the Clans ']


// const mediaColecoes = (Livro01 + Livro02 + Livro03)/ 3;
// const verificarRecomendacoes = recomendaLivro01 && recomendaLivro02 && recomendaLivro03

// console.log(Math.round(mediaColecoes))
// console.log(verificarRecomendacoes)


// console.log(` Titulo: ${nomeLivro01.toLocaleUpperCase()}\n Coleções: ${Livro01 }\n Recomendado: ${recomendaLivro01 }\n Os tres primeiros Livros: ${nomeDasTresPrimeirasColecoes01 }`)



//segunda semana

const bookStore =[]

let book01 = {
    nome: 'Diario de um banana',
    livros: 16,
    promocao: true,
    coletaneas: ['Turophobia ', 'Rodrick Rules ', 'The Last Straw ']
}

let book02 = {
    nome: 'Percy Jackson e os Olimpianos',
    livros: 8,
    promocao: true,
    coletaneas: ['Lightning Thief ', 'Sea of Monsters ', "Titan's Curse "]
}

let book03 = {
    nome: 'World of Warcraft',
    livros: 10,
    promocao: true,
    coletaneas: ['Of Blood and Honor ', 'Day of the dragon ', 'Lord of the Clans ']
}

//if para adcionar os itens no array

book01.promocao === true? bookStore.push(book01): alert(`O livro ${book01.nome} nao foi adicionado`)
book02.promocao === true? bookStore.push(book02): alert(`O livro ${book02.nome} nao foi adicionado`)
book03.promocao === true? bookStore.push(book03): alert(`O livro ${book03.nome} nao foi adicionado`)

// bookStore.push(book01,book02,book03)

console.log(bookStore)

