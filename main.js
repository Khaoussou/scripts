let ajout = document.getElementsByClassName(".ajout")
// ajout.addEventListener("click");

function affiche ()
{
    let box = document.createElement("div");
    box.className="box";
    // console.dir(Document);
    document.body.appendChild(box);
    let block = document.createElement("div")
    block.className = "block";
    box.appendChild(block);
    let ic = document.createElement("p");
    ic.className = "fa-solid fa-pen-to-square";
    block.appendChild(ic);
    let icone = document.createElement("p");
    icone.className = "fa-solid fa-trash-can";
    block.appendChild(icone);
    let text = document.createElement("textarea");
    text.className = "text";
    box.appendChild(text);    
    text.disabled = true ;
    ic.addEventListener("click", function() 
        {
            text.disabled = !text.disabled ;
        }
    )
    icone.addEventListener("click", function ()
        {
            box.remove();
        }
    )

// let block = document.querySelector(".block");
// block.desabled = true;
// block.addEventListener("click", function()
// {
//     block.desabled = !block.desabled;
// }
// )
}








// function getCheck()
// {
//     ran = ""
//     passWord = []
//     let resultat = []
//     if( selection[0].checked )
//     {
//         passWord = passWord.concat(UpperCase)
//         ran = Math.floor(Math.random() * UpperCase.length)
//         resultat.push(passWord[ran])
//         console.log(resultat)
//     }
//     if( selection[1].checked )
//     {
//         passWord = passWord.concat(lowerCase)
//         ran = Math.floor(Math.random() * lowerCase.length)
//         resultat.push(passWord[ran])
//         console.log(resultat)
//     }
//     if( selection[2].checked )
//     {
//         passWord = passWord.concat(numbers)
//         // ran = Math.floor(Math.random() * numbers.length)
//         // console.log(passWord[ran])
//     }
//     if( selection[3].checked )
//     {
//         passWord = passWord.concat(caracter)
//     }
//     return resultat
// // console.log(passWord)
// // console.log(i)
// }
