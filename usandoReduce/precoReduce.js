function precoReduce(arr) {
    return arr.reduce(function(previous, current, index){
        console.log('rodada', index + 1);
        console.log({previous});
        console.log({current});
     return previous - current.preco
    },saldo)
        
}
const saldo = 100;
const listadeprecos = [{
    nome:'Detergente',
    preco:5,
},
{
    nome:'sabonete',
    preco:2,
},
{
    nome:'leite',
    preco:15,
},
];
console.log('sobrou: ',precoReduce(listadeprecos));
   
