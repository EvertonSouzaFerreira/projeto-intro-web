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
    nome: 'DIARIO DE UM BANANA',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Turophobia', 'Rodrick Rules', 'The Last Straw'],
    imagem: 'Diario_de_um_banana.jpg',
    categoria: 'infantil',
    link: 'https://pt.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid',
}

let book02 = {
    nome: 'PERCY JACKSON',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Lightning Thief', 'Sea of Monsters', "Titan's Curse"],
    imagem: 'Lightning Thief.jpg',
    categoria: 'fantasia',
    link: 'https://pt.wikipedia.org/wiki/Percy_Jackson_%26_the_Olympians'
}

let book03 = {
    nome: 'WORLD WARCRAFT',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Of Blood and Honor', 'Day of the dragon', 'Lord of the Clans'],
    imagem: 'Lord of the Clans.jpg',
    categoria: 'acao',
    link : 'https://en.wikipedia.org/wiki/World_of_Warcraft'
}


let book04 = {
    nome: 'THE LITTLE PRINCE',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['the little prince'],
    imagem: 'The Little Prince.jpg',
    categoria: 'ficcao',
    link: 'https://en.wikipedia.org/wiki/The_Little_Prince'
}

let book05 = {
    nome: 'RODRICK RULES',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Turophobia', 'Rodrick Rules', 'The Last Straw'],
    imagem: 'Rodrick Rules.jpg',
    categoria: 'infantil',
    link: 'https://pt.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid',
}

let book06 = {
    nome: 'SEA OF MONSTERS',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Lightning Thief', 'Sea of Monsters', "Titan's Curse"],
    imagem: 'Sea of Monsters.jpg',
    categoria: 'fantasia',
    link: 'https://pt.wikipedia.org/wiki/Percy_Jackson_%26_the_Olympians'
}
let book07 = {
    nome: 'THE SHATTERING',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Of Blood and Honor', 'Day of the dragon', 'Lord of the Clans'],
    imagem: 'World warcraft.jpg',
    categoria: 'acao',
    link : 'https://en.wikipedia.org/wiki/World_of_Warcraft'
}

let book08 = {
    nome: 'NARNIA 2',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['O Leão, a Feiticeira e o Guarda-Roupa', 'Príncipe Caspian', 'A Viagem do Peregrino'],
    imagem: 'The chronicles of narnia 2.jpg',
    categoria: 'ficcao',
    link: 'https://pt.wikipedia.org/wiki/The_Chronicles_of_Narnia'
}

let book09 = {
    nome: 'BIBLIA SAGRADA',
    preco: 15.99,
    promocao: false,
    disponivel: false,
    coletaneas: ['Almeida Revista e Corrigida 1969'],
    imagem: 'Biblia Sagrada.jpg',
    categoria: 'Religioso',
    link: 'https://pt.wikipedia.org/wiki/B%C3%ADblia',
}

//if para adcionar os itens no array
// book01.disponivel === true? bookStore.push(book01): alert(`O livro ${book01.nome} nao foi adicionado`)
// book02.disponivel === true? bookStore.push(book02): alert(`O livro ${book02.nome} nao foi adicionado`)
// book03.disponivel === true? bookStore.push(book03): alert(`O livro ${book03.nome} nao foi adicionado`)

//Adicionei mais um objeto no array
//book04.disponivel === true? bookStore.push(book04): alert(`O livro ${book04.nome} nao foi adicionado`)
bookStore.push(book01, book02, book03, book04, book05, book06, book07, book08, book09)

//Terceira semana
for (const item of bookStore) {
     console.log(item.coletaneas.join(', ')); 
    
}

//Refatoracao do array do objeto para string

let coletaneaString =''


    for (let item in book01.coletaneas){
       coletaneaString +=  `${book01.coletaneas[item]}, `
    }
   console.log(coletaneaString.slice(0, -2))
    


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
    return stringRelatorio.slice(0, -3)
}




//colocando os itens Disponiveis e em promocao aliatoriamente

   const desponivel = bookStore[Math.floor(Math.random() * bookStore.length)]
   bookStore.map(item => item === desponivel? item.disponivel = true: false)
   
   const promocao = bookStore[Math.floor(Math.random() * bookStore.length)]
   bookStore.map(item => item === promocao? item.promocao = true: false)
  

// 4. Crie uma função que recebe um array de objetos e uma string. 
// Esta função deve retornar um objeto, e o objeto retornado deve possuir 
// apenas os itens que tenham o nome/título igual à string passada como 
// parâmetro. Caso não exista um item, exiba um ALERT indicando 
// que nenhum item foi encontrado.

