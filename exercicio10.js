// Crie um script que calcule as raízes de uma equação de 2º grau (ax^2 +bx + c). Para calcular a raiz você pode utilizar a função Math.sqrt (valor). Supor que as raízes são reais. Mostre o resultado no console.
let a = Number(prompt("Digite o valor de a:"));
let b = Number(prompt("Digite o valor de b:"));
let c = Number(prompt("Digite o valor de c:"));

let delta = b * b - 4 * a * c;

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log("x1 =", x1);
console.log("x2 =", x2);