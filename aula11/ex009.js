var pais = 'Brasil'
console.log(`vivendo em ${pais}`)
if(pais != 'Brasil') {
    console.log("Você é estrangeiro!!!")
} else {
    console.log(" Você é Brasileiro!")
}




var idade = '31'
console.log(`Eu tenho ${idade}` )
if(idade >= '32') {
    console.log("vc é de maior")
} else {
    console.log("vc é de menor")
}


function buscar() {
    var pais = window.document.querySelector('input#textpais')
    var res = window.document.querySelector('div#res')
    var pais2 = String(pais.value)
    res.innerHTML = `<p> Seu país de origem é o(a) <strong>${pais2}</strong> </p>`
    if (pais2 != 'Brasil') {
        res.innerHTML += `<p> Voçe é <strong>Estrangeiro</strong> </p>`
    } else {
        res.innerHTML += `<p> Voce é <strong>brasileiro(a)</strong> </p>`
    }
}