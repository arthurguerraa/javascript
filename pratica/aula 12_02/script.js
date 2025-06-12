function descobrir(){
    let a = document.getElementById('ano');
    let caracteristica = document.getElementsByName('radcas');
    let res = document.getElementById('res');

    let ano = Number(a.value);
    let data = new Date();
    let anoAtual = data.getFullYear();

    if(ano == 0 || ano > anoAtual){
        alert('[ERRO] Digite novamente')
    }else{
        let idade = anoAtual - ano;

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.setAttribute('style', 'border-radius: 50%; display: block; margin: 10px auto;');
        img.setAttribute('width', '250');
        img.setAttribute('height', '250');

        let casa = ''
        if(caracteristica[0].checked){
            casa = 'Grifinória'
            img.setAttribute('src', 'imagens/grifinoria.jpg');
        }else if(caracteristica[1].checked){
            casa = 'Corvinal'
            img.setAttribute('src', 'imagens/corvinal.jpg');
        }else if(caracteristica[2].checked){
            casa = 'Lufa-Lufa'
            img.setAttribute('src', 'imagens/lufalufa.jpg');
        }else if(caracteristica[3].checked){
            casa = 'Sonserina'
            img.setAttribute('src', 'imagens/sonserina.jpg');
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Sua idade: ${idade}<br>Sua casa é a <strong>${casa}</strong>`;
        res.appendChild(img);
    }

    

}