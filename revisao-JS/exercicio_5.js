let notas = [7.00, 10.00, 6.00];

let media = (notas[0]+notas[1]+notas[2])/notas.length;

console.log("A primeira nota do aluno é: " + notas[0]);
console.log("A segunda nota do aluno é: " + notas[1]);
console.log("A terceira nota do aluno é: " + notas[2]);
console.log("A média do aluno é: " + media);

if (media >= 7.00) {
    console.log("O Aluno está aprovado");
} else {
    console.log("O Aluno está reprovado");
}