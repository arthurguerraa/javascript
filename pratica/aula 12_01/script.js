function personalizar(){
    let t = document.getElementById('time');
    let teste = document.getElementById('teste');
    let logo = document.getElementById('logo');


    const times = ['Palmeiras','Flamengo','RB Bragantino','Cruzeiro','Fluminense','Internacional','Bahia','Botafogo','Ceará','São Paulo', 'Vasco','Corinthians','Juventude','Mirassol','Fortaleza','Vitória','Atlético Mineiro','Grêmio','Santos','Sport'];

    const cores = ['#1E7F3A','#D00000','#FFFFFF','#0033A0','#7C2529','#E30613','#0046AE','#000000','#000000','#FF0000','#000000','#000000', '#006600','#FFD700','#0033A0','#D00000','#000000','#0099CC','#FFFFFF','#D00000'];

    const logos = ['imagens/palmeiras-logo.png','imagens/flamengo-logo.png','imagens/rb-bragantino-logo.png','imagens/cruzeiro-logo.png',
    'imagens/fluminense-logo.png','imagens/internacional-logo.png','imagens/bahia-logo.png','imagens/botafogo-logo.png','imagens/ceara-logo.png','imagens/sao-paulo-logo.png','imagens/vasco-logo.png','imagens/corinthians-logo.png','imagens/juventude-logo.png','imagens/mirassol-logo.png','imagens/fortaleza-logo.png','imagens/vitoria-logo.png','imagens/atletico-mg-logo.png','imagens/gremio-logo.png',
    'imagens/santos-logo.png','imagens/sport-logo.png'];
      

    let encontrado = false;

    for(let i = 0; i < times.length; i++){
        if(times[i].toLowerCase() == t.value.toLowerCase()){
            document.body.style.background = cores[i];
            logo.src = logos[i];
            encontrado = true;
            break;
        }
    }

    if(!encontrado){
        alert('Nenhum time encontrado, tente novamente');
    }
}

function limpar(){
    let t = document.getElementById('time');
    document.body.style.background = '#0554F2';
    t.value = '';
    document.getElementById('logo').src = 'imagens/cbf-logo.png';
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('time');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            personalizar();
        } else if (event.key === 'Escape') {
            limpar();
        }
    });
});