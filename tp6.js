let body = document.querySelector('body');
let text = document.querySelector('.text');
let time = document.querySelector('.time');

function horloge()
{
    const date = new Date();
    const dateAfter = new Date('2023,03,22');

    const spaceBetween = dateAfter - date ;
    // console.log(spaceBetween);

    const nbrJour = Math.floor( spaceBetween / (1000 * 60 * 60 * 24))
    // console.log(nbrJour);

    const nbrHours = Math.floor((spaceBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // console.log(nbrHours);

    const nbrmin = Math.floor((spaceBetween % (1000 * 60 * 60 )) / (1000 * 60))


    const nbrsec = Math.floor((spaceBetween % (1000 * 60)) / (1000))

    // console.log(nbrJour , nbrHours , nbrmin , nbrsec)

    time.innerText = `-${nbrJour} 0-${nbrHours} 0-${nbrmin} 0-${nbrsec}`
}

const repetition = setInterval(()=>
{
    
    horloge()

},1000);

