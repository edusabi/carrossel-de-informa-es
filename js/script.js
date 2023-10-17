document.addEventListener('click', (e) =>{
    e.preventDefault()
})

let pessoas = [
    {id:"1",nome:"luciana", profissao:"Designer",texto:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" ,foto: "img/Mulher1.jpg"},
    {id:"2",nome:"Juliana", profissao:"Developer", texto:"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",foto:'img/Mulher2.jpg'},
    {id:"3", nome:"André", profissao:"Gerente 1",texto:"CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC" ,foto:'img/homem2.jpg'},
    {id:"4", nome:"Maria.C", profissao:"Gerente 2",texto:"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD" ,foto:'img/mulher3.png'},
    {id:"6", nome:"João.J", profissao:"Full stack",texto:"EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE" ,foto:'img/homem4.jpg'},
    { id:"5", nome:"Pedro.N", profissao:"Back End",texto:"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" ,foto:'img/homem3.jpg'}
]

let passa = document.querySelector('.passa')
let foto = document.querySelector('.foto')
let texto = document.querySelector('.texto')
let nome = document.querySelector('.nome')
let profissao = document.querySelector('.profissao')
let proximo = document.querySelector('.passar')
let voltar = document.querySelector('.voltar')

let percorrerItens = 0

window.addEventListener('DOMContentLoaded', ()=>{
mostrarPessoa()
    
})

function mostrarPessoa(){
    const item = pessoas[percorrerItens]
    foto.src = item.foto
    nome.innerHTML = item.nome
    profissao.innerHTML = item.profissao
    texto.innerHTML = item.texto
}

proximo.addEventListener('click', () =>{
    percorrerItens++
    if(percorrerItens > pessoas.length -1){
        percorrerItens = 0
    }
    mostrarPessoa()
})

voltar.addEventListener('click', () =>{
    percorrerItens--
    if(percorrerItens < 0){
        percorrerItens = pessoas.length -1
    }
    mostrarPessoa()
})

passa.addEventListener('click', ()=>{

    percorrerItens = Math.floor(Math.random() * pessoas.length)
    console.log(percorrerItens)
    mostrarPessoa()
})



