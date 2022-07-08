function somandoReduce (arr) {
    return arr.reduce(function(previous,current){
        return previous + current
    },2)
}
const array = [1,2,6];
console.log(somandoReduce(array));