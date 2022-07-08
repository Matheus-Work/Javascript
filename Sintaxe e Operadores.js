function principal (num1,num2) {
    if (!num1|| !num2) return 'Defina dois números';
    const primeirafrase = criaPrimeiraFrase (num1,num2);
    const segundafrase = criaSegundaFrase (num1,num2);
    return `${primeirafrase} ${segundafrase}`
}
function criaPrimeiraFrase (num1,num2) {
    let saoiguais ='são iguais';
    if (num1!==num2) {
        saoiguais='não são iguais';
    }
    return `Os numeros ${num1} e ${num2} ${saoiguais}.`
}
function criaSegundaFrase (num1,num2) {
    const soma = num1+num2;
    if(soma>10) {
        resultado10 = 'maior que 10'
    }
    else {
        resultado10 = 'menor que 10'
    }
    if (soma>20) {
        resultado20 = 'maior que 20'
    }
    else {
        resultado20 = 'menor que 20'
    }
    return `Sua soma é ${soma}, que é ${resultado10} e é ${resultado20}`
}

console.log(principal(10,23));
