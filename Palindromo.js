

function verificaPalindromo2 (string) {
    
    if (string === string.split('').reverse().join('')) {
    return true
    }
    return false
}
console.log(verificaPalindromo2('gato'));