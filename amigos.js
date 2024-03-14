function calcularDivisores(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores;
 }
 function sonAmigos() {
    const num1 = parseInt(prompt("Ingrese el primer número: "));
    const num2 = parseInt(prompt("Ingrese el segundo número: "));
    const sumaDivisores1 = calcularDivisores(num1);
    if (sumaDivisores1 === num2) {
        const sumaDivisores2 = calcularDivisores(num2);
        if (sumaDivisores2 === num1) {
            alert(num1 + " y " + num2 + " son números amigos.");
            console.log(sumaDivisores1, sumaDivisores2, + " son números amigos.");
        } else {
            alert(num1 + " y " + num2 + " no son números amigos.");
            console.log(sumaDivisores1, sumaDivisores2, + " No son números amigos.");
        }
    } else {
        alert(num1 + " y " + num2 + " no son números amigos.");
        console.log(sumaDivisores1, sumaDivisores2, + " No son números amigos.");
    }
 }
 sonAmigos();

 