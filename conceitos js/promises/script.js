// Criação de promessa

const myPromise = new Promise((resolve, reject) =>{
    const nome = "Matheus";
    
    if(nome === "Matheus"){
        resolve('Usuário Matheus encontrado!');
    }else{
        reject('O usuário Matheus não foi encontrado!');
    }
});

myPromise.then((data) =>{
    console.log(data);
})


// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) =>{
    const nome = "Matheus";
    
    if(nome === "Matheus"){
        resolve('Usuário Matheus encontrado!');
    }else{
        reject('O usuário Matheus não foi encontrado!');
    }
});

myPromise2.then((data) =>{
    return data.toLowerCase();
})
.then((stringModificada) => {
    console.log(stringModificada)
})


// Retorno do catch

const myPromise3 = new Promise((resolve, reject) =>{
    const nome = "João";
    
    if(nome === "Matheus"){
        resolve('Usuário Matheus encontrado!');
    }else{
        reject('O usuário Matheus não foi encontrado!');
    }
});

myPromise3.then((data) =>{
    console.log(data);
}).catch((err) =>{
    console.log('Aconteceu um erro: ' + err)
})


// Resolver várias promessas com all
// Entrega quando todos forem resolvidas

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('P1 ok! Timeout')
    }, 2000);
})

const p2 = new Promise((resolve, reject) =>{
    resolve("P2 ok!");
})

const p3 = new Promise((resolve, reject) =>{
    resolve("P3 ok!");
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) =>{
    console.log(data);
})

console.log('Depois do all()');


// Resolver várias promessas com race
// Entrega na ordem de resolução das promessas

const p4 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('P1 ok! Timeout')
    }, 2000);
})

const p5 = new Promise((resolve, reject) =>{
    resolve("P2 ok!");
})

const p6 = new Promise((resolve, reject) =>{
    resolve("P3 ok!");
})

const resolveAllRace = Promise.all([p4, p5, p6]).then((data) =>{
    console.log(data);
})


// Fetch request na API do GitHub
// Fetch API

const userName = 'arthurguerraa';

fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vdn.github.v3+json'
    },
}).then((response) =>{
    console.log(typeof response);
    console.log(response);
    return response.json()
}).then((data) =>{
    console.log(`O nome do usuário é ${data.name}`)
}).catch((err) =>{
    console.log(`Houve algum erro: ${err}`)
})