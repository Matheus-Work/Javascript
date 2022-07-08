function MultiplicaMap (arr) {
    return arr.map(function(item) {
        return item*2
    })
}
const array = [1,2,3,4,5,6,7,8,9];
console.log(MultiplicaMap(array));