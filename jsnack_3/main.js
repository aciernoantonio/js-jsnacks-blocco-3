let animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

let mammiferi = animals.filter((animal) => {
    if (animal.classe === `mammiferi`) {
        return true;
    }
    
    return false;
})

console.log(mammiferi);