const handleBusca = (bookStr, nom) => {
    const itemIgual = nom? bookStr.filter((item) => item.nome.includes(nom)):alert('Digite um valor')  
    // let test = item.nome.toUpperCase()
   
    if(nom.length <= 5 && nom){
        alert('LIVRO NAO ENCONTRADO')
        
    }else{
        // console.log(itemIgual)
        // console.log(test)
        itemIgual.map(book => {
            list.innerHTML =` <section class="container-book grid">
        <ul class="containerImgLivro">
        <div class="content">
        <ul>
            <li>
                <div class="book">
                    <ul class="front">
                        <li>
                            <div class="frontcover">                   
                              <img src="./assets/imagens/${book.imagem}" alt="">        
                            </div>
                        </li>
                        
                        <li></li>
                    </ul>
                    <ul class="page">
                       
                        <li>
                            
                        </li>
                        <li class="page-book"> Coletaneas: ${book.coletaneas}</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="back">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
            
        </ul>
        
    </div>
        </ul>
        <div class="infCard flex">
            <ul>
                <li><a class="name-color" href='${book.link}'>${book.nome}</a></li>
                <li class="containerPrice">R$:${book.promocao? book.preco-5: book.preco} </li>
                <div class="containerPromocao flex">
                <li ${book.promocao? 'class="btn-color"': '' }>Promoção</li>
                    <li ${book.disponivel? 'class="disponovel-color"': ''}>${!book.disponivel?'Disponível' : 'Indisponível'} </li>
                    </div>
                
                <li></li>  
            </ul>
        </div>
    </section>`
        })
    }
   return itemIgual

}   

//Filtrar Livros

const list = document.querySelector(".containe-livros")
bookStore.map(book =>{
    function iniciarLivro(){ 
        list.innerHTML +=`<section class="container-book grid">
       
        <ul class="containerImgLivro">
        <div class="content">
        <ul>
            <li>
                <div class="book">
                    <ul class="front">
                        <li>
                            <div class="frontcover">                   
                              <img src="./assets/imagens/${book.imagem}" alt="">        
                            </div>
                        </li>
                        <li></li>
                    </ul>
                    <ul class="page">
                       
                        <li>
                            
                        </li>
                        <li class="page-book"> Coletaneas: ${book.coletaneas}</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="back">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </li>
            
        </ul>
        
    </div>
        </ul>
        <div class="infCard flex">
            <ul>
                <li><a class="name-color" href='${book.link}'>${book.nome}</a></li>
                <li class="containerPrice">R$:${book.promocao? book.preco-5: book.preco} </li>
                <div class="containerPromocao flex">
                    <li ${book.promocao? 'class="btn-color"': '' }>Promoção</li>
                    <li ${book.disponivel? 'class="disponovel-color"': ''}>${!book.disponivel?'Disponível' : 'Indisponível'} </li>
                </div>
                
                <li></li>  
            </ul>
        </div>
    </section>`  
    }

    iniciarLivro()
})


//Buscar Livros 
const searchBook = () => {
    const txtArea = document.querySelector('.txt-area') 
    
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', () =>{
        let txt = txtArea.value.toUpperCase()
        handleBusca(bookStore, txt)
        txtArea.value = ''
    })
    
}
searchBook()

//Munu toggle
const navBar = () => {
    const menuNavBar = document.querySelector('.menu-nav-bar');
    const menuHanburge = document.querySelector('.menu-hanburge')
    menuHanburge.addEventListener('click', () =>{
        const visibility = menuNavBar.getAttribute('data-visible')

    if (visibility === "false") {
        menuNavBar.setAttribute('data-visible', true)
        menuHanburge.setAttribute('aria-expanded', true)    
    }else{
        menuNavBar.setAttribute('data-visible', false)
        menuHanburge.setAttribute('aria-expanded', false)
       }
    
        // console.log(visibility);
    } )
}
navBar()

const handleBuscaBtns = (bookStr, nome) => {
    const itemIgual = bookStr.filter((book) => {
        if (book.categoria === nome) {
            list.innerHTML =` <section class="container-book grid">
            <ul class="containerImgLivro">
            <div class="content">
            <ul>
                <li>
                    <div class="book">
                        <ul class="front">
                            <li>
                                <div class="frontcover">                   
                                  <img src="./assets/imagens/${book.imagem}" alt="">        
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        <ul class="page">
                           
                            <li>
                                
                            </li>
                            <li class="page-book"> Coletaneas: ${book.coletaneas}</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class="back">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </li>
                
            </ul>
            
        </div>
            </ul>
            <div class="infCard flex">
                <ul>
                    <li ><a class="name-color" href="${book.link}">${book.nome}</a></li>
                    <li class="containerPrice">R$:${book.promocao? book.preco-5: book.preco} </li>
                    <div class="containerPromocao flex">
                    <li ${book.promocao? 'class="btn-color"': '' }>Promoção</li>
                    <li ${book.disponivel? 'class="disponovel-color"': ''}>${!book.disponivel?'Disponível' : 'Indisponível'} </li>
                    </div>
                    
                    <li></li>  
                </ul>
            </div>
        </section>`  
        }
    })  
        return itemIgual
    }
   

 


const btnsNavBar = () => {
    const btnHome = document.getElementById('btnHome')
    const btnAcao = document.getElementById('btnAcao')
    const btnFantasia = document.getElementById('btnFantasia')
    const btnFiccao = document.getElementById('btnFiccao')
    const btnInfantil = document.getElementById('btnInfantil')



    btnHome.addEventListener('click', () =>{
        iniciarLivro()
    })

    btnAcao.addEventListener('click', (e) =>{
        e.preventDefault()
        handleBuscaBtns(bookStore, e.target.name)
    })
    btnFantasia.addEventListener('click', (e) =>{
        e.preventDefault()
        handleBuscaBtns(bookStore, e.target.name)
    })
    btnFiccao.addEventListener('click', (e) =>{
        e.preventDefault()
        handleBuscaBtns(bookStore, e.target.name)
    })
    btnInfantil.addEventListener('click', (e) =>{
        e.preventDefault()
        handleBuscaBtns(bookStore, e.target.name)
    })

    
}

btnsNavBar()

