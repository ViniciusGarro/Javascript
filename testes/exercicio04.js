//Criar função que exibe a quantidade de asteriscos

exibirAsteriscos(10);

function exibirAsteriscos(linhas){
 /*   let padrão = '';
    for(let linha = 1; linha <= linhas; linha++) {
        padrão += '*';
        console.log(padrão);
    } */
    for(let linha = 1; linha <= linhas; linha++){
        let padrão = '';
        for (let i = 0; i < linha; i++) {
            padrão += '*';
        }
        console.log(padrão);
    }
}
