class contaBancaria { // Criei a classe contaBancaria
    constructor(agencia, numero, tipo, saldo) { //São os parâmetros da contaBancaria
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo= 0;

    }
    get saldo() {//construindo o get e o set de saldo (por isso o underline)
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo=valor;
    }

    sacar(valor) { //Esse é um método dentro da contaBancaria
        if (valor > this._saldo){
            return "operação Negada"
        }
        this._saldo = this._saldo - valor;
        return this._saldo
    }
    depositar(valor) {//Esse é um método dentro da contaBancaria
        this._saldo = this._saldo + valor;
        return this._saldo
    }

}
class contaCorrente extends contaBancaria { //Criei uma classe filha chamada contaCorrente que herda os mesmos parametros, e possua o parametro cartao de credito
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = ' corrente'; //O tipo ja coloquei conta corrente como padrão
        this._cartaoCredito = cartaoCredito;
    }
    sacar(valor){ //Você tem um limite de 1000 reais
        if(this._saldo - valor >= -1000) {
            this._saldo = this._saldo - valor;
            return this._saldo
     
        }
        return "Saldo Insuficiente"

    }
    get cartaoCredito(){ //Criei o get e o set de cartaoCredito
        return this._cartaoCredito
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}
class contaPoupanca extends contaBancaria {//Criei uma classe filha que herda todos os parametros da contaBancaria
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo ='Poupança'
    }
}
class contaUniversitaria extends contaBancaria{ //Criei uma classe filha que herda todos os parametros da contaBancara
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo ='Universitária'
    }
    sacar(valor) {
        if(valor > 500){ // Se o valor for maior que 500 reias, irá aoarecer uma mensagem dizendo Operação Negada
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;
        return this._saldo
    }
}