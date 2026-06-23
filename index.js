//readline
const readline = require('readline-sync');

//Ex1
let alunos = ['Artur','Joseph', 'Jony', 'Kauan', 'Luisa', 'Matheus', 'Murilo', 'Nathan', 'Vini', 'Yuri'];
let notas = [5, 6, 8, 4, 9, 3, 7, 10, 0, 6];

//média
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];};
// o i só será usado soment ali dentro e o i++ soma os valoras notas[i] puxa eles
let media = soma / alunos.length;
/* console.log(media); */
//max
let maior = Math.max(...notas);
/* console.log(maior); */

//min
let min = Math.min(...notas)
/* console.log(min) */

let mSete = notas.filter(notas => notas >= 7)
//console.log(mSete)

//Ex2
let tempi = 12;
let tempf = 40;


/* //Ex3
let vendas = [150000, 128000, 569000, 222222, 177777, 300900, 450008, 340000, 190000, 268000, 309000, 200001];
s = 0;
for (let i = 0; i < vendas.length; i++) {
    s += vendas[i];};
medias = s / vendas.lengh;
mx = Math.max(...vendas);
mn = Math.min(...vendas);
console.log(s)   
console.log(media)   
console.log(mx)   
console.log(mn)
 */

//Ex4
/* let saldo = 2000
console.log(`Seu saldo é de R$${saldo}`);
do{
    let retirada = Number(readline.question('Digite quanto deseja retirar em R$'))
    if (retirada <= saldo){
        let saldoAtual = saldo -= retirada
        console.log(`O saldo atual é de R$${saldoAtual}`)
        break
    }
    else{
        console.log('Saldo insuficiente, escolha um número menor ou igual ao saldo');
    };
}   while(true);
 */
//Ex5
/* let np = ['Chetos']
let nq = ['15']
do{
    let fim = readline.question('Digite 4 caso não queira adicionar mais mais nada')
    if (fim = 4){
        console.log(`Todos os produtos novos e sua quantidade foram adicionados`)
        console.log(np)
        console.log(nq)
        break
    }
    else{
        np.push(readline.question('Adicione o nome o proximo produto'));
        nq.push(readline.question('Adicione a quantidade do produto'));
    };
 } while(true); */

 let totalProdutos = 0;
let maiorNome = "";
let maiorQtd = -1;
let somaItens = 0;

while (true) {
    let nome = prompt.question("Nome do produto: ");
    if (nome.toUpperCase() === "FIM") break;

    let qtd = parseInt(prompt.question("Quantidade: "));

    totalProdutos++;
    somaItens += qtd;

    if (qtd > maiorQtd) {
        maiorQtd = qtd;
        maiorNome = nome;
    }
}

console.log("\n--- RESULTADO ---");
console.log("Total de produtos cadastrados:", totalProdutos);
console.log("Produto com maior quantidade:", maiorNome);
console.log("Soma total de itens:", somaItens);