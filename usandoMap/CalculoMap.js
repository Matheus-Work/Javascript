const maca = {
    value:3,
};
const laranja = {
    value:5,
};
function MapcomThis (arr, ThisArg){
    return arr.map(function(itens) {
        return itens * this.value
    }, ThisArg)
}
const nums = [1,2]
console.log('maça é',MapcomThis(nums,maca));
console.log('laranja é',MapcomThis(nums,laranja));