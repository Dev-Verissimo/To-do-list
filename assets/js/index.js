( () => { let input = document.getElementsByClassName("form-input")[0]
let buttonForm = document.getElementsByClassName("form-button")[0]

let list = document.getElementsByClassName("list")[0]



buttonForm.addEventListener('click', (evt) => {
    evt.preventDefault()
    const valor = input.value
    
   let li = makeLi(valor)
   list.appendChild(li)
   
    
})

const botaoConcluir = () =>{

}

const botao = (funcao, text, li, p) => {
    let botao = document.createElement('button')

    if (funcao == 'concluir') {
        botao.innerHTML = 'concluir'
        botao.classList.add('check-button')
        botao.addEventListener('click', () => {
            p.classList.toggle('done')
    })
    return botao
    }else{
        botao.innerHTML = 'deletar'
        botao.classList.add('delete-button')
        botao.addEventListener('click', () => {
        li.remove()
    })
    return botao
    }

}

const makeLi = (text) => {
    const li = document.createElement('li')
    li.classList.add('task')
    const p = document.createElement("p")

    p.textContent = text
    li.appendChild(p)
  

    let bota = botao('concluir', text, li,p)
    li.appendChild(bota)

    let botao2 = botao('remove', text, li,p)
    li.appendChild(botao2)

    return li
}

})()

