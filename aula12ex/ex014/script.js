function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()
    var hora = 10
    msg.innerHTML = 'Agora são ' + hora + ' horas.'
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#D9AD5B'
    }else if(hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#B9846F'
    }else{
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#5F4C73'
    }
}


