//readline
const prompt = require('readline-sync');

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
let saldo = 2000
let msg = 'Seu saldo é de R$', saldo
