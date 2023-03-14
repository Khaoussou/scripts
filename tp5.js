let bout = document.querySelector('.bout')
let score = 0;
let Bloc = document.querySelector('.Bloc')
let pos = 0

//  console.log(check);
let tabQuestions = 
[
    {
        questions : 'Quel est le meilleur Langage de Programmation en 2023 ?',
        answers : ["Java","C","Python","JavaScript"],
        correctAnswer :'3'
    },
    
    {
        questions : 'Pourquoi ce langage est le meilleur de nos jour',
        answers : ["Sa simpliciter","Ses fonctionnalités"],
        correctAnswer :'0'
    },
  
    {
        questions : 'Vous etes dans quel module à ODC',
        answers : ["Dev-web-mobile","Ref-dig","AWS","Dev-Data"],
        correctAnswer :'1'
    },
   
    {
        questions : 'Qui utilise le plus ce langage',
        answers : ["Back-end","Front-end","Web-design","Les trois"],
        correctAnswer :'2'
    }
]

Bloc.appendChild(blocQuestions()[0])
// function affichQuestions()
// {
//     for (let i = 1 ; i < blocQuestions().length ; i++) 
//     {
//         Bloc.innerHTML = (blocQuestions()[i]);
//         console.log(Bloc.innerHTML = (blocQuestions()[i]));
//     }
// }
// console.log(tabQuestions[0]);

function selectElement(elementCheck)
{
    let isChecked = false
    for (const i of elementCheck ) 
    {
        isChecked = isChecked || i.checked
    }
    return isChecked ;
}
function numbCheck()
{
    let numbElementCheck = 0
        for (const i of checkbox) 
        {
            if(i.checked)
            numbElementCheck++
        }
    // console.log(numbElementCheck)
    return numbElementCheck
}
function verification()
{
    if(!selectElement())
    alert('Veuillez choisir une reponse');
    else
    {
        blocQuestions()
    }
}
function createElement(elements , attributs , elementContent)
{
    const element = document.createElement(elements);
    for (const cle in attributs ) 
    {
       element.setAttribute(cle,attributs[cle])
    }
    element.textContent = elementContent
    // console.log(element);
    return element;
}

function blocQuestions()
{
    let tableau 
    let tabText = [];
    cle = 0
    for (const cle in tabQuestions) 
    {
        
        const choixTableau = tabQuestions[cle];
        // console.log(choixTableau);
        const text1 = createElement('h2',{class:'text'},choixTableau.questions);
        const bloc = createElement('div',{class:'bloc'});
        bloc.appendChild(text1)
        
        for (let i = 0; i < choixTableau.answers.length; i++ ) 
        {   
            tableau = [];
            const checkbox = createElement('div',{class:'check'});
            const bloc1 = createElement('input',{type:'radio', name:'Quiz' , class:'checkbox' , id:'Quiz'+i});
            const bloc2 = createElement('label',{for:'Quiz'+i},choixTableau.answers[i]);
            // console.log(bloc2);
            checkbox.appendChild(bloc1)
            checkbox.appendChild(bloc2)
            // console.log(checkbox);
            tableau.push(checkbox);
            bloc.appendChild(...tableau)
            // console.log(tableau);
        }
        // console.log(bloc);
        
        
        // bloc.appendChild(...tableau);
        // console.log(bloc);
        tabText.push(bloc)
    }
    
    return tabText

}
// console.log(blocQuestions());


bout.addEventListener("click",()=>
{
    ++pos;

        Bloc.innerHTML = '';
        Bloc.appendChild(blocQuestions()[pos]);
}
)












// console.log(bloc);
        // tabText.push(text1)
        // bloc.appendChild(tableau);
        // bloc.appendChild(tabText);

        // text.innerText = choixTableau.questions;
        // console.log(choixTableau.answers.length);