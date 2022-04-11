//creo array di stringhe
let first_array = [`grogu`, `MANDO`, `Luke`];

//crea secondo array formattando le stringhe in capitalize
const lower_array = first_array.map((word) => {
    return word.toLowerCase();
})

const upper_array = lower_array.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
})

console.log(upper_array);