//Ex1
let alunos = ['Artur','João', 'Jony', 'Kauan', 'Luisa', 'Matheus', 'Murilo', 'Nathan', 'Vini', 'Yuri'];
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
let tmi = 0;

