let alunos = ['Artur','João', 'Jony', 'Kauan', 'Luisa', 'Matheus', 'Murilo', 'Nathan', 'Vini', 'Yuri'];
let notas = [5, 6, 8, 4, 9, 3, 7, 10, 0, 6];
let soma = notas.reduce((acumulador, valorAtual)=> acumulador + valorAtual,0)
console.log(soma)