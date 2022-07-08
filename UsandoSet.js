const array = [30,30,40,50,89,223,545,545];

function UsandoSet(arr) {
    const Myset = new Set(arr);

    return [...Myset]
}
console.log(UsandoSet(array));