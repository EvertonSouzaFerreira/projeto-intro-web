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
    nome: 'diario de um banana',
   
    livros: 16,
    promocao: true,
    coletaneas: ['Turophobia', 'Rodrick Rules', 'The Last Straw']
}

let book02 = {
    nome: 'percy Jackson',
    
    livros: 8,
    promocao: true,
    coletaneas: ['Lightning Thief', 'Sea of Monsters', "Titan's Curse"]
}

let book03 = {
    nome: 'world warcraft',
    
    livros: 10,
    promocao: true,
    coletaneas: ['Of Blood and Honor', 'Day of the dragon', 'Lord of the Clans']
}


let book04 = {
    nome: 'nome livro',
    
    livros: 1,
    promocao: true,
    coletaneas: ['livro 1', 'livro 2', 'livro 3']
}

//if para adcionar os itens no array
book01.promocao === true? bookStore.push(book01): alert(`O livro ${book01.nome} nao foi adicionado`)
book02.promocao === true? bookStore.push(book02): alert(`O livro ${book02.nome} nao foi adicionado`)
book03.promocao === true? bookStore.push(book03): alert(`O livro ${book03.nome} nao foi adicionado`)

//Adicionei mais um objeto no array
book04.promocao === true? bookStore.push(book04): alert(`O livro ${book04.nome} nao foi adicionado`)


//Terceira semana

let resut = bookStore.map((item) =>{
    return item.coletaneas = item.coletaneas+','  
})

//console.log(resut)


//Refatoracao do array do objeto para string

let coletaneaString =''

for (let string in bookStore) {
    coletaneaString = `${bookStore[string].coletaneas} `
    bookStore[string].coletaneas =  coletaneaString
    console.log(coletaneaString)
}

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. 
// Ou seja, você não deve mais imprimir individualmente cada item do relatório. 
// Cada item deve ser exibido a partir de uma iteração do laço. Para testar, 
// adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for ( let book in bookStore) {
    const item = bookStore[book]
     console.log(item)
    
}

// 3. Crie uma função que receba como parâmetro um objeto, 
// e devolva a string do relatório com os dados do objeto.

const handleString = (book) => {
    let stringRelatorio = ''
    for (item in book) {
        stringRelatorio += `${book[item]} `
    }
    return stringRelatorio
}

console.log(handleString(book02))



// 4. Crie uma função que recebe um array de objetos e uma string. 
// Esta função deve retornar um objeto, e o objeto retornado deve possuir 
// apenas os itens que tenham o nome/título igual à string passada como 
// parâmetro. Caso não exista um item, exiba um ALERT indicando 
// que nenhum item foi encontrado.

let nomeString = prompt('Digite o nome do livro').toLowerCase().trim()


const handleBusca = (bookStr, nom) => {
    const itemIgual = bookStr.filter((item) => item.nome === nom)   
    
    if(itemIgual.length === 0){
        alert('test')
    }else{
        console.log(itemIgual)
    }
   return itemIgual

}   

handleBusca(bookStore,nomeString)

