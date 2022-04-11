//creo array composto da 10 automobili con delle caratteristiche
let cars = [
    {marca: `fiat`, modello: `500`, alimentazione: `benzina`},
    {marca: `fiat`, modello: `panda`, alimentazione: `benzina`},
    {marca: `fiat`, modello: `punto`, alimentazione: `metano`},
    {marca: `audi`, modello: `a4`, alimentazione: `diesel`},
    {marca: `pegeout`, modello: `208`, alimentazione: `elettrica`},
    {marca: `bugatti`, modello: `veyron`, alimentazione: `benzina`},
    {marca: `mercedes`, modello: `600`, alimentazione: `diesel`},
    {marca: `renault`, modello: `16`, alimentazione: `diesel`},
    {marca: `rover`, modello: `2000`, alimentazione: `benzina`},
    {marca: `fiat`, modello: `500 xl`, alimentazione: `elettrica`},
]

//lista delle auto con alimentazione benzina
let benzina = cars.filter((car)=>{
    if (car.alimentazione === `benzina`){

        return true;
    }

    return false;
})

console.log(benzina);

//lista delle auto con alimentazione diesel
let diesel = cars.filter((car)=>{
    if (car.alimentazione === `diesel`){

        return true;
    }

    return false;
})

console.log(diesel);

//lista delle auto con altri tipi di alimentazione
let other = cars.filter((car)=>{
    if (car.alimentazione !== `diesel` && car.alimentazione !== `benzina`){

        return true;
    }

    return false;
})

console.log(other);