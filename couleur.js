

// let bout = document.querySelector('.bout');
// let body = document.querySelector('body');
// // coul.addEventListener('input',()=>
// // {
    
//     // })
// function color()
// {
//     let coul = document.querySelector(".coul") ;
//     body.style.backgroundColor = coul.value ; 
// }
// color()


const ul = document.getElementById('auteur');
const url = 'https://randomuser.me/api/?results=10';

function createNode(element)
{
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el);
}

fetch(url)
    .then((resp) => console.log(resp.json()))
    .then(function (data)
    {
        let auteur = data.results;
    }
    )