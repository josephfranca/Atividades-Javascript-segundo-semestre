// Crie um script que calcule a hipotenusa de um triângulo. Para calcular a raiz quadrada você pode utilizar a função Math.sqrt (valor). Mostre o resultado no console.​
let cateto1 = Number(prompt("Digite o valor do primeiro cateto: "));
let cateto2 = Number(prompt("Digite o valor do segundo cateto: "));

let hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2)

alert("A hipotenusa é: " + hipotenusa)
