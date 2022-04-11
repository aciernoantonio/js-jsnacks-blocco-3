//crea array di oggetti che rappresentano persone
let people = [
    {nome: `antonio`, cognome: `acierno`, età: 21},
    {nome: `guido`, cognome: `piton`, età: 15},
    {nome: `franco`, cognome: `stanco`, età: 35}
]

//crea un array inserendo ogni persona
let person = people.map((user) => {
    if (user.età >= 18){
        return `${user.nome} ${user.cognome} può guidare`;
    }

    return `${user.nome} ${user.cognome} non può guidare`

})

console.log(person);

