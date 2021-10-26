function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!!!')
        res.style.textAlign = 'center'
        res.style.background = 'blue'
        res.style.color = 'red'
    } else {
       res.innerHTML ='Contando: <br>'
       res.style.background = 'rgb(70, 142, 236'
       res.style.color = 'white'
       res.style.textAlign = 'center'
       res.style.textShadow = '1px 1px 3px rgb(239, 97, 46)'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0 ) {
           window.alert('Passo inválido!!! Considerando passo 1')
           p =  1
       }
       if (i < f) {
           // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c}  `
             }       
       } else {
           // contagem regressiva
           for( let c = i; c >= f; c -= p) {
               res.innerHTML += ` \u{1f449} ${c} `
           }
       }
       res.innerHTML += `\u{1f3c1}`
    }   
} 