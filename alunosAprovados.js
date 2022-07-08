const alunos = [
    {
        nome: 'Paulo',
        nota: 8,
    },
    {
        nome: 'Kitam',
        nota:4,
    },
    {
        nome:'avaiano',
        nota:6,
    },
];
function alunosAprovados (arr, media) {
    let aprovados =[];

    for (let i = 0; i < arr.length; i++){

        const {nota, nome} =arr[i];

        if (arr[i].nota>=media){
            aprovados.push(arr[i].nome);
        }
    }
    return aprovados
}
console.log(alunosAprovados (alunos,6));