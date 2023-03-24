
let bout = document.querySelector('.bout');
let saisi = document.querySelector('input[type="text"]')
let taille = document.querySelector('.taille')
let body = document.querySelector('.body');
// console.log(taille);
let blocSaisi = document.querySelector('.blocSaisie')
let lenght = document.querySelector('.lenght')
let blocChoix = document.querySelector('.blocChoix')
let Bloc = document.querySelector('.Bloc')
let icone = document.querySelector('.blocSaisie i')
// console.log(taille)
let selection = document.querySelectorAll("input[type='checkbox']");
// console.log(selection)
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upppercase = lowerCase.toUpperCase()
console.log(upppercase);
const numbers = [0,1,2,3,4,5,6,7,8,9];
const caracter = ['&','~','{','[','(','@','`','%','£','$','§','µ','+','=','}']
let passWord = []
let ran 









function notif(elements, attributs, contenus)
{
    const element = document.createElement(elements);
    for (const cle in attributs)
    {
        element.setAttribute(cle,attributs[cle])
    }
    element.textContent = contenus;
    body.appendChild(element);
    setTimeout(()=> 
    {
        body.removeChild(element);

    },5000 )
    return element;
}

function affichIcone()
{
    icone.style.display='block'
    navigator.clipboard.writeText(saisi.value)
    icone.addEventListener("click",()=>
    {
        const notif4 = notif('div',{class:'notif4'},'Votre mot de passe à été bien copier');
    })
}

function longPass()
{
    
    if( ( isNaN(taille.value) || taille.value < 2 || taille.value > 20) )
    {
        const notif1 = notif('div',{class:'notif1'},'Veuillez donner un bon nombre svp');

        // alert("Veuillez donner un bon nombre svp")
    }    
    else 
    {
        if(!selectElement())
        {
            const notif2 = notif('div',{class:'notif2'},'Veuillez selectionner au moins un critère');
        }

        // alert('Veulliez selectionner au moins un critere')
        else
        {
            if(numbCheck() > taille.value)
            {
                const notif3 = notif('div',{class:'notif3'},'Verifier le nombre de critère');
            }
            // alert('Verifier le nombre de critere')
            else

                getPassWord()     
                affichIcone()
        }
    }
}
function selectElement()
{
    let isChecked = false
    for (const i of selection ) 
    {
        isChecked = isChecked || i.checked
    }
    return isChecked ;
}
function numbCheck()
{
    let numbElementCheck = 0
        for (const i of selection) 
        {
            if(i.checked)
            numbElementCheck++
        }
    // console.log(numbElementCheck)
    return numbElementCheck
}
// function checkPassword(selections, critère, critèreLenght)
// {
//     let resultat = "";
//     if(selections)
//     {
//         ran = []
//         passWord = []
//         passWord = passWord.concat(critère);
//         ran = Math.floor(Math.random() * critèreLenght);
//         resultat += passWord[ran];
//     }
    
//     return resultat;
// }
function getPassWord()
{
    // getCheck()
    ran = []         
    passWord = []
    let resultat = "";
    let i = 0;
    while( i < taille.value )
    {
        if( selection[0].checked && i < taille.value)
        {
            passWord = [];
            passWord = passWord.push(upppercase);
            resultat += passWord[ran];
            console.log("up:"+resultat)
            i++;
            ran = Math.floor(Math.random() * upppercase.length);
            // console.log(resultat)
        }

        if( selection[1].checked && i < taille.value)
        {
            passWord = [];
            // console.log("low:"+passWord)
            ran = Math.floor(Math.random() * lowerCase.length);
            resultat += passWord[ran];
            i++;
            // console.log("lo:"+passWord[ran])
            // console.log(resultat)
        }

        if( selection[2].checked && i < taille.value)
        {
            passWord = [];
            passWord = passWord.concat(numbers);
            ran = Math.floor(Math.random() * numbers.length);
            resultat += passWord[ran];
            i++;
            // console.log("nu:"+passWord[ran])
            // console.log(resultat)
        }
        if( selection[3].checked && i < taille.value)
        {
            passWord = [];
            passWord = passWord.concat(caracter);
            ran = Math.floor(Math.random() * caracter.length);
            resultat += passWord[ran];
            i++;
            // console.log("cr:"+passWord[ran])
            // console.log(resultat)
        }
    }
    saisi.value = resultat
    return resultat
}

bout.addEventListener("click",longPass);
