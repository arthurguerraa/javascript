function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")

        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 &&  idade < 10){
                // Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 &&  idade < 10){
                // Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'foto-adulto-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }
}