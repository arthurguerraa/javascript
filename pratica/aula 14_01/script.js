function calcular(){
    let i = document.getElementById('inicio');
    let f = document.getElementById('final');
    let p = document.getElementById('passo');
    let res = document.getElementById('res');

    let inicio = Number(i.value);
    let final = Number(f.value);
    let passo = Number(p.value);

    if(inicio == 0 || final == 0 || passo == 0){
        alert('[ERRO] o início, final e passo não poder ser 0')
    }else{
        if(inicio > final){
            for(let i = inicio; i >= final; i -= passo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }else if(final > inicio){
            for(let i = inicio; i <= final; i += passo){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
    }
    res.innerHTML += `Consegui \u{1F3C1}`
}
