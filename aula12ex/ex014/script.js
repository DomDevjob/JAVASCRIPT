function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente <strong>${hora}</strong> horas.`
    //var hora = 20
    if(hora >= 0 && hora < 12 ) {
        // bom dia
        img.src = 'fotomanha.png'
        document.body.style.backgroundImage = 'url(dia.gif)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundImage = 'url(passaro.gif)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'left'
    } else {
        // boa noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundImage = 'url(noite.gif)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center center'
    } 
}