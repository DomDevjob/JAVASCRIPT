function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'menino/homem'
           if(idade >=0 && idade < 11) {
               // Criança
               img.setAttribute('src', 'homembebe.png' )
           } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'homemjovem.png')
           } else if (idade < 50) {
               // adulto
               img.setAttribute('src','homemadulto.png')
           } else {
               // idoso
               img.setAttribute('src','homemvelho.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'menina/mulher'
           if(idade >=0 && idade <11) {
               // criança

               img.setAttribute('src', 'mulherbebe.png')
           } else if (idade < 21) {
               // jovem
               img.setAttribute('src','mulherjovem.png')
           } else if (idade < 50) {
               // adulto
               img.setAttribute('src', 'mulheradulta.png')
           } else {
               // idoso
               img.setAttribute('src', 'mulhervelha.png')
           }
       }
       res.style.textAlign = 'center'
       res.style.margin = '20px'
       res.innerHTML =  ` <br>Resultado:  ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }


}
