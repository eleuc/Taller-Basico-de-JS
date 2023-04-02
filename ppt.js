let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: '196'
}
function readObject (object) {
    for (let key in object) {
        console.log(object[key]);
    }
}
readObject(myCar)


//---------

let myArray = ['Manchester', 'Londdon', 'Barsa', 'nose' ];

function readArray(array){
    for(let i=0; i< array.length; i++) {
        console.log(`${i+1} ${array[i]}`)
    }
}
readArray(myArray); 