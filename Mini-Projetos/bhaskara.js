// GNU General Public License v3.0
/* Sempre que aprendo uma nova linguagem de programação o primeiro teste que faço para verificar se estou compreendendo os operadores aritméticos, e a sintaxe como um todo, é desenvolver um pequeno
 * projeto do qual resolve equacoes de segundo grau dado valores de a, b e c */

console.log("Bem vindo ao Programa de Cálculo de Equações do Segundo Grau");

// Digite as constantes a serem calculadas ao longo da execucao
// Exemplo 6x + 11x - 35 = 0
//          a     b    c
const a = 6;
const b = 11;
const c = -35;

// Primeiro calculo a ser feito é determinar o valor de delta

let delta = Math.pow(b, 2) - 4 * (a * c);
// Verifica se a é igual a 0 
if (a == 0) {
    console.log("o Valor de A deve ser diferente de 0, caso igual equação é linear e não quadrática");
} else if (delta < 0) {
    console.log("Delta negativo impossivel continuar");
} else {
    // Apos determinado delta, iremos calcular x1 e x2 utilizando a Formula de Bhaskara
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Imprime o resultado de x1 e x2
    console.log("O valor de x1 é " + x1 + " e o valor de x2 é " + x2);
}